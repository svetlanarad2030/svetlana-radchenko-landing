/**
 * @fileoverview Card component with variants and interactive states
 * @module components/ui/Card
 */

'use client';

import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const cardVariants = cva(
  'rounded-lg border bg-card text-card-foreground shadow-sm',
  {
    variants: {
      variant: {
        default: 'border-border',
        elevated: 'border-border shadow-md',
        outline: 'border-2 border-brand-primary',
      },
      padding: {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
    },
  }
);

export interface CardComponentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  hover?: boolean;
  clickable?: boolean;
}

/**
 * Card component with variants and interactive states.
 * 
 * Provides a flexible container with consistent styling and
 * optional interactive states. Supports hover effects and clickable variants.
 * 
 * @component
 * @example
 * ```tsx
 * <Card 
 *   variant="elevated" 
 *   padding="lg"
 *   hover={true}
 *   clickable={true}
 *   onClick={handleCardClick}
 * >
 *   <CardHeader>
 *     <CardTitle>Service Title</CardTitle>
 *   </CardHeader>
 *   <CardContent>
 *     <p>Service description...</p>
 *   </CardContent>
 * </Card>
 * ```
 */
const Card = forwardRef<HTMLDivElement, CardComponentProps>(
  ({ className, variant, padding, hover, clickable, onClick, ...props }, ref) => {
    const cardClasses = cn(
      cardVariants({ variant, padding }),
      {
        'hover:shadow-lg hover:shadow-brand-primary/10 transition-shadow duration-200': hover,
        'cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2': clickable,
      },
      className
    );

    return (
      <div
        ref={ref}
        className={cardClasses}
        onClick={clickable ? onClick : undefined}
        role={clickable ? 'button' : undefined}
        tabIndex={clickable ? 0 : undefined}
        onKeyDown={clickable ? (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick?.(e as any);
          }
        } : undefined}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';

/**
 * Card header component for consistent card structure
 */
const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 p-6', className)}
      {...props}
    />
  )
);

CardHeader.displayName = 'CardHeader';

/**
 * Card title component for consistent typography
 */
const CardTitle = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-2xl font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
);

CardTitle.displayName = 'CardTitle';

/**
 * Card description component for consistent typography
 */
const CardDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  )
);

CardDescription.displayName = 'CardDescription';

/**
 * Card content component for consistent spacing
 */
const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('p-6 pt-0', className)}
      {...props}
    />
  )
);

CardContent.displayName = 'CardContent';

/**
 * Card footer component for consistent spacing
 */
const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center p-6 pt-0', className)}
      {...props}
    />
  )
);

CardFooter.displayName = 'CardFooter';

export { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter, 
  cardVariants 
};