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
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4 text-center">
            Кто я и чем могу быть полезна
          </h1>
          <p className="text-lg leading-relaxed text-text-primary mb-4">
            <span className="font-bold">Финансист-практик с 26+ летним опытом</span> в управлении финансами и развитием проектов, в том числе в международных и публичных компаниях.
          </p>
          
          <ul className="space-y-1 text-lg text-text-primary">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span><span className="font-bold">Ex-CFO</span> группы компаний «Биопроцесс» и публичной ирландской компании «<span className="font-bold">Ovoca Bio plc</span>»</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span><span className="font-bold">Кандидат экономических наук</span>, преподаватель, ментор и эксперт фонда «<span className="font-bold">Навстречу переменам</span>»</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span>Консультант акселераторов, вузов и международных программ</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span><span className="font-bold">Модератор и спикер деловых мероприятий</span>, включая бизнес-форумы: Зарубежэкспо</span>
            </li>
          </ul>
          
          <p className="text-lg leading-relaxed text-text-primary mt-4">
            <span className="font-bold">Сопровождаю венчурные и технологические проекты более 15 лет</span> — от запуска до масштабирования.
          </p>
          
          <h2 className="text-2xl font-bold text-brand-primary mb-4 mt-6">
            Моя экспертиза
          </h2>
          
          <ul className="space-y-1 text-lg text-text-primary">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span><span className="font-bold">Построение устойчивой финансовой архитектуры</span> бизнеса</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span><span className="font-bold">Стратегическое развитие и</span> планирование</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span>Менторинг, проверка фин.модели, работа с инвестициями и структурой сделок</span>
            </li>
          </ul>
          
          <h2 className="text-2xl font-bold text-brand-primary mb-4 mt-6">
            Как я работаю
          </h2>
          
          <ul className="space-y-1 text-lg text-text-primary">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span>Включаюсь в проект <span className="font-bold">лично</span>, если это действительно необходимо</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span>Подключаю <span className="font-bold">узкий круг профильных экспертов</span> под многоплановые задачи</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span>Обладаю <span className="font-bold">системным и интегративным мышлением</span> — помогаю взглянуть на бизнес иначе, подсветить возможности, оцифровать и усилить</span>
            </li>
          </ul>
          
          <h2 className="text-2xl font-bold text-brand-primary mb-4 mt-6">
            Мой подход
          </h2>
          
          <div className="space-y-4 text-text-primary">
            <p className="text-lg leading-relaxed">
              <span className="font-bold">Финансовая модель помогает увидеть, как может развиваться бизнес.</span>
            </p>
            <p className="text-lg leading-relaxed">
              Это не просто проекция — это способ подумать вперёд, увидеть риски и возможности.
            </p>
            <p className="text-lg leading-relaxed">
              <span className="font-bold">Понять — значит управлять.</span>
            </p>
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