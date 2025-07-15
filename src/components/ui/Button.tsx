/**
 * @fileoverview Button component with multiple variants and sizes
 * @module components/ui/Button
 */

'use client';

import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-brand-primary text-white hover:bg-brand-primary-hover shadow-sm',
        secondary: 'bg-brand-accent text-white hover:bg-brand-accent-hover shadow-sm',
        outline: 'border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white',
        ghost: 'hover:bg-brand-primary/10 hover:text-brand-primary',
        link: 'text-brand-primary underline-offset-4 hover:underline',
      },
      size: {
        sm: 'h-9 px-3 py-2 text-sm',
        md: 'h-10 px-4 py-2',
        lg: 'h-11 px-6 py-3 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonComponentProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  href?: string;
  external?: boolean;
}

/**
 * Button component with multiple variants and sizes.
 * 
 * Provides a reusable button with consistent styling and behavior
 * across the application. Supports keyboard navigation and screen readers.
 * 
 * @component
 * @example
 * ```tsx
 * <Button 
 *   variant="primary" 
 *   size="md" 
 *   onClick={handleSubmit}
 *   loading={isSubmitting}
 * >
 *   Submit Form
 * </Button>
 * ```
 */
const Button = forwardRef<HTMLButtonElement, ButtonComponentProps>(
  ({ className, variant, size, loading, disabled, children, href, external, ...props }, ref) => {
    const buttonClasses = cn(buttonVariants({ variant, size, className }));
    
    if (href) {
      return (
        <a
          href={href}
          className={buttonClasses}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          {...(props as any)}
        >
          {loading && (
            <svg
              className="mr-2 h-4 w-4 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          )}
          {children}
        </a>
      );
    }

    return (
      <button
        className={buttonClasses}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };