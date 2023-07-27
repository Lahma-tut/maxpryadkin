import './globals.css'
import type { Metadata } from 'next'
import { TheHeader } from '@/components/TheHeader'
import { TheFooter } from '@/components/TheFooter'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <TheHeader />
        <main>
          { children }
          </main>
        <TheFooter />
        </body>
    </html>
  )
}
