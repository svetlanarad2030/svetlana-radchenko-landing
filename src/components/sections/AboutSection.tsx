/**
 * @fileoverview About section component with infographic and facts
 * @module components/sections/AboutSection
 */

import { ReactElement } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { cn } from '@/lib/utils';

export interface AboutSectionProps {
  /** Additional CSS classes */
  className?: string;
}

/**
 * About section component with infographic and facts.
 * 
 * Displays information about Svetlana's expertise with
 * visual elements and key statistics as specified in PRD.
 * 
 * @component
 * @example
 * ```tsx
 * <AboutSection className="custom-about-styles" />
 * ```
 */
export function AboutSection({ className }: AboutSectionProps): ReactElement {
  const stats = [
    {
      icon: '📊',
      value: '100+',
      label: 'Финансовых моделей',
      description: 'Созданных для различных отраслей',
    },
    {
      icon: '🏢',
      value: '50+',
      label: 'Компаний',
      description: 'Получили консультации',
    },
    {
      icon: '💡',
      value: '10+',
      label: 'Лет опыта',
      description: 'В финансовом консалтинге',
    },
    {
      icon: '🎯',
      value: '95%',
      label: 'Успешных проектов',
      description: 'Клиенты достигли поставленных целей',
    },
  ];

  const expertise = [
    {
      title: 'Финансовое моделирование',
      description: 'Создание детальных финансовых моделей для планирования и прогнозирования',
      icon: '📈',
    },
    {
      title: 'Бизнес-планирование',
      description: 'Разработка стратегических бизнес-планов и инвестиционных проектов',
      icon: '📋',
    },
    {
      title: 'Инвестиционный анализ',
      description: 'Оценка инвестиционных возможностей и рисков',
      icon: '💰',
    },
    {
      title: 'CFO-консалтинг',
      description: 'Услуги финансового директора на аутсорсе',
      icon: '👔',
    },
  ];

  return (
    <section className={cn(
      'py-16 md:py-24 px-4 bg-gradient-to-br from-bg-primary to-white',
      className
    )}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary mb-6">
            О специалисте
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Светлана Радченко — опытный финансовый консультант с глубокими знаниями 
            в области корпоративных финансов, стратегического планирования и инвестиционного анализа.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-brand-primary">
                Профессиональный подход
              </h3>
              <p className="text-text-secondary text-lg leading-relaxed">
                Каждый проект рассматривается индивидуально с учетом специфики бизнеса, 
                отрасли и поставленных целей. Использую современные методики финансового 
                анализа и моделирования.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-brand-primary">
                Образование и сертификаты
              </h3>
              <ul className="space-y-2 text-text-secondary text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">🎓</span>
                  <span>MBA в области финансов</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">📜</span>
                  <span>Сертификат CFA (Chartered Financial Analyst)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">💼</span>
                  <span>Опыт работы в ведущих консалтинговых компаниях</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                variant="elevated"
                padding="md"
                className="text-center hover:shadow-lg transition-shadow duration-200"
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold text-brand-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-text-primary mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-text-secondary">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, index) => (
            <Card
              key={index}
              variant="default"
              padding="md"
              hover={true}
              className="text-center"
            >
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold text-brand-primary mb-3">
                  {item.title}
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;