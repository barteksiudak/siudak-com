'use client';

import { useTranslations, useLocale } from 'next-intl';
import { LanguageSwitcher } from '../language-switcher/language-switcher';
import styles from './header.module.css';

export const Header = () => {
  const t = useTranslations('header');
  const locale = useLocale();

  return (
    <header className={styles.header}>
      <LanguageSwitcher currentLocale={locale} />
    </header>
  );
};
