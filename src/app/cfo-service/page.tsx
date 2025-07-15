/**
 * @fileoverview CFO service page component
 * @module app/cfo-service/page
 */

import { ReactElement } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ConsultationButton } from '@/components/forms/ConsultationButton';

export const metadata: Metadata = {
  title: 'CFO и сопровождение сделок - Светлана Радченко',
  description: 'Услуги финансового директора на аутсорсе, сопровождение сделок M&A и работа независимым директором. Профессиональный CFO-сервис.',
  keywords: [
    'CFO на аутсорсе',
    'финансовый директор',
    'сопровождение сделок',
    'M&A',
    'независимый директор',
    'финансовое управление',
    'аутсорсинг CFO',
  ],
  openGraph: {
    title: 'CFO и сопровождение сделок - Светлана Радченко',
    description: 'Услуги финансового директора на аутсорсе, сопровождение сделок M&A и работа независимым директором.',
    url: '/cfo-service',
    images: ['/images/image10.png'],
  },
};

/**
 * CFO service page component.
 * 
 * Displays CFO services, pricing, testimonials, and contact information
 * as specified in the PRD.
 * 
 * @returns CFO service page JSX
 */
export default function CFOServicePage(): ReactElement {
  const services = [
    {
      id: 'cfo-outsource',
      title: 'CFO на аутсорсе',
      description: 'Полный спектр услуг финансового директора на аутсорсе для растущих компаний',
      features: [
        'Финансовое планирование и бюджетирование',
        'Управленческая отчётность',
        'Контроль финансовых показателей',
        'Работа с банками и инвесторами',
        'Оптимизация финансовых процессов',
        'Стратегическое планирование',
      ],
      icon: '👔',
      timeCommitment: '5-10 часов в месяц',
      suitable: 'Малый и средний бизнес',
    },
    {
      id: 'deals-ma',
      title: 'Сделки / M&A',
      description: 'Профессиональное сопровождение сделок слияний и поглощений',
      features: [
        'Финансовый дью-дилидженс',
        'Валуация активов',
        'Структурирование сделок',
        'Переговоры с инвесторами',
        'Подготовка документации',
        'Сопровождение до закрытия',
      ],
      icon: '🤝',
      timeCommitment: 'Проектная работа',
      suitable: 'Стартапы и инвесторы',
    },
    {
      id: 'independent-director',
      title: 'Независимый директор',
      description: 'Участие в совете директоров в качестве независимого члена',
      features: [
        'Стратегическое планирование',
        'Контроль за финансовыми решениями',
        'Независимая оценка проектов',
        'Защита интересов акционеров',
        'Корпоративное управление',
        'Риск-менеджмент',
      ],
      icon: '⚖️',
      timeCommitment: 'Регулярные заседания',
      suitable: 'Компании в росте',
    },
  ];

  const pricingPlans = [
    {
      format: 'CFO 5–10 ч/мес',
      target: 'Малый бизнес',
      price: 'от 50 000 ₽',
      period: 'в месяц',
      features: [
        'Финансовое планирование',
        'Управленческая отчётность',
        'Консультации по стратегии',
        'Работа с банками',
      ],
    },
    {
      format: 'Сопровождение сделки',
      target: 'Стартап / инвесторы',
      price: 'от 15 000 ₽',
      period: 'в час + %',
      features: [
        'Дью-дилидженс',
        'Валуация компании',
        'Структурирование',
        'Переговоры',
      ],
    },
    {
      format: 'Стратегический анализ',
      target: 'Компании в росте',
      price: 'Индивидуально',
      period: 'по проекту',
      features: [
        'Глубокий анализ бизнеса',
        'Стратегические рекомендации',
        'Долгосрочное планирование',
        'Сопровождение реализации',
      ],
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
            <Link href="/financial-consulting" className="text-text-secondary hover:text-brand-primary transition-colors">
              Консалтинг
            </Link>
            <Link href="/cfo-service" className="text-brand-primary font-medium">
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
              CFO и сопровождение сделок
            </h1>
            <p className="text-xl md:text-2xl text-brand-accent mb-8 font-medium">
              Профессиональное финансовое управление
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-primary mb-6">
                Экспертиза финансового директора
              </h2>
              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                Получите опыт и знания сеньор-уровня CFO без необходимости 
                нанимать штатного сотрудника. Профессиональное сопровождение 
                финансовых процессов и стратегических решений.
              </p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">✓</span>
                  <span>Опыт работы с компаниями разных размеров</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">✓</span>
                  <span>Знание современных финансовых инструментов</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">✓</span>
                  <span>Практический опыт в сделках M&A</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/images/image10.png"
                alt="CFO сервис"
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
              Услуги CFO
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Комплексные решения для финансового управления и развития бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} variant="elevated" hover={true} className="h-full">
                <CardHeader>
                  <div className="text-5xl mb-4 text-center">{service.icon}</div>
                  <CardTitle className="text-2xl text-center text-brand-primary mb-3">
                    {service.title}
                  </CardTitle>
                  <p className="text-text-secondary text-center mb-4">{service.description}</p>
                  <div className="bg-brand-primary/5 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-brand-primary mb-1">
                      {service.timeCommitment}
                    </div>
                    <div className="text-xs text-text-secondary">
                      {service.suitable}
                    </div>
                  </div>
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

          <div className="mt-12 text-center">
            <Image
              src="/images/image11.png"
              alt="CFO процессы"
              width={800}
              height={400}
              className="rounded-2xl shadow-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-gradient-to-b from-bg-primary to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
              Стоимость услуг
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Гибкие форматы сотрудничества для разных типов бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} variant="elevated" hover={true} className="h-full text-center">
                <CardHeader>
                  <CardTitle className="text-xl text-brand-primary mb-2">
                    {plan.format}
                  </CardTitle>
                  <p className="text-text-secondary mb-4">{plan.target}</p>
                  <div className="bg-brand-primary/5 rounded-lg p-4">
                    <div className="text-3xl font-bold text-brand-primary mb-1">
                      {plan.price}
                    </div>
                    <div className="text-sm text-text-secondary">
                      {plan.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <span className="text-brand-accent text-sm mt-1">✓</span>
                        <span className="text-text-secondary text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-brand-primary/10">
              <h3 className="text-2xl font-bold text-brand-primary mb-4">
                Индивидуальный подход
              </h3>
              <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
                Каждый проект уникален. Стоимость определяется индивидуально 
                в зависимости от сложности задач и требуемых временных затрат.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ConsultationButton
                  sourcePage="cfo-service"
                  variant="primary"
                  size="lg"
                >
                  Обсудить проект
                </ConsultationButton>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Получить расчёт
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
              Отзыв юрисконсульта
            </h2>
          </div>

          <Card variant="elevated" className="bg-gradient-to-br from-bg-primary to-white">
            <CardContent className="p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/image16.jpg"
                    alt="Юрисконсульт"
                    width={120}
                    height={120}
                    className="rounded-full"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <blockquote className="text-xl text-text-secondary italic mb-6 leading-relaxed">
                    &ldquo;Работа со Светланой в качестве независимого директора значительно 
                    улучшила качество принимаемых финансовых решений. Её экспертиза 
                    и объективный взгляд помогли нам избежать многих рисков и 
                    оптимизировать бизнес-процессы.&rdquo;
                  </blockquote>
                  <div className="flex flex-col md:flex-row md:items-center gap-2">
                    <span className="font-semibold text-brand-primary">Елена Смирнова</span>
                    <span className="text-text-secondary">Юрисконсульт, InvestGroup</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 px-4 bg-gradient-to-b from-bg-primary to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
              Опыт и результаты
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-brand-primary mb-2">25+</div>
              <div className="text-text-secondary">Сделок M&A</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-brand-primary mb-2">50+</div>
              <div className="text-text-secondary">Проектов CFO</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-brand-primary mb-2">15</div>
              <div className="text-text-secondary">Отраслей</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-brand-primary mb-2">10+</div>
              <div className="text-text-secondary">Лет опыта</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-brand-accent text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Нужен CFO для вашего бизнеса?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Давайте обсудим, как я могу помочь вашему бизнесу
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConsultationButton
              sourcePage="cfo-service"
              variant="secondary"
              size="lg"
              className="bg-white text-brand-accent hover:bg-white/90"
            >
              Задать вопрос
            </ConsultationButton>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-accent">
                Обсудить проект
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}