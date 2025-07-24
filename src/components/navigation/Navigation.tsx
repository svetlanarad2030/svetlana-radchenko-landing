/**
 * @fileoverview Navigation component for the website
 * @module components/navigation/Navigation
 */

'use client';

import { ReactElement } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

/**
 * Navigation component with responsive design and active states
 */
export function Navigation(): ReactElement {
  const pathname = usePathname();

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

        {/* Mobile Navigation - Simple version for now */}
        <div className="md:hidden">
          <button className="text-brand-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;