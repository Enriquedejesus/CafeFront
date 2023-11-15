import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cafe Front',
  description: 'Proyecto Cafe',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
      <div>
        {children}

      </div>

      <footer>Derechos Reservados</footer>
      </body>
    </html>
  )
}
