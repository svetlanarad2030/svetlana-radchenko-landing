/**
 * @fileoverview Root layout component for the landing website
 * @module app/layout
 */

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactElement } from 'react';
import '@/styles/globals.css';

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Светлана Радченко - Эксперт в сфере финансов и стратегии',
  description: 'Профессиональные консультации по финансовому моделированию, бизнес-планированию и стратегическому развитию бизнеса. Обучение, консалтинг и CFO-сервисы.',
  keywords: [
    'финансовое моделирование',
    'бизнес-планирование',
    'финансовый консалтинг',
    'CFO',
    'инвестиционный анализ',
    'стратегическое планирование',
    'финансовый директор',
    'бизнес-аналитика',
    'корпоративные финансы',
    'финансовое обучение',
  ],
  authors: [{ name: 'Светлана Радченко', url: 'mailto:finmodelguru@gmail.com' }],
  creator: 'Светлана Радченко',
  publisher: 'FinModelGuru',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://svetlana-radchenko.ru'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Светлана Радченко - Эксперт в сфере финансов и стратегии',
    description: 'Профессиональные консультации по финансовому моделированию, бизнес-планированию и стратегическому развитию бизнеса.',
    url: '/',
    siteName: 'Светлана Радченко - Финансовый консультант',
    images: [
      {
        url: '/images/image12.png',
        width: 1200,
        height: 630,
        alt: 'Светлана Радченко - Эксперт в сфере финансов и стратегии',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Светлана Радченко - Эксперт в сфере финансов и стратегии',
    description: 'Профессиональные консультации по финансовому моделированию, бизнес-планированию и стратегическому развитию бизнеса.',
    images: ['/images/image12.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export interface RootLayoutProps {
  children: React.ReactNode;
}

/**
 * Root layout component for the landing website.
 * 
 * Provides global structure, metadata, and styling for all pages.
 * Includes SEO optimization and accessibility features.
 * 
 * @param props - Layout props with children
 * @returns Root layout JSX
 */
export default function RootLayout({ children }: RootLayoutProps): ReactElement {
  return (
    <html lang="ru" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#A26769" />
        <meta name="msapplication-TileColor" content="#A26769" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Светлана Радченко",
              "jobTitle": "Финансовый консультант",
              "description": "Эксперт в сфере финансов и стратегии",
              "url": "https://svetlana-radchenko.ru",
              "image": "https://svetlana-radchenko.ru/images/image12.png",
              "email": "finmodelguru@gmail.com",
              "telephone": "+7 926 2240270",
              "sameAs": [
                "https://t.me/FinModelGuru",
                "https://linkedin.com/in/svetlana-radchenko-finmodel"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "RU"
              },
              "knowsAbout": [
                "Финансовое моделирование",
                "Бизнес-планирование",
                "Инвестиционный анализ",
                "CFO-консалтинг",
                "Стратегическое планирование"
              ],
              "offers": {
                "@type": "Offer",
                "description": "Профессиональные консультации по финансовому моделированию и бизнес-планированию"
              }
            })
          }}
        />
        
        {/* Business Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "FinModelGuru - Светлана Радченко",
              "description": "Профессиональные консультации по финансовому моделированию, бизнес-планированию и стратегическому развитию бизнеса",
              "provider": {
                "@type": "Person",
                "name": "Светлана Радченко"
              },
              "serviceType": "Финансовый консалтинг",
              "areaServed": "RU",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Услуги",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Обучение финансовому моделированию",
                      "description": "Курсы и воркшопы по финансовому моделированию"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Финансовый консалтинг",
                      "description": "Консультации по финансовому моделированию и бизнес-планированию"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "CFO-сервис",
                      "description": "Услуги финансового директора на аутсорсе"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-primary text-white px-4 py-2 rounded-md z-50"
        >
          Перейти к основному содержанию
        </a>
        
        {/* Main content */}
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        
        {/* Footer */}
        <footer className="bg-text-primary text-white py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Светлана Радченко</h3>
                <p className="text-gray-300">
                  Эксперт в сфере финансов и стратегии
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Контакты</h4>
                <div className="space-y-2 text-gray-300">
                  <div>
                    <a href="mailto:finmodelguru@gmail.com" className="hover:text-white transition-colors">
                      finmodelguru@gmail.com
                    </a>
                  </div>
                  <div>
                    <a href="https://t.me/FinModelGuru" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      @FinModelGuru
                    </a>
                  </div>
                  <div>
                    <a href="https://wa.me/79262240270" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      +7 926 2240270
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Услуги</h4>
                <div className="space-y-2 text-gray-300">
                  <div>
                    <a href="/training" className="hover:text-white transition-colors">
                      Обучение
                    </a>
                  </div>
                  <div>
                    <a href="/financial-consulting" className="hover:text-white transition-colors">
                      Финансовый консалтинг
                    </a>
                  </div>
                  <div>
                    <a href="/cfo-service" className="hover:text-white transition-colors">
                      CFO-сервис
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>
                © 2024 Светлана Радченко. Все права защищены.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}