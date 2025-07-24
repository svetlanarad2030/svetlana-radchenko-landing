/**
 * @fileoverview Navigation component for the website
 * @module components/navigation/Navigation
 */

'use client';

import { ReactElement, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

/**
 * Navigation component with responsive design and active states
 */
export function Navigation(): ReactElement {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { href: '/', label: 'Главная' },
    { href: '/about', label: 'Кто я и чем могу быть полезна' },
    { href: '/services', label: 'Услуги' },
    { href: '/partners', label: 'Партнеры и клиенты' },
    { href: '/contact', label: 'Контактный блок' },
  ];

  return (
    <nav className="bg-white shadow-sm px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-brand-primary">
          Светлана Радченко
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'font-medium transition-colors',
                pathname === item.href
                  ? 'text-brand-primary'
                  : 'text-text-secondary hover:text-brand-primary'
              )}
            >
              {item.label}
            </Link>
          ))}
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
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'block px-3 py-2 rounded-md text-base font-medium transition-colors',
                  pathname === item.href
                    ? 'text-brand-primary bg-brand-primary/5'
                    : 'text-text-secondary hover:text-brand-primary hover:bg-gray-50'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;