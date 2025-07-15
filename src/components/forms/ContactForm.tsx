/**
 * @fileoverview Contact form component with validation and submission
 * @module components/forms/ContactForm
 */

'use client';

import { ReactElement, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { contactFormSchema, type ContactFormData } from '@/lib/schemas';
import { EMAIL_SUBJECTS } from '@/lib/email-tracking';
import { cn } from '@/lib/utils';

export interface ContactFormProps {
  /** Source page where the form is displayed */
  sourcePage: string;
  /** Additional CSS classes */
  className?: string;
  /** Form title */
  title?: string;
  /** Form description */
  description?: string;
  /** Show as card */
  asCard?: boolean;
  /** Success callback */
  onSuccess?: () => void;
  /** Error callback */
  onError?: (error: string) => void;
}

/**
 * Contact form component with React Hook Form and Zod validation.
 * 
 * Provides a fully functional contact form with proper validation,
 * error handling, and email tracking for form submissions.
 * 
 * @component
 * @example
 * ```tsx
 * <ContactForm
 *   sourcePage="contact"
 *   title="Свяжитесь с нами"
 *   description="Заполните форму ниже, и мы свяжемся с вами в ближайшее время"
 *   asCard={true}
 *   onSuccess={() => showSuccessMessage()}
 * />
 * ```
 */
export function ContactForm({
  sourcePage,
  className,
  title = 'Свяжитесь с нами',
  description,
  asCard = false,
  onSuccess,
  onError,
}: ContactFormProps): ReactElement {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur',
    defaultValues: {
      source_page: sourcePage,
    },
  });

  /**
   * Handle form submission
   */
  const onSubmit = async (data: ContactFormData): Promise<void> => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Track form submission
      try {
        await fetch('/api/track-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            subject: EMAIL_SUBJECTS.GENERAL_INQUIRY,
            source_page: sourcePage,
          }),
        });
      } catch (trackError) {
        console.error('Failed to track email:', trackError);
      }

      // Simulate API call (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1000));

      // In a real application, you would send the data to your backend
      console.log('Form submitted:', data);

      // Show success state
      setIsSuccess(true);
      reset();
      onSuccess?.();

      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Произошла ошибка при отправке формы';
      setSubmitError(errorMessage);
      onError?.(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formContent = (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="Имя"
        type="text"
        placeholder="Введите ваше имя"
        error={errors.name?.message}
        {...register('name')}
        required
      />

      <Input
        label="Email"
        type="email"
        placeholder="Введите ваш email"
        error={errors.email?.message}
        {...register('email')}
        required
      />

      <Textarea
        label="Сообщение"
        placeholder="Опишите ваш вопрос или запрос"
        error={errors.message?.message}
        rows={5}
        {...register('message')}
        required
      />

      {submitError && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-sm text-red-600">{submitError}</p>
        </div>
      )}

      {isSuccess && (
        <div className="p-3 bg-green-50 border border-green-200 rounded-md">
          <p className="text-sm text-green-600">
            Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.
          </p>
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        loading={isSubmitting}
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
      </Button>
    </form>
  );

  if (asCard) {
    return (
      <Card className={cn('w-full max-w-lg', className)}>
        <CardHeader>
          <CardTitle className="text-center">{title}</CardTitle>
          {description && (
            <p className="text-center text-muted-foreground">{description}</p>
          )}
        </CardHeader>
        <CardContent>
          {formContent}
        </CardContent>
      </Card>
    );
  }

  return (
    <div className={cn('w-full max-w-lg', className)}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-center mb-2">{title}</h2>
        {description && (
          <p className="text-center text-muted-foreground">{description}</p>
        )}
      </div>
      {formContent}
    </div>
  );
}

export default ContactForm;