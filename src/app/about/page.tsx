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
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
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
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
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
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
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
        <section className="text-center mb-16">
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
              Направить запрос
            </ConsultationButton>
          </div>
        </section>

        {/* Partners Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">
            Партнеры и клиенты
          </h2>

          {/* Partners Logos */}
          <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:justify-center items-center gap-8 md:gap-4 flex-wrap">
            {[
              { id: 'aircargo', name: 'Air Cargo', image: '/images/air_cargo_color.png', url: 'https://aircargonetwork.com/' },
              { id: 'skolkovo', name: 'Сколково', image: '/images/BuySkolkovo.png', url: 'https://skolkovocid.com/about.php' },
              { id: 'buysocial', name: 'Buy Social', image: '/images/buySocial.png', url: 'https://buysocial.ru/' },
              { id: 'freedom', name: 'Freedom', image: '/images/freedome_color.png', url: 'https://freedome.pro/' },
              { id: 'impactive', name: 'Impactive', image: '/images/impactive_color.png', url: 'https://impactive.ru/' },
              { id: 'sprego', name: 'Sprego', image: '/images/Sprego.png', url: 'https://vk.link/sprego' },
              { id: 'navstrechu', name: 'Навстречу переменам', image: '/images/navstrechu.png', url: 'https://fond-navstrechu.ru/?ysclid=mdmsficr6v303586851' },
              { id: 'exporussiaserbia', name: 'ExpoRussiaSerbia', image: '/images/ExpoRussiaSerbia.png', url: 'https://zarubezhexpo.ru/ExpoRussiaSerbia/' },
              { id: 'classkids', name: 'AClassKids', image: '/images/classkids.png', url: 'https://aclasskids.ru/?ysclid=mdmsew56ui616080228' },
              { id: 'exporussia', name: 'Зарубежэкспо', image: '/images/expoRussia.png', url: 'https://zarubezhexpo.ru/' },
              { id: 'partner5', name: 'Партнер 5', image: '/images/image9.png' },
            ].map((partner) => {
              const content = (
                <div className="relative aspect-square w-full h-full">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-contain transition-all duration-300"
                    sizes="(max-width: 768px) 128px, 15vw"
                  />
                </div>
              );
              
              if (partner.url) {
                return (
                  <a
                    key={partner.id}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-8 rounded-lg border-2 border-transparent hover:border-brand-primary hover:bg-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 w-48 h-48 md:w-48 md:h-48 block"
                  >
                    {content}
                  </a>
                );
              } else {
                return (
                  <div
                    key={partner.id}
                    className="p-8 rounded-lg border-2 border-transparent w-48 h-48 md:w-48 md:h-48 block"
                  >
                    {content}
                  </div>
                );
              }
            })}
          </div>
          </div>
        </section>

      </div>
      </main>
    </div>
  );
}