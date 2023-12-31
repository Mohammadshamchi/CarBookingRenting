import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { relative } from 'path'
import { Footer, Navbar } from './components'





export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Discover the best cars in the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
