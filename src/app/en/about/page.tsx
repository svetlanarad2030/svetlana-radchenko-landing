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
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
            About Me & How I Can Help
          </h1>
        </section>

        {/* Main Content */}
        <section className="prose prose-lg mx-auto mb-16">
          <div className="space-y-6 text-text-primary">
            <p className="text-lg leading-relaxed">
              Finance practitioner with 26+ years of experience in financial management and project development. 
              Ex-CFO of Bioprocess Group and Irish public company Ovoca Bio plc, 
              PhD in Economics, mentor, lecturer and expert at the &apos;Towards Change&apos; foundation. 
              Consultant for accelerators, universities, international programs and moderator of events at Zarubezhexpo.
            </p>
            
            <p className="text-lg leading-relaxed">
              For over 15 years I have been supporting venture and technology projects. 
              My expertise is building sustainable financial architecture of business and strategic development.
            </p>
            
            <p className="text-lg leading-relaxed">
              I get personally involved in the project if it&apos;s really needed. 
              I possess systematic and non-standard thinking — I help to look at business differently, 
              see and analyze opportunities. In complex multi-faceted tasks I involve proven experts.
            </p>
            
            <p className="text-lg leading-relaxed">
              My deep conviction: Financial model helps to see how business can develop. 
              But it&apos;s not just a projection — it&apos;s a way to think ahead, see risks and opportunities. 
              To understand means to manage.
            </p>
          </div>
        </section>

        {/* Facts Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">
            Facts backed by experience, depth and approach
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Experience */}
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div>
                <h3 className="font-bold text-brand-primary text-xl mb-2">
                  26+ years of finance experience
                </h3>
                <p className="text-text-secondary">
                  Systematic vision and maturity in financial management
                </p>
              </div>
            </div>

            {/* Projects */}
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div>
                <h3 className="font-bold text-brand-primary text-xl mb-2">
                  100+ completed projects
                </h3>
                <p className="text-text-secondary">
                  Proven expertise and practical results
                </p>
              </div>
            </div>

            {/* Approach */}
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div>
                <h3 className="font-bold text-brand-primary text-xl mb-2">
                  Boutique approach
                </h3>
                <p className="text-text-secondary">
                  Personal involvement, individual solutions, small team of experts
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-primary mb-6">
              Ready to discuss your project?
            </h3>
            <p className="text-lg text-text-secondary mb-8">
              Tell me about your business challenges, and I&apos;ll help find optimal solutions
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
          <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">
            Partners and Clients
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto text-center mb-12">
            Trust of leading companies — result of professionalism and quality work
          </p>

          {/* Partners Logos */}
          <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:justify-center items-center gap-8 md:gap-4 flex-wrap">
            {[
              { id: 'aircargo', name: 'Air Cargo', image: '/images/AirCargo.png', url: 'https://aircargonetwork.com/' },
              { id: 'skolkovo', name: 'Skolkovo', image: '/images/BuySkolkovo.png', url: 'https://skolkovocid.com/about.php' },
              { id: 'buysocial', name: 'Buy Social', image: '/images/buySocial.png', url: 'https://buysocial.ru/' },
              { id: 'freedom', name: 'Freedom', image: '/images/freedom.png', url: 'https://freedome.pro/' },
              { id: 'impactive', name: 'Impactive', image: '/images/impactive.png', url: 'https://impactive.ru/' },
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