/**
 * @fileoverview About page - "Кто я и чем могу быть полезна"
 * @module app/about/page
 */

import { ReactElement } from 'react';
import { Metadata } from 'next';
import { Navigation } from '@/components/navigation/Navigation';
import { ConsultationButton } from '@/components/forms/ConsultationButton';

export const metadata: Metadata = {
  title: 'Кто я и чем могу быть полезна | Светлана Радченко',
  description: 'Финансист-практик с 26+ лет опыта. Ex-CFO, к.э.н., ментор и эксперт по финансовой архитектуре бизнеса.',
};

/**
 * About page component
 */
export default function AboutPage(): ReactElement {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="bg-bg-primary">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
            Кто я и чем могу быть полезна
          </h1>
        </section>

        {/* Main Content */}
        <section className="prose prose-lg mx-auto mb-16">
          <div className="space-y-6 text-text-primary">
            <p className="text-lg leading-relaxed">
              Финансист-практик, 26+ лет опыта в управлении финансами и развитии проектов. 
              Ex-CFO группы компаний «Биопроцесс» и публичной ирландской компании Ovoca Bio plc, 
              к.э.н., ментор, преподаватель и эксперт фонда «Навстречу переменам». 
              Консультант акселераторов, вузов, международных программ и модератор мероприятий Зарубежэкспо.
            </p>
            
            <p className="text-lg leading-relaxed">
              Более 15 лет сопровождаю венчурные и технологические проекты. 
              Моя экспертиза — построение устойчивой финансовой архитектуры бизнеса и стратегическое развитие.
            </p>
            
            <p className="text-lg leading-relaxed">
              Включаюсь в проект лично, если это действительно нужно. 
              Обладаю системным и нестандартным мышлением — помогаю иначе взглянуть на бизнес, 
              увидеть и проанализировать возможности. В сложных многоплановых задачах подключаю проверенных экспертов.
            </p>
            
            <div className="bg-brand-primary/5 p-6 rounded-xl border-l-4 border-brand-primary my-8">
              <p className="text-lg font-medium text-brand-primary mb-2">
                Моё глубокое убеждение:
              </p>
              <p className="text-lg leading-relaxed">
                финансовая модель — это колоссальный внутренний ресурс развития компании.
                <br />
                <strong>Понять — значит начать управлять. Сэкономить — значит заработать</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Facts Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">
            Факты, за которыми — опыт, глубина и подход
          </h2>
          
          <div className="grid md:grid-cols-1 gap-6 max-w-3xl mx-auto">
            {/* Experience */}
            <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="text-2xl">🗓</div>
              <div>
                <h3 className="font-bold text-brand-primary text-xl mb-2">
                  26+ лет опыта в финансах
                </h3>
                <p className="text-text-secondary">
                  Системный взгляд и зрелость в управлении финансами
                </p>
              </div>
            </div>

            {/* Projects */}
            <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="text-2xl">📊</div>
              <div>
                <h3 className="font-bold text-brand-primary text-xl mb-2">
                  100+ реализованных проектов
                </h3>
                <p className="text-text-secondary">
                  Проверенная экспертность и практический результат
                </p>
              </div>
            </div>

            {/* Approach */}
            <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="text-2xl">🧩</div>
              <div>
                <h3 className="font-bold text-brand-primary text-xl mb-2">
                  Бутиковый подход
                </h3>
                <p className="text-text-secondary">
                  Личное вовлечение, индивидуальные решения, небольшая команда экспертов
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-primary mb-6">
              Готовы обсудить ваш проект?
            </h3>
            <p className="text-lg text-text-secondary mb-8">
              Расскажите о задачах вашего бизнеса, и я помогу найти оптимальные решения
            </p>
            <ConsultationButton
              sourcePage="about"
              variant="primary"
              size="lg"
              className="shadow-lg hover:shadow-xl"
            />
          </div>
        </section>
      </div>
      </main>
    </div>
  );
}