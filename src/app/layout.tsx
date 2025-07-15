import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'

import { Providers } from '@/core/providers'
import { Footer, Header } from '@/presentation/components'

import './globals.css'

const archivo = Archivo({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Apply Digital Test',
  description: 'Frontend development test for Apply Digital',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${archivo.className} min-h-screen flex flex-col`}>
        <Providers>
          <Header />
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  )
}
