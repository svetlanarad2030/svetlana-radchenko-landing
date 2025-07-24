/**
 * @fileoverview Home page component (main landing page)
 * @module app/page
 */

import { ReactElement } from 'react';
import { Navigation } from '@/components/navigation/Navigation';
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
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ClientsSection />
      <ContactSection />
    </div>
  );
}