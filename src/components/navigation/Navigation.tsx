/**
 * @fileoverview Navigation component for the website
 * @module components/navigation/Navigation
 */

'use client';

import { ReactElement, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/hooks/useTranslation';

/**
 * Navigation component with responsive design and active states
 */
export function Navigation(): ReactElement {
  const pathname = usePathname();
  const { t, locale } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getLocalizedHref = (href: string, targetLocale?: string) => {
    const currentLocale = targetLocale || locale;
    return currentLocale === 'ru' ? href : `/${currentLocale}${href}`;
  };

  const navigationItems = [
    { href: '/', label: t('navigation.home') },
    { href: '/about', label: t('navigation.about') },
    { href: '/services', label: t('navigation.services') },
    { href: '/contact', label: t('navigation.contact') },
  ];

  const switchLanguage = (newLocale: string) => {
    // Remove current locale prefix and add new one
    let newPath = pathname;
    if (pathname.startsWith('/en')) {
      newPath = pathname.substring(3) || '/';
    }
    const targetPath = newLocale === 'ru' ? newPath : `/${newLocale}${newPath}`;
    window.location.href = targetPath;
  };

  return (
    <nav className="bg-white shadow-sm px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href={getLocalizedHref('/')} className="text-2xl font-bold text-brand-primary">
          {t('hero.name')}
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={getLocalizedHref(item.href)}
              className={cn(
                'font-medium transition-colors',
                pathname === getLocalizedHref(item.href)
                  ? 'text-brand-primary'
                  : 'text-text-secondary hover:text-brand-primary'
              )}
            >
              {item.label}
            </Link>
          ))}
          
          {/* Language Switcher */}
          <div className="flex items-center gap-2 ml-4 pl-4 border-l border-gray-200">
            <button
              onClick={() => switchLanguage('ru')}
              className={cn(
                'px-2 py-1 text-sm font-medium rounded transition-colors',
                locale === 'ru'
                  ? 'bg-brand-primary text-white'
                  : 'text-text-secondary hover:text-brand-primary hover:bg-gray-100'
              )}
            >
              RU
            </button>
            <button
              onClick={() => switchLanguage('en')}
              className={cn(
                'px-2 py-1 text-sm font-medium rounded transition-colors',
                locale === 'en'
                  ? 'bg-brand-primary text-white'
                  : 'text-text-secondary hover:text-brand-primary hover:bg-gray-100'
              )}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-brand-primary"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={getLocalizedHref(item.href)}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'block px-3 py-2 rounded-md text-base font-medium transition-colors',
                  pathname === getLocalizedHref(item.href)
                    ? 'text-brand-primary bg-brand-primary/5'
                    : 'text-text-secondary hover:text-brand-primary hover:bg-gray-50'
                )}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-2 px-3 py-2 border-t border-gray-100 mt-2 pt-4">
              <span className="text-sm text-text-secondary mr-2">Language:</span>
              <button
                onClick={() => {
                  switchLanguage('ru');
                  setIsMobileMenuOpen(false);
                }}
                className={cn(
                  'px-3 py-1 text-sm font-medium rounded transition-colors',
                  locale === 'ru'
                    ? 'bg-brand-primary text-white'
                    : 'text-text-secondary hover:text-brand-primary hover:bg-gray-100'
                )}
              >
                RU
              </button>
              <button
                onClick={() => {
                  switchLanguage('en');
                  setIsMobileMenuOpen(false);
                }}
                className={cn(
                  'px-3 py-1 text-sm font-medium rounded transition-colors',
                  locale === 'en'
                    ? 'bg-brand-primary text-white'
                    : 'text-text-secondary hover:text-brand-primary hover:bg-gray-100'
                )}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;