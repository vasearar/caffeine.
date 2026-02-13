import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { LanguageProvider } from '@/contexts/LanguageContext'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'caffeine. - Specialty Coffee Shop',
  description: 'Specialty coffee shop in Codru, Chisinau, Moldova. Featuring premium Sanremo equipment and a unique space-themed interior.',
  keywords: 'coffee shop, specialty coffee, Chisinau, Moldova, Sanremo, caffeine',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className={montserrat.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
