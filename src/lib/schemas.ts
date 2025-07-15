/**
 * @fileoverview Zod validation schemas for form inputs and API responses
 * @module lib/schemas
 */

import { z } from 'zod';

// Email tracking schema
export const emailLogSchema = z.object({
  id: z.number().int().positive(),
  timestamp: z.string().datetime(),
  subject: z.string().min(1),
  source_page: z.string().min(1),
});

export type EmailLog = z.infer<typeof emailLogSchema>;

// Contact form schema
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Имя должно содержать минимум 2 символа').max(50, 'Имя слишком длинное'),
  email: z.string().email('Некорректный email адрес'),
  message: z.string().min(10, 'Сообщение должно содержать минимум 10 символов').max(1000, 'Сообщение слишком длинное'),
  source_page: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Service inquiry schema
export const serviceInquirySchema = z.object({
  service: z.enum(['training', 'consulting', 'cfo']),
  company: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
});

export type ServiceInquiry = z.infer<typeof serviceInquirySchema>;

// Email tracking API request schema
export const emailTrackingRequestSchema = z.object({
  subject: z.string().min(1, 'Тема письма обязательна'),
  source_page: z.string().min(1, 'Источник страницы обязателен'),
});

export type EmailTrackingRequest = z.infer<typeof emailTrackingRequestSchema>;

// API response schema generator
export const apiResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    success: z.boolean(),
    data: dataSchema,
    error: z.string().optional(),
    timestamp: z.string().datetime(),
  });

// Standard API success response
export const apiSuccessResponseSchema = z.object({
  success: z.literal(true),
  message: z.string().optional(),
  timestamp: z.string().datetime(),
});

export type ApiSuccessResponse = z.infer<typeof apiSuccessResponseSchema>;

// Standard API error response
export const apiErrorResponseSchema = z.object({
  success: z.literal(false),
  error: z.string(),
  timestamp: z.string().datetime(),
});

export type ApiErrorResponse = z.infer<typeof apiErrorResponseSchema>;