/**
 * @fileoverview Clients and partners section with logo grid
 * @module components/sections/ClientsSection
 */

import { ReactElement } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/Card';
import { cn } from '@/lib/utils';

export interface ClientsSectionProps {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Clients and partners section with logo grid.
 * 
 * Displays client and partner logos as specified in the PRD.
 * Uses images from the PRD images folder.
 * 
 * @component
 * @example
 * ```tsx
 * <ClientsSection className="custom-clients-styles" />
 * ```
 */
export function ClientsSection({ className }: ClientsSectionProps): ReactElement {
  const clients = [
    {
      id: 'client-1',
      name: 'Клиент 1',
      logo: '/images/image1.png',
      description: 'Партнер в области финансового консалтинга',
    },
    {
      id: 'client-2',
      name: 'Клиент 2',
      logo: '/images/image2.png',
      description: 'Сотрудничество в области обучения',
    },
    {
      id: 'client-3',
      name: 'Клиент 3',
      logo: '/images/image3.jpeg',
      description: 'Проект по финансовому моделированию',
    },
    {
      id: 'client-4',
      name: 'Клиент 4',
      logo: '/images/image4.png',
      description: 'CFO-сервис для стартапа',
    },
    {
      id: 'client-5',
      name: 'Клиент 5',
      logo: '/images/image5.png',
      description: 'Консалтинг по инвестиционному анализу',
    },
  ];

  const testimonials = [
    {
      id: 'testimonial-1',
      name: 'Александр Петров',
      role: 'CEO, TechStart',
      content: 'Светлана помогла нам создать детальную финансовую модель для привлечения инвестиций. Профессиональный подход и глубокое понимание бизнеса.',
      avatar: '/images/image16.jpg',
    },
    {
      id: 'testimonial-2',
      name: 'Мария Иванова',
      role: 'CFO, GrowthCorp',
      content: 'Благодаря консультациям Светланы мы смогли оптимизировать финансовые процессы и повысить эффективность планирования.',
      avatar: '/images/image16.jpg',
    },
  ];

  return (
    <section className={cn(
      'py-16 md:py-24 px-4 bg-white',
      className
    )}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary mb-6">
            Клиенты и партнеры
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Доверие ведущих компаний и успешное сотрудничество в различных отраслях
          </p>
        </div>

        {/* Clients Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {clients.map((client) => (
              <Card
                key={client.id}
                variant="default"
                padding="md"
                hover={true}
                className="group transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 flex flex-col items-center justify-center h-32">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              variant="elevated"
              padding="lg"
              className="bg-gradient-to-br from-bg-primary to-white"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-brand-primary">
                        {testimonial.name}
                      </h4>
                      <span className="text-text-secondary text-sm">
                        {testimonial.role}
                      </span>
                    </div>
                    <blockquote className="text-text-secondary italic leading-relaxed">
                      &ldquo;{testimonial.content}&rdquo;
                    </blockquote>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-primary mb-2">100+</div>
            <div className="text-text-secondary">Успешных проектов</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-primary mb-2">15+</div>
            <div className="text-text-secondary">Отраслей</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-primary mb-2">95%</div>
            <div className="text-text-secondary">Клиентов рекомендуют</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientsSection;