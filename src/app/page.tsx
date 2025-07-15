/**
 * @fileoverview Home page component (main landing page)
 * @module app/page
 */

import { ReactElement } from 'react';
import Link from 'next/link';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ClientsSection } from '@/components/sections/ClientsSection';
import { ContactSection } from '@/components/sections/ContactSection';

/**
 * Home page component (main landing page).
 * 
 * Combines all main sections as specified in the PRD:
 * - Hero section with portrait and CTA
 * - About section with expertise and stats
 * - Services section with three service cards
 * - Clients section with logos and testimonials
 * - Contact section with form and social links
 * 
 * @returns Home page JSX
 */
export default function HomePage(): ReactElement {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-brand-primary">
            Светлана Радченко
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-brand-primary font-medium">
              Главная
            </Link>
            <Link href="/training" className="text-text-secondary hover:text-brand-primary transition-colors">
              Обучение
            </Link>
            <Link href="/financial-consulting" className="text-text-secondary hover:text-brand-primary transition-colors">
              Консалтинг
            </Link>
            <Link href="/cfo-service" className="text-text-secondary hover:text-brand-primary transition-colors">
              CFO-сервис
            </Link>
          </div>
        </div>
      </nav>

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ClientsSection />
      <ContactSection />
    </div>
  );
}