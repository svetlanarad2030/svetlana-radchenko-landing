/**
 * @fileoverview SQLite database setup and operations
 * @module lib/database
 */

import Database from 'better-sqlite3';
import { join } from 'path';
import { emailLogSchema, type EmailLog } from './schemas';

// Database path - in project root
const DB_PATH = join(process.cwd(), 'emails.db');

// Create database instance
let db: Database.Database;

/**
 * Initialize database connection and create tables
 * 
 * @returns Database instance
 */
export function initializeDatabase(): Database.Database {
  if (!db) {
    db = new Database(DB_PATH);
    
    // Enable WAL mode for better performance
    db.pragma('journal_mode = WAL');
    
    // Create email_logs table if it doesn't exist
    db.exec(`
      CREATE TABLE IF NOT EXISTS email_logs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
        subject TEXT NOT NULL,
        source_page TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    // Create index for better query performance
    db.exec(`
      CREATE INDEX IF NOT EXISTS idx_email_logs_timestamp 
      ON email_logs (timestamp)
    `);
    
    db.exec(`
      CREATE INDEX IF NOT EXISTS idx_email_logs_source_page 
      ON email_logs (source_page)
    `);
  }
  
  return db;
}

/**
 * Get database instance (initialize if needed)
 * 
 * @returns Database instance
 */
export function getDatabase(): Database.Database {
  if (!db) {
    return initializeDatabase();
  }
  return db;
}

/**
 * Log email click to database
 * 
 * @param subject - Email subject
 * @param sourcePage - Source page where click occurred
 * @returns Database insert result
 * 
 * @example
 * ```typescript
 * const result = logEmailClick('Консультация', 'home');
 * console.log(`Logged click with ID: ${result.lastInsertRowid}`);
 * ```
 */
export function logEmailClick(subject: string, sourcePage: string): Database.RunResult {
  const database = getDatabase();
  
  const stmt = database.prepare(`
    INSERT INTO email_logs (subject, source_page) 
    VALUES (?, ?)
  `);
  
  return stmt.run(subject, sourcePage);
}

/**
 * Get email logs with optional filtering
 * 
 * @param options - Query options
 * @returns Array of email logs
 * 
 * @example
 * ```typescript
 * const logs = getEmailLogs({ limit: 10, sourcePage: 'home' });
 * ```
 */
export function getEmailLogs(options: {
  limit?: number;
  offset?: number;
  sourcePage?: string;
  startDate?: string;
  endDate?: string;
} = {}): EmailLog[] {
  const database = getDatabase();
  
  let query = `
    SELECT id, timestamp, subject, source_page 
    FROM email_logs
  `;
  
  const conditions: string[] = [];
  const params: any[] = [];
  
  if (options.sourcePage) {
    conditions.push('source_page = ?');
    params.push(options.sourcePage);
  }
  
  if (options.startDate) {
    conditions.push('timestamp >= ?');
    params.push(options.startDate);
  }
  
  if (options.endDate) {
    conditions.push('timestamp <= ?');
    params.push(options.endDate);
  }
  
  if (conditions.length > 0) {
    query += ' WHERE ' + conditions.join(' AND ');
  }
  
  query += ' ORDER BY timestamp DESC';
  
  if (options.limit) {
    query += ' LIMIT ?';
    params.push(options.limit);
  }
  
  if (options.offset) {
    query += ' OFFSET ?';
    params.push(options.offset);
  }
  
  const stmt = database.prepare(query);
  const results = stmt.all(...params);
  
  // Validate results with Zod
  return results.map(result => emailLogSchema.parse(result));
}

/**
 * Get email click statistics
 * 
 * @returns Click statistics by source page
 * 
 * @example
 * ```typescript
 * const stats = getEmailClickStats();
 * // { home: 15, training: 8, consulting: 12 }
 * ```
 */
export function getEmailClickStats(): Record<string, number> {
  const database = getDatabase();
  
  const stmt = database.prepare(`
    SELECT source_page, COUNT(*) as count
    FROM email_logs
    GROUP BY source_page
    ORDER BY count DESC
  `);
  
  const results = stmt.all() as { source_page: string; count: number }[];
  
  return results.reduce((acc, { source_page, count }) => {
    acc[source_page] = count;
    return acc;
  }, {} as Record<string, number>);
}

/**
 * Close database connection
 * 
 * Should be called when application shuts down
 */
export function closeDatabase(): void {
  if (db) {
    db.close();
  }
}

// Initialize database on module load
initializeDatabase();