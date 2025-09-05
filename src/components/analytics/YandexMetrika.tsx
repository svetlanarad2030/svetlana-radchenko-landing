'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    ym?: (...args: unknown[]) => void;
  }
}

const YANDEX_COUNTER_ID = 103872130;

export default function YandexMetrika(): null {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRenderRef = useRef(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (typeof window.ym !== 'function') return;
    if (!pathname) return;
    if (isFirstRenderRef.current) {
      // Skip the first render to avoid double-counting the initial page load
      isFirstRenderRef.current = false;
      return;
    }

    const queryString = searchParams?.toString();
    const url = queryString && queryString.length > 0 ? `${pathname}?${queryString}` : pathname;

    try {
      window.ym(YANDEX_COUNTER_ID, 'hit', url, {
        title: document.title,
        referer: document.referrer || undefined,
      });
    } catch {
      // no-op: avoid breaking rendering if ym fails
    }
  }, [pathname, searchParams]);

  return null;
}


