/**
 * @fileoverview Financial consulting page component
 * @module app/financial-consulting/page
 */

import { ReactElement } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ConsultationButton } from '@/components/forms/ConsultationButton';

export const metadata: Metadata = {
  title: 'Финансовый консалтинг и менторство - Светлана Радченко',
  description: 'Профессиональные консультации по финансовому моделированию, бизнес-планированию и подготовке к инвестициям. Аудит моделей и менторство.',
  keywords: [
    'финансовый консалтинг',
    'финансовое моделирование',
    'бизнес-планирование',
    'инвестиционный анализ',
    'аудит финансовых моделей',
    'менторство',
    'подготовка к инвестициям',
  ],
  openGraph: {
    title: 'Финансовый консалтинг и менторство - Светлана Радченко',
    description: 'Профессиональные консультации по финансовому моделированию, бизнес-планированию и подготовке к инвестициям.',
    url: '/financial-consulting',
    images: ['/images/image8.png'],
  },
};

/**
 * Financial consulting page component.
 * 
 * Displays consulting services, workflow, testimonials, and pricing
 * as specified in the PRD.
 * 
 * @returns Financial consulting page JSX
 */
export default function FinancialConsultingPage(): ReactElement {
  const services = [
    {
      id: 'modeling',
      title: 'Финансовое моделирование',
      description: 'Создание детальных финансовых моделей для планирования и прогнозирования',
      features: [
        'Трёхлетнее планирование',
        'Сценарный анализ',
        'Чувствительность к рискам',
        'Интеграция с учётными системами',
      ],
      icon: '📊',
    },
    {
      id: 'audit',
      title: 'Аудит моделей',
      description: 'Проверка существующих финансовых моделей на корректность и эффективность',
      features: [
        'Проверка формул и логики',
        'Анализ предположений',
        'Рекомендации по улучшению',
        'Стандартизация структуры',
      ],
      icon: '🔍',
    },
    {
      id: 'business-planning',
      title: 'Бизнес-планирование',
      description: 'Разработка стратегических бизнес-планов и инвестиционных предложений',
      features: [
        'Анализ рынка и конкурентов',
        'Финансовые прогнозы',
        'Стратегия развития',
        'Презентация для инвесторов',
      ],
      icon: '📈',
    },
    {
      id: 'investment-prep',
      title: 'Подготовка к инвестициям',
      description: 'Подготовка компаний к привлечению инвестиций и переговорам с инвесторами',
      features: [
        'Валуация компании',
        'Дью-дилидженс модели',
        'Инвестиционный меморандум',
        'Подготовка к переговорам',
      ],
      icon: '💰',
    },
    {
      id: 'mentoring',
      title: 'Менторинг',
      description: 'Персональное наставничество по финансовому планированию и развитию',
      features: [
        'Индивидуальный подход',
        'Долгосрочное сопровождение',
        'Развитие навыков команды',
        'Регулярные консультации',
      ],
      icon: '👥',
    },
  ];

  const workflowSteps = [
    {
      step: 1,
      title: 'Клиент описывает задачу',
      description: 'Проводим детальное интервью для понимания целей и текущей ситуации',
      icon: '💬',
    },
    {
      step: 2,
      title: 'Обсуждение формата',
      description: 'Определяем оптимальный формат работы и временные рамки',
      icon: '🤝',
    },
    {
      step: 3,
      title: 'Сценарный анализ',
      description: 'Разрабатываем различные сценарии и проводим анализ рисков',
      icon: '🎯',
    },
    {
      step: 4,
      title: 'Результат и сопровождение',
      description: 'Предоставляем результат работы и обеспечиваем поддержку',
      icon: '✅',
    },
  ];

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Navigation */}
      <nav className="bg-white shadow-sm px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-brand-primary">
            Светлана Радченко
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-text-secondary hover:text-brand-primary transition-colors">
              Главная
            </Link>
            <Link href="/training" className="text-text-secondary hover:text-brand-primary transition-colors">
              Обучение
            </Link>
            <Link href="/financial-consulting" className="text-brand-primary font-medium">
              Консалтинг
            </Link>
            <Link href="/cfo-service" className="text-text-secondary hover:text-brand-primary transition-colors">
              CFO-сервис
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-6">
              Финансовый консалтинг
            </h1>
            <p className="text-xl md:text-2xl text-brand-accent mb-8 font-medium">
              Менторство и консультации
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-primary mb-6">
                Профессиональный подход
              </h2>
              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                Индивидуальный подход к каждому проекту с учётом специфики бизнеса, 
                отрасли и поставленных целей. Использую современные методики 
                финансового анализа и моделирования.
              </p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">✓</span>
                  <span>Глубокий анализ текущего состояния</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">✓</span>
                  <span>Практические рекомендации</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">✓</span>
                  <span>Долгосрочное сопровождение</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/images/image8.png"
                alt="Финансовый консалтинг"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
              Услуги консалтинга
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Комплексные решения для финансового планирования и развития бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} variant="elevated" hover={true} className="h-full">
                <CardHeader>
                  <div className="text-4xl mb-4 text-center">{service.icon}</div>
                  <CardTitle className="text-xl text-center text-brand-primary mb-3">
                    {service.title}
                  </CardTitle>
                  <p className="text-text-secondary text-center">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-brand-accent text-sm mt-1">✓</span>
                        <span className="text-text-secondary text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-16 px-4 bg-gradient-to-b from-bg-primary to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
              Процесс работы
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Структурированный подход к решению ваших задач
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <div className="text-4xl mb-4">{step.icon}</div>
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-brand-primary/30 transform -translate-x-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-brand-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Image
              src="/images/image17.jpeg"
              alt="Процесс работы - схема 1"
              width={400}
              height={300}
              className="rounded-lg shadow-lg mx-auto mb-4"
            />
            <Image
              src="/images/image18.jpeg"
              alt="Процесс работы - схема 2"
              width={400}
              height={300}
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
              Отзыв клиента
            </h2>
          </div>

          <Card variant="elevated" className="bg-gradient-to-br from-bg-primary to-white">
            <CardContent className="p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/image16.jpg"
                    alt="Клиент"
                    width={120}
                    height={120}
                    className="rounded-full"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <blockquote className="text-xl text-text-secondary italic mb-6 leading-relaxed">
                    &ldquo;Светлана помогла нам создать комплексную финансовую модель для нашего стартапа. 
                    Благодаря её экспертизе мы смогли успешно привлечь инвестиции и структурировать 
                    финансовое планирование. Профессиональный подход и глубокое понимание бизнеса.&rdquo;
                  </blockquote>
                  <div className="flex flex-col md:flex-row md:items-center gap-2">
                    <span className="font-semibold text-brand-primary">Александр Петров</span>
                    <span className="text-text-secondary">CEO, TechStart</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-gradient-to-b from-bg-primary to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
              Стоимость консультаций
            </h2>
            <p className="text-lg text-text-secondary">
              Индивидуальный подход к ценообразованию
            </p>
          </div>

          <Card variant="elevated" className="bg-white">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">💼</div>
                  <h3 className="text-xl font-semibold text-brand-primary mb-3">
                    Разовая консультация
                  </h3>
                  <div className="text-3xl font-bold text-brand-primary mb-2">
                    от 15 000 ₽
                  </div>
                  <p className="text-text-secondary text-sm">За час</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-semibold text-brand-primary mb-3">
                    Проектная работа
                  </h3>
                  <div className="text-3xl font-bold text-brand-primary mb-2">
                    Индивидуально
                  </div>
                  <p className="text-text-secondary text-sm">По объёму работ</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold text-brand-primary mb-3">
                    Абонентское сопровождение
                  </h3>
                  <div className="text-3xl font-bold text-brand-primary mb-2">
                    от 50 000 ₽
                  </div>
                  <p className="text-text-secondary text-sm">В месяц</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-brand-accent text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Обсудим ваш проект?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Получите индивидуальную оценку стоимости
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConsultationButton
              sourcePage="financial-consulting"
              variant="secondary"
              size="lg"
              className="bg-white text-brand-accent hover:bg-white/90"
            >
              Обсудить проект
            </ConsultationButton>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-accent">
                Получить расчёт
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}