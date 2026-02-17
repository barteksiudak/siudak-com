import { cookies } from 'next/headers'

// Translation messages
const messages = {
  en: {
    title: '404 - Page Not Found',
    message: 'Sorry, the page you are looking for does not exist.',
    backHome: 'Go back home',
  },
  pl: {
    title: '404 - Strona nie znaleziona',
    message: 'Przepraszamy, strona której szukasz nie istnieje.',
    backHome: 'Wróć do strony głównej',
  },
}

export default async function GlobalNotFound() {
  const cookieStore = await cookies()
  const localeCookie = cookieStore.get('NEXT_LOCALE')

  // Get locale from cookie, default to 'en'
  const locale = (localeCookie?.value === 'pl' ? 'pl' : 'en') as 'en' | 'pl'
  const t = messages[locale]

  return (
    <html lang={locale}>
      <body>
        <main style={{ textAlign: 'center', padding: '2rem' }}>
          <h1>{t.title}</h1>
          <p>{t.message}</p>
          <a
            href={`/${locale}`}
            style={{ color: '#0070f3', textDecoration: 'underline' }}
          >
            {t.backHome}
          </a>
        </main>
      </body>
    </html>
  )
}
