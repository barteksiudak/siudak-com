import type { Metadata } from 'next'
import './globals.css'
import { Header } from './components/header/header'

export const metadata: Metadata = {
  title: 'Siudak.com',
  description: 'Welcome to siudak.com',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
