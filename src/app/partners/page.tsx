/**
 * @fileoverview Partners and clients page - "Партнеры и клиенты"
 * @module app/partners/page
 */

import { ReactElement } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { Navigation } from '@/components/navigation/Navigation';
import { ConsultationButton } from '@/components/forms/ConsultationButton';

export const metadata: Metadata = {
  title: 'Партнеры и клиенты | Светлана Радченко',
  description: 'Доверие ведущих компаний и организаций. Партнеры и клиенты Светланы Радченко.',
};

/**
 * Partners and clients page component
 */
export default function PartnersPage(): ReactElement {
  const partners = [
    {
      id: 'partner1',
      name: 'Партнер 1',
      image: '/images/image5.png',
    },
    {
      id: 'partner2', 
      name: 'Партнер 2',
      image: '/images/image6.png',
    },
    {
      id: 'partner3',
      name: 'Партнер 3', 
      image: '/images/image7.png',
    },
    {
      id: 'partner4',
      name: 'Партнер 4',
      image: '/images/image8.png',
    },
    {
      id: 'partner5',
      name: 'Партнер 5',
      image: '/images/image9.png',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="bg-bg-primary">
        <div className="max-w-6xl mx-auto px-4 py-16">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
              Партнеры и клиенты
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Доверие ведущих компаний — результат профессионализма и качества работы
            </p>
          </section>

          {/* Partners Logos Section */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-primary text-center mb-12">
                Логотипы партнеров и клиентов
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center">
                {partners.map((partner) => (
                  <div
                    key={partner.id}
                    className="group p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-105 w-full max-w-xs"
                  >
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        fill
                        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Trust Statement */}
          <section className="text-center mb-16">
            <div className="bg-brand-primary/5 p-8 rounded-xl border-l-4 border-brand-primary max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-brand-primary mb-4">
                Партнерство основано на доверии
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed">
                За годы работы я сотрудничала с компаниями различных отраслей и масштабов — 
                от стартапов до крупных корпораций. Каждый проект уникален, но объединяет их одно: 
                стремление к росту и готовность работать с цифрами осознанно.
              </p>
            </div>
          </section>

          {/* Statistics */}
          <section className="mb-16">
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
                Готовы стать частью успешных проектов?
              </h3>
              <p className="text-lg text-text-secondary mb-8">
                Обсудим ваши задачи и найдем эффективные решения для развития бизнеса
              </p>
              <ConsultationButton
                sourcePage="partners"
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