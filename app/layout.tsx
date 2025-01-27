import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Maru Coin',
  description: 'Maru',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
