/**
 * @fileoverview Utility functions for the application
 * @module lib/utils
 */

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combine class names with Tailwind CSS merge
 * 
 * @param inputs - Class names to combine
 * @returns Merged class names
 * 
 * @example
 * ```typescript
 * const className = cn('px-4 py-2', 'bg-blue-500', 'hover:bg-blue-600');
 * ```
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Format date to readable Russian format
 * 
 * @param date - Date to format
 * @returns Formatted date string
 * 
 * @example
 * ```typescript
 * const formatted = formatDate(new Date()); // "15 июля 2024"
 * ```
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

/**
 * Format currency in Russian rubles
 * 
 * @param amount - Amount to format
 * @returns Formatted currency string
 * 
 * @example
 * ```typescript
 * const formatted = formatCurrency(15000); // "15 000 ₽"
 * ```
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
  }).format(amount);
}

/**
 * Truncate text to specified length
 * 
 * @param text - Text to truncate
 * @param length - Maximum length
 * @returns Truncated text with ellipsis
 * 
 * @example
 * ```typescript
 * const truncated = truncateText('Long text here', 10); // "Long text..."
 * ```
 */
export function truncateText(text: string, length: number): string {
  if (text.length <= length) {
    return text;
  }
  return text.slice(0, length) + '...';
}

/**
 * Sleep for specified milliseconds
 * 
 * @param ms - Milliseconds to sleep
 * @returns Promise that resolves after delay
 * 
 * @example
 * ```typescript
 * await sleep(1000); // Wait 1 second
 * ```
 */
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Check if code is running on client side
 * 
 * @returns True if running on client
 */
export function isClient(): boolean {
  return typeof window !== 'undefined';
}

/**
 * Check if code is running on server side
 * 
 * @returns True if running on server
 */
export function isServer(): boolean {
  return typeof window === 'undefined';
}

/**
 * Generate random ID
 * 
 * @param length - Length of ID
 * @returns Random ID string
 * 
 * @example
 * ```typescript
 * const id = generateId(8); // "a1b2c3d4"
 * ```
 */
export function generateId(length: number = 8): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  return result;
}

/**
 * Debounce function calls
 * 
 * @param func - Function to debounce
 * @param delay - Delay in milliseconds
 * @returns Debounced function
 * 
 * @example
 * ```typescript
 * const debouncedSearch = debounce(search, 300);
 * ```
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

/**
 * Throttle function calls
 * 
 * @param func - Function to throttle
 * @param delay - Delay in milliseconds
 * @returns Throttled function
 * 
 * @example
 * ```typescript
 * const throttledScroll = throttle(handleScroll, 100);
 * ```
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, delay);
    }
  };
}

/**
 * Convert string to slug (URL-friendly)
 * 
 * @param text - Text to convert
 * @returns URL-friendly slug
 * 
 * @example
 * ```typescript
 * const slug = slugify('Финансовый консалтинг'); // "finansovyy-konsalting"
 * ```
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

/**
 * Check if email is valid
 * 
 * @param email - Email to validate
 * @returns True if email is valid
 * 
 * @example
 * ```typescript
 * const isValid = isValidEmail('test@example.com'); // true
 * ```
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Capitalize first letter of string
 * 
 * @param text - Text to capitalize
 * @returns Capitalized text
 * 
 * @example
 * ```typescript
 * const capitalized = capitalize('hello world'); // "Hello world"
 * ```
 */
export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}