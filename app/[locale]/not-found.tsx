'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Header } from '../components/header/header';
import styles from './not-found.module.css';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <>
      <Header />
      <main className={styles.container}>
        <h1 className={styles.title}>{t('title')}</h1>
        <p className={styles.message}>{t('message')}</p>
        <Link href="/" className={styles.link}>
          {t('backHome')}
        </Link>
      </main>
    </>
  );
}
