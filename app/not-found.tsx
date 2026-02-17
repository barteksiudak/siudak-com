import { cookies } from 'next/headers';
import styles from './not-found.module.css';
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
  const t = messages.notFound;

  return (
    <html lang={locale}>
      <body>
        <main className={styles.container}>
          <h1 className={styles.title}>{t.title}</h1>
          <p className={styles.message}>{t.message}</p>
          <a href={`/${locale}`} className={styles.link}>
            {t.backHome}
          </a>
        </main>
      </body>
    </html>
  );
}
