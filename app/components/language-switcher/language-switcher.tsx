'use client'

import { useRouter, usePathname } from 'next/navigation'
import { locales } from '@/i18n/routing'
import styles from './language-switcher.module.css'

interface LanguageSwitcherProps {
  currentLocale: string
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === currentLocale) return

    const segments = pathname.split('/')
    segments[1] = newLocale
    const newPath = segments.join('/')

    router.push(newPath || `/${newLocale}`)
  }

  return (
    <div className={styles.switcher}>
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => handleLocaleChange(loc)}
          className={`${styles.button} ${currentLocale === loc ? styles.active : ''}`}
          aria-label={`Switch to ${loc}`}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
