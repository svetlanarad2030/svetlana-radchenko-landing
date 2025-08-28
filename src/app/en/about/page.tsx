/**
 * @fileoverview English About page - "About Me & How I Can Help"
 * @module app/en/about/page
 */

import { ReactElement } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { Navigation } from '@/components/navigation/Navigation';
import { ConsultationButton } from '@/components/forms/ConsultationButton';

export const metadata: Metadata = {
  title: 'About Me & How I Can Help | Svetlana Radchenko',
  description: 'Finance practitioner with 26+ years of experience. Ex-CFO, PhD in Economics, mentor and expert in financial architecture.',
};

/**
 * English About page component
 */
export default function EnglishAboutPage(): ReactElement {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="bg-bg-primary">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4 text-center">
            About Me & How I Can Help
          </h1>
          <p className="text-lg leading-relaxed text-text-primary mb-4">
            <span className="font-bold">Finance practitioner with 26+ years of experience</span> in financial management and project development, including international and public companies.
          </p>
          
          <ul className="space-y-0 text-lg text-text-primary">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span><span className="font-bold">Ex-CFO</span> of Bioprocess Group and Irish public company <span className="font-bold">Ovoca Bio plc</span></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span><span className="font-bold">PhD in Economics</span>, lecturer, mentor and expert at <span className="font-bold">Towards Change</span> foundation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span>Consultant for accelerators, universities and international programs</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span><span className="font-bold">Moderator and speaker at business events</span>, including business forums: Zarubezhexpo</span>
            </li>
          </ul>
          
          <p className="text-lg leading-relaxed text-text-primary mt-4">
            <span className="font-bold">Supporting venture and technology projects for over 15 years</span> — from launch to scaling.
          </p>
          
          <h2 className="text-2xl font-bold text-brand-primary mb-2 mt-4">
            My Expertise
          </h2>
          
          <ul className="space-y-0 text-lg text-text-primary">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span><span className="font-bold">Building sustainable financial architecture</span> of business</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span><span className="font-bold">Strategic development and</span> planning</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span>Mentoring, financial model review, working with investments and deal structure</span>
            </li>
          </ul>
          
          <h2 className="text-2xl font-bold text-brand-primary mb-2 mt-4">
            How I Work
          </h2>
          
          <ul className="space-y-0 text-lg text-text-primary">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span>I get <span className="font-bold">personally involved</span> in projects if it's really necessary</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span>I engage <span className="font-bold">a narrow circle of specialized experts</span> for complex tasks</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{color: '#3E5B7A'}}>✓</span>
              <span>I possess <span className="font-bold">systematic and integrative thinking</span> — I help look at business differently, highlight opportunities, digitize and strengthen</span>
            </li>
          </ul>
          
          <h2 className="text-2xl font-bold text-brand-primary mb-2 mt-4">
            My Approach
          </h2>
          
          <div className="space-y-0 text-text-primary">
            <p className="text-lg leading-tight">
              <span className="font-bold">A financial model helps see how a business can develop.</span>
            </p>
            <p className="text-lg leading-tight -mt-6">
              It's not just a projection — it's a way to think ahead, see risks and opportunities.
            </p>
            <p className="text-lg leading-tight">
              <span className="font-bold">To understand means to manage.</span>
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-6">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-primary mb-3">
              Ready to discuss your project?
            </h3>
            <p className="text-lg text-text-secondary mb-4">
              Tell me about your business challenges, and I'll help find optimal solutions
            </p>
            <ConsultationButton
              sourcePage="about"
              variant="primary"
              size="lg"
              className="shadow-lg hover:shadow-xl"
            >
              Send Request
            </ConsultationButton>
          </div>
        </section>

        {/* Partners Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-brand-primary mb-4 text-center">
            Partners and Clients
          </h2>

          {/* Partners Logos */}
          <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:justify-center items-center gap-8 md:gap-4 flex-wrap">
            {[
              { id: 'aircargo', name: 'Air Cargo', image: '/images/air_cargo_color.png', url: 'https://aircargonetwork.com/' },
              { id: 'skolkovo', name: 'Skolkovo', image: '/images/BuySkolkovo.png', url: 'https://skolkovocid.com/about.php' },
              { id: 'buysocial', name: 'Buy Social', image: '/images/buySocial.png', url: 'https://buysocial.ru/' },
              { id: 'freedom', name: 'Freedom', image: '/images/freedome_color.png', url: 'https://freedome.pro/' },
              { id: 'impactive', name: 'Impactive', image: '/images/impactive_color.png', url: 'https://impactive.ru/' },
              { id: 'sprego', name: 'Sprego', image: '/images/Sprego.png', url: 'https://vk.link/sprego' },
              { id: 'navstrechu', name: 'Towards Change', image: '/images/navstrechu.png', url: 'https://fond-navstrechu.ru/?ysclid=mdmsficr6v303586851' },
              { id: 'exporussiaserbia', name: 'ExpoRussiaSerbia', image: '/images/ExpoRussiaSerbia.png', url: 'https://zarubezhexpo.ru/ExpoRussiaSerbia/' },
              { id: 'classkids', name: 'AClassKids', image: '/images/classkids.png', url: 'https://aclasskids.ru/?ysclid=mdmsew56ui616080228' },
              { id: 'exporussia', name: 'Zarubezhexpo', image: '/images/expoRussia.png', url: 'https://zarubezhexpo.ru/' },
              { id: 'partner5', name: 'Partner 5', image: '/images/image9.png' },
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