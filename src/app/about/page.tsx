/**
 * @fileoverview About page - "Кто я и чем могу быть полезна"
 * @module app/about/page
 */

import { ReactElement } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
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
            
            <p className="text-lg leading-relaxed">
              Моё глубокое убеждение: Финансовая модель помогает увидеть, как может развиваться бизнес. 
              Но это не просто проекция — это способ подумать вперёд, увидеть риски и возможности. 
              Понять — значит управлять.
            </p>
          </div>
        </section>

        {/* Facts Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">
            Факты, за которыми — опыт, глубина и подход
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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

        {/* Partners Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">
            Партнеры и клиенты
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto text-center mb-12">
            Доверие ведущих компаний — результат профессионализма и качества работы
          </p>


          {/* Trust Statement */}
          <div className="bg-brand-primary/5 p-8 rounded-xl border-l-4 border-brand-primary max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-brand-primary mb-4">
              Партнерство основано на доверии
            </h3>
            <p className="text-lg text-text-secondary leading-relaxed">
              За годы работы я сотрудничала с компаниями различных отраслей и масштабов — 
              от стартапов до крупных корпораций. Каждый проект уникален, но объединяет их одно: 
              стремление к росту и готовность работать с цифрами осознанно.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-brand-primary mb-2">100+</div>
              <div className="text-text-secondary">Реализованных проектов</div>
            </div>
            <div className="text-center bg-white p-8 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-brand-primary mb-2">26+</div>
              <div className="text-text-secondary">Лет опыта</div>
            </div>
            <div className="text-center bg-white p-8 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-brand-primary mb-2">15+</div>
              <div className="text-text-secondary">Лет в венчурных проектах</div>
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
            >
              направить запрос
            </ConsultationButton>
          </div>
        </section>

      </div>
      
      {/* Partners Logos - Bottom Section - Full Width */}
      <section className="mt-8 pt-6 border-t border-gray-200 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-xl font-bold text-brand-primary text-center mb-12">
            партнеры и клиенты
          </h3>
          
          <div className="flex flex-col md:flex-row md:justify-between items-center gap-8 md:gap-4">
            {[
              { id: 'partner1', name: 'Партнер 1', image: '/images/image5.png' },
              { id: 'partner2', name: 'Партнер 2', image: '/images/image6.png' },
              { id: 'partner3', name: 'Партнер 3', image: '/images/image7.png' },
              { id: 'partner4', name: 'Партнер 4', image: '/images/image8.png' },
              { id: 'partner5', name: 'Партнер 5', image: '/images/image9.png' },
            ].map((partner) => (
              <div
                key={partner.id}
                className="group p-4 rounded-lg hover:shadow-md transition-all duration-300 hover:scale-105 w-32 h-32 md:flex-1 md:max-w-[18%] md:w-full md:h-auto"
              >
                <div className="relative aspect-square w-full h-full">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    sizes="(max-width: 768px) 128px, 15vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </main>
    </div>
  );
}