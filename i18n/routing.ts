import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: (process.env.NEXT_PUBLIC_LOCALES?.split(',') || ['en']) as [
    'en',
    ...string[],
  ],
  defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE || 'en',
  localePrefix: 'always',
  localeDetection: true,
});

export const { locales, defaultLocale } = routing;
export type Locale = (typeof locales)[number];

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
