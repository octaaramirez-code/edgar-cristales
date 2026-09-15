import type { Metadata } from 'next'
import { Playfair_Display, Manrope } from 'next/font/google'
import './globals.css'
import { profile } from './content'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['500', '600', '700'],
})

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: profile.title,
  description: profile.description,
  openGraph: {
    title: profile.title,
    description: profile.description,
    url: profile.siteUrl,
    siteName: profile.brand,
    locale: 'es_AR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
