'use client';

import { useRouter, usePathname } from '@/i18n/routing';
import { locales } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import styles from './language-switcher.module.css';

interface LanguageSwitcherProps {
  currentLocale: string;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('language');

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === currentLocale) return;

    // Save locale to cookie (next-intl will use this automatically)
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

    // Use next-intl's router for locale-aware navigation
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <nav className={styles.switcher} aria-label="Language switcher">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => handleLocaleChange(loc)}
          className={`${styles.button} ${currentLocale === loc ? styles.active : ''}`}
          aria-label={t('switchTo', { language: t(loc) })}
          aria-current={currentLocale === loc ? 'true' : undefined}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </nav>
  );
}
