import { cookies } from 'next/headers';
import { NextIntlClientProvider } from 'next-intl';
import NotFound from './[locale]/not-found';
import './globals.css';

export default async function GlobalNotFound() {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get('NEXT_LOCALE');

  const defaultLocale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE || 'en';
  const supportedLocales = process.env.NEXT_PUBLIC_LOCALES?.split(',') || [
    'en',
  ];

  // Get locale from cookie, default to the configured default locale
  const cookieValue = localeCookie?.value || defaultLocale;
  const locale = supportedLocales.includes(cookieValue)
    ? cookieValue
    : defaultLocale;

  // Load translations from JSON files
  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NotFound />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
