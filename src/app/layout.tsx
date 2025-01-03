// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Health Metrics Dashboard',
  description: 'Track your health metrics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50">
          <div className="container mx-auto flex justify-between items-center p-4">
            <Link href="/" className="text-xl font-bold text-gray-800 hover:text-black-600">
              Apps
            </Link>
          </div>
        </nav>
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  )
}