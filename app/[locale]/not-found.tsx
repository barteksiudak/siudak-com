'use client'

import { useTranslations, useLocale } from 'next-intl'
import { Link } from '@/i18n/routing'
import { Header } from '../components/header/header'

export default function NotFound() {
  const locale = useLocale()
  const t = useTranslations('notFound')

  console.log('NotFound - Current locale:', locale)

  return (
    <>
      <Header />
      <main style={{ textAlign: 'center', padding: '2rem' }}>
        <h1>{t('title')}</h1>
        <p>{t('message')}</p>
        <Link
          href="/"
          style={{ color: '#0070f3', textDecoration: 'underline' }}
        >
          {t('backHome')}
        </Link>
      </main>
    </>
  )
}
