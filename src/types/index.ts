/**
 * @fileoverview TypeScript type definitions for the application
 * @module types
 */

import { ReactElement } from 'react';

// Re-export schema types
export type {
  EmailLog,
  ContactFormData,
  ServiceInquiry,
  EmailTrackingRequest,
  ApiSuccessResponse,
  ApiErrorResponse,
} from '@/lib/schemas';

/**
 * Base component props interface
 */
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Page component props interface
 */
export interface PageProps {
  params: Record<string, string>;
  searchParams: Record<string, string | string[] | undefined>;
}

/**
 * Service information interface
 */
export interface ServiceInfo {
  id: string;
  title: string;
  description: string;
  features: string[];
  price?: string;
  priceNote?: string;
  ctaText: string;
  ctaLink: string;
  icon?: string;
}

/**
 * Testimonial interface
 */
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  avatar?: string;
  rating?: number;
}

/**
 * Pricing table row interface
 */
export interface PricingRow {
  format: string;
  access: string;
  price: string;
  note?: string;
}

/**
 * Client/Partner logo interface
 */
export interface ClientLogo {
  id: string;
  name: string;
  logo: string;
  website?: string;
  alt: string;
}

/**
 * Navigation item interface
 */
export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

/**
 * Contact information interface
 */
export interface ContactInfo {
  email: string;
  telegram?: string;
  whatsapp?: string;
  linkedin?: string;
  phone?: string;
}

/**
 * SEO metadata interface
 */
export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  canonical?: string;
}

/**
 * Form state interface
 */
export interface FormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error?: string;
}

/**
 * Email tracking event interface
 */
export interface EmailTrackingEvent {
  subject: string;
  sourcePage: string;
  timestamp: Date;
  userAgent?: string;
  ipAddress?: string;
}

/**
 * Service type enum
 */
export enum ServiceType {
  TRAINING = 'training',
  CONSULTING = 'consulting',
  CFO = 'cfo',
}

/**
 * Component variant types
 */
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type InputVariant = 'default' | 'error' | 'success';
export type CardVariant = 'default' | 'elevated' | 'outline';

/**
 * Layout component props
 */
export interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Section component props
 */
export interface SectionProps extends BaseComponentProps {
  id?: string;
  title?: string;
  subtitle?: string;
  centered?: boolean;
  background?: 'default' | 'accent' | 'muted';
}

/**
 * Button component props
 */
export interface ButtonProps extends BaseComponentProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  external?: boolean;
}

/**
 * Input component props
 */
export interface InputProps extends BaseComponentProps {
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number';
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  variant?: InputVariant;
  error?: string;
  helperText?: string;
  label?: string;
  id?: string;
  name?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  readOnly?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
}

/**
 * Textarea component props
 */
export interface TextareaProps extends BaseComponentProps {
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  required?: boolean;
  variant?: InputVariant;
  error?: string;
  helperText?: string;
  label?: string;
  id?: string;
  name?: string;
  rows?: number;
  cols?: number;
  maxLength?: number;
  minLength?: number;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

/**
 * Card component props
 */
export interface CardProps extends BaseComponentProps {
  variant?: CardVariant;
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
  clickable?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

/**
 * Modal component props
 */
export interface ModalProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  centered?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscapeKey?: boolean;
  showCloseButton?: boolean;
}

/**
 * Utility type for React component with required return type
 */
export type ReactComponent<P = {}> = (props: P) => ReactElement;

/**
 * Utility type for async React component
 */
export type AsyncReactComponent<P = {}> = (props: P) => Promise<ReactElement>;

/**
 * Utility type for component with children
 */
export type ComponentWithChildren<P = {}> = ReactComponent<P & { children: React.ReactNode }>;

/**
 * Utility type for optional props
 */
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * Utility type for required props
 */
export type Required<T, K extends keyof T> = T & { [P in K]-?: T[P] };