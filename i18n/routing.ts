import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'pl'],
  defaultLocale: 'en',
  localePrefix: 'always',
})

export const { locales, defaultLocale } = routing
export type Locale = (typeof locales)[number]
