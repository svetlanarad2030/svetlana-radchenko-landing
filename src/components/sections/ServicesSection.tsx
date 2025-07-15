/**
 * @fileoverview Services section component with service cards
 * @module components/sections/ServicesSection
 */

import { ReactElement } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export interface ServicesSectionProps {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Services section component with service cards.
 * 
 * Displays the three main services: Training, Financial Consulting,
 * and CFO-as-a-Service as specified in the PRD.
 * 
 * @component
 * @example
 * ```tsx
 * <ServicesSection className="custom-services-styles" />
 * ```
 */
export function ServicesSection({ className }: ServicesSectionProps): ReactElement {
  const services = [
    {
      id: 'training',
      title: 'Обучение',
      subtitle: 'Финансы без страха и шаблонов',
      description: 'Курсы и воркшопы по финансовому моделированию и планированию',
      features: [
        'Онлайн-курсы в записи',
        'Групповые воркшопы',
        'Индивидуальные программы',
        'Поддержка на русском и английском',
      ],
      icon: '📚',
      price: 'от 2 000 ₽',
      ctaText: 'Узнать больше',
      ctaLink: '/training',
      background: 'bg-gradient-to-br from-blue-50 to-indigo-50',
      borderColor: 'border-blue-200',
    },
    {
      id: 'consulting',
      title: 'Финансовый консалтинг',
      subtitle: 'Менторство и консультации',
      description: 'Комплексные консультации по финансовому моделированию и бизнес-планированию',
      features: [
        'Финансовое моделирование',
        'Аудит моделей',
        'Бизнес-планирование',
        'Подготовка к инвестициям',
        'Менторинг',
      ],
      icon: '💼',
      price: 'от 15 000 ₽/час',
      ctaText: 'Обсудить проект',
      ctaLink: '/financial-consulting',
      background: 'bg-gradient-to-br from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
    },
    {
      id: 'cfo',
      title: 'CFO-сервис',
      subtitle: 'Сопровождение сделок',
      description: 'Услуги финансового директора на аутсорсе и сопровождение сделок',
      features: [
        'CFO на аутсорсе',
        'Сопровождение сделок M&A',
        'Независимый директор',
        'Стратегический анализ',
      ],
      icon: '👔',
      price: 'от 50 000 ₽/мес',
      ctaText: 'Задать вопрос',
      ctaLink: '/cfo-service',
      background: 'bg-gradient-to-br from-purple-50 to-violet-50',
      borderColor: 'border-purple-200',
    },
  ];

  return (
    <section 
      id="services"
      className={cn(
        'py-16 md:py-24 px-4 bg-gradient-to-b from-white to-bg-primary',
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary mb-6">
            Услуги
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Профессиональные услуги в области финансового консалтинга, обучения и стратегического планирования
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              variant="elevated"
              padding="lg"
              hover={true}
              className={cn(
                'h-full flex flex-col transition-all duration-300 hover:scale-105',
                service.background,
                service.borderColor
              )}
            >
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-4xl bg-white rounded-full shadow-md">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl text-center text-brand-primary mb-2">
                  {service.title}
                </CardTitle>
                <p className="text-center text-brand-accent font-medium mb-4">
                  {service.subtitle}
                </p>
                <p className="text-center text-text-secondary">
                  {service.description}
                </p>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col justify-between">
                {/* Features */}
                <div className="mb-6">
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-brand-accent mt-1 text-sm">✓</span>
                        <span className="text-text-secondary text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and CTA */}
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-primary mb-4">
                    {service.price}
                  </div>
                  <Link href={service.ctaLink}>
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full shadow-lg hover:shadow-xl"
                    >
                      {service.ctaText}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-brand-primary/10">
            <h3 className="text-2xl font-bold text-brand-primary mb-4">
              Нужна индивидуальная консультация?
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Каждый проект уникален. Обсудим ваши задачи и подберем оптимальное решение.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Связаться со мной
                </Button>
              </Link>
              <Link href="https://t.me/FinModelGuru" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  Telegram
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;