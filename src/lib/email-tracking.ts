/**
 * @fileoverview Email tracking utility functions
 * @module lib/email-tracking
 */

import { emailTrackingRequestSchema, type EmailTrackingRequest } from './schemas';

/**
 * Generate mailto link with pre-filled content
 * 
 * @param options - Mailto link options
 * @returns Formatted mailto URL
 * 
 * @example
 * ```typescript
 * const mailtoUrl = generateMailtoLink({
 *   to: 'finmodelguru@gmail.com',
 *   subject: 'Консультация',
 *   body: 'Здравствуйте, я хочу записаться на консультацию.'
 * });
 * ```
 */
export function generateMailtoLink(options: {
  to: string;
  subject?: string;
  body?: string;
  cc?: string;
  bcc?: string;
}): string {
  const params = new URLSearchParams();
  
  if (options.subject) {
    params.append('subject', options.subject);
  }
  
  if (options.body) {
    params.append('body', options.body);
  }
  
  if (options.cc) {
    params.append('cc', options.cc);
  }
  
  if (options.bcc) {
    params.append('bcc', options.bcc);
  }
  
  const queryString = params.toString();
  return `mailto:${options.to}${queryString ? `?${queryString}` : ''}`;
}

/**
 * Get consultation mailto link (as per PRD requirements)
 * 
 * @returns Formatted mailto URL for consultation
 */
export function getConsultationMailtoLink(): string {
  return generateMailtoLink({
    to: 'finmodelguru@gmail.com',
    subject: 'Консультация',
    body: 'Здравствуйте, я хочу записаться на консультацию.',
  });
}


/**
 * Validate email tracking request
 * 
 * @param request - Raw request data
 * @returns Validated request or null if invalid
 */
export function validateEmailTrackingRequest(request: unknown): EmailTrackingRequest | null {
  try {
    return emailTrackingRequestSchema.parse(request);
  } catch {
    return null;
  }
}

/**
 * Common email subjects used in the application
 */
export const EMAIL_SUBJECTS = {
  CONSULTATION: 'Консультация',
  TRAINING: 'Обучение',
  CONSULTING: 'Финансовый консалтинг',
  CFO_SERVICE: 'CFO сервис',
  GENERAL_INQUIRY: 'Общий запрос',
} as const;

/**
 * Common source pages used in the application
 */
export const SOURCE_PAGES = {
  HOME: 'home',
  TRAINING: 'training',
  CONSULTING: 'financial-consulting',
  CFO: 'cfo-service',
  CONTACT: 'contact',
} as const;