/**
 * @fileoverview Training details page - "Подробнее об обучении"
 * @module app/training-details/page
 */

import { ReactElement } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { Navigation } from '@/components/navigation/Navigation';
import { ConsultationButton } from '@/components/forms/ConsultationButton';

export const metadata: Metadata = {
  title: 'Обучение. Финансы без страха и шаблонов | Светлана Радченко',
  description: 'Курсы и воркшопы по финансовому моделированию. Делаю сложное понятным через практику и системный подход.',
};

/**
 * Training details page component
 */
export default function TrainingDetailsPage(): ReactElement {
  const formats = [
    {
      name: 'Онлайн-курс',
      url: 'https://stepik.org/193124',
      conditions: 'В записи',
      price: '2 000 ₽/курс'
    },
    {
      name: 'Групповой воркшоп (5 встреч по часу)',
      conditions: 'от 5 человек',
      price: 'от 13 000 ₽/участник'
    },
    {
      name: 'Индивидуальный формат',
      conditions: 'По согласованию',
      price: 'от 15 000 ₽/час'
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5ECEB' }}>
      <Navigation />
      
      <main className="max-w-5xl mx-auto px-4 py-16">
        {/* Блок 1: Заголовок + подзаголовок */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
            Обучение. Финансы без страха и шаблонов.
          </h1>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Делаю сложное понятным: через практику, живое объяснение и системный подход.
          </p>
        </section>

        {/* Image Section */}
        <section className="mb-16 text-center">
          <div className="relative w-full max-w-md mx-auto">
            <Image
              src="/images/image13.jpg"
              alt="Обучение финансовому моделированию"
              width={400}
              height={200}
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
        </section>

        {/* Блок 2: Введение */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="space-y-6 text-text-primary">
              <p className="text-lg leading-relaxed">
                Мои курсы и воркшопы — это не теория «про цифры». Это маршрут, пройдя который, 
                участники смогут увидеть бизнес целиком, понять, как интерпретируются результаты 
                и выстраиваются финансовые приоритеты.
              </p>
              
              <p className="text-lg leading-relaxed">
                Цель курса - совместно пройти по полному алгоритму построения финансовой модели, 
                научиться строить самостоятельно для любого проекта, понимая логику и внутренние связи, 
                видеть ключевые результаты и уметь пользоваться сценарным анализом.
              </p>
              
              <p className="text-lg leading-relaxed">
                Обучение подходит как для тех, кто только начинает, так и для опытных команд — 
                когда нужно структурировать знания, собрать модель или подготовиться к росту.
              </p>
            </div>
          </div>
        </section>

        {/* Блок 3: Форматы обучения */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">
            Форматы обучения
          </h2>
          
          <div className="space-y-8">
            {/* Онлайн курс */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-3xl">🎥</div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-primary mb-2">
                    Онлайн курс-практикум «5 шагов к финансовой модели» на платформе Stepik.org
                  </h3>
                </div>
              </div>
              
              {/* Online Course Image */}
              <div className="mb-6 text-center">
                <div className="relative w-full max-w-sm mx-auto">
                  <Image
                    src="/images/image14.jpg"
                    alt="Онлайн-курс на платформе Stepik"
                    width={400}
                    height={200}
                    className="rounded-xl shadow-md w-full h-auto"
                  />
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <ul className="space-y-2 text-text-primary">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-primary">•</span>
                    Видео-уроки, проверочные вопросы, домашние задания
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-primary">•</span>
                    Пошаговая методика
                  </li>
                </ul>
                
                <p className="text-text-secondary">
                  Вы разберетесь, как правильно оцифровывать бизнес или проект и разрабатывать гибкие финансовые модели.
                  Вы поймете подход к построению финансовой модели, что позволит вам сделать расчеты для любой новой идеи.
                </p>
                
                <p className="text-brand-primary font-medium">
                  💡 Можно пройти в своём темпе. Итог — собственная рабочая модель.
                </p>
              </div>
              
              <a
                href="https://stepik.org/193124"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-brand-primary rounded-lg hover:bg-brand-primary-hover transition-colors duration-200"
              >
                Перейти на курс Stepik.org
              </a>
            </div>

            {/* Групповой воркшоп */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-3xl">👥</div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-primary mb-2">
                    Групповой воркшоп (онлайн / оффлайн)
                  </h3>
                </div>
              </div>
              
              {/* Group Workshop Image */}
              <div className="mb-6 text-center">
                <div className="relative w-full max-w-sm mx-auto">
                  <Image
                    src="/images/image15.jpg"
                    alt="Групповой воркшоп по финансовому моделированию"
                    width={400}
                    height={200}
                    className="rounded-xl shadow-md w-full h-auto"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <ul className="space-y-2 text-text-primary">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-primary">•</span>
                    Живое обучение в малых группах
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-primary">•</span>
                    Практика на своих проектах
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-primary">•</span>
                    Обратная связь и поддержка
                  </li>
                </ul>
                
                <p className="text-brand-primary font-medium">
                  💡 Проводится при наборе группы. Можно оставить заявку.
                </p>
              </div>
            </div>

            {/* Образовательные программы */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-3xl">🏫</div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-primary mb-2">
                    Образовательные программы (RU/EN)
                  </h3>
                </div>
              </div>
              
              {/* Educational Programs Image */}
              <div className="mb-6 text-center">
                <div className="relative w-full max-w-sm mx-auto">
                  <Image
                    src="/images/image16.jpg"
                    alt="Образовательные программы и курсы под ключ"
                    width={400}
                    height={200}
                    className="rounded-xl shadow-md w-full h-auto"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <ul className="space-y-2 text-text-primary">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-primary">•</span>
                    Подготовка курсов под ключ (для акселераторов, вузов, проектов)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-primary">•</span>
                    На русском и английском
                  </li>
                </ul>
                
                <p className="text-brand-primary font-medium">
                  💡 Есть опыт с EMBA, акселераторами, impact-платформами.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Блок 4: Форматы и стоимость */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">
            Форматы и стоимость
          </h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-bold text-brand-primary">Формат</th>
                  <th className="text-left py-4 px-4 font-bold text-brand-primary">Условия</th>
                  <th className="text-left py-4 px-4 font-bold text-brand-primary">Цена</th>
                </tr>
              </thead>
              <tbody>
                {formats.map((format, index) => (
                  <tr key={index} className="border-b border-gray-100 last:border-b-0">
                    <td className="py-4 px-4 text-text-primary">
                      {format.url ? (
                        <a 
                          href={format.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-primary hover:underline"
                        >
                          {format.name}
                        </a>
                      ) : (
                        format.name
                      )}
                    </td>
                    <td className="py-4 px-4 text-text-secondary">{format.conditions}</td>
                    <td className="py-4 px-4 text-brand-primary font-semibold">{format.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Блок 5: Цитата / кейс */}
        <section className="mb-16">
          <div className="bg-brand-primary/5 rounded-2xl p-8 border-l-4 border-brand-primary">
            <blockquote className="text-lg italic text-text-primary mb-4 leading-relaxed">
              «Сегодня купил ваш курс - Пять шагов к финансовой модели, на платформе Stepik. 
              Уже начал обучение, прошел первый урок, все структурно, понятно. Благодарю за труд!»
            </blockquote>
            <cite className="text-brand-primary font-medium">
              — участник онлайн курса-практикума
            </cite>
          </div>
        </section>

        {/* Блок 6: Призыв к действию */}
        <section className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-accent mb-6">
              Финансовая модель - колоссальный внутренний ресурс для развития бизнеса. 
              Хочешь научиться ее создавать и использовать?
            </h3>
            
            <ConsultationButton
              sourcePage="training-details"
              variant="primary"
              size="lg"
              className="shadow-lg hover:shadow-xl"
            >
              Хочу научиться строить модель
            </ConsultationButton>
          </div>
        </section>
      </main>
    </div>
  );
}