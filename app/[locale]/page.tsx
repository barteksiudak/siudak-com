import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import { Header } from '../components/header/header'

export default async function Home({
  params: { locale },
}: {
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale)
  const t = await getTranslations('home')

  return (
    <>
      <Header />
      <main>
        <h1>{t('greeting')}</h1>
      </main>
    </>
  )
}
