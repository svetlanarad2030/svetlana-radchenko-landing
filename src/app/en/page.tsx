/**
 * @fileoverview English Home page component (main landing page)
 * @module app/en/page
 */

import { ReactElement } from 'react';
import { Metadata } from 'next';
import { Navigation } from '@/components/navigation/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';

export const metadata: Metadata = {
  title: 'Svetlana Radchenko - Finance & Strategy Expert',
  description: 'Professional financial modeling, business planning and strategic business development consulting. Training, consulting and CFO services.',
  keywords: [
    'financial modeling',
    'business planning', 
    'financial consulting',
    'CFO',
    'investment analysis',
    'strategic planning',
    'financial director',
    'business analytics',
    'corporate finance',
    'financial training',
  ],
  authors: [{ name: 'Svetlana Radchenko', url: 'mailto:finmodelguru@gmail.com' }],
  alternates: {
    canonical: '/en',
    languages: {
      'ru': '/',
      'en': '/en'
    }
  },
  openGraph: {
    title: 'Svetlana Radchenko - Finance & Strategy Expert',
    description: 'Professional financial modeling, business planning and strategic business development consulting.',
    url: '/en',
    siteName: 'Svetlana Radchenko - Financial Consultant',
    locale: 'en_US',
    alternateLocale: ['ru_RU'],
  },
};

/**
 * English Home page component (main landing page).
 * 
 * Simple landing page with just navigation and hero section.
 * 
 * @returns Home page JSX
 */
export default function EnglishHomePage(): ReactElement {
  return (
    <div>
      <Navigation />
      <HeroSection />
    </div>
  );
}