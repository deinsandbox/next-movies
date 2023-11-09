import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '/node_modules/minireset.css/'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const generateMetadata = async () => {
  return {
    title: {
      template: `%s | Next Movies`,
      default: 'Next Movies',
    },
    description: 'Next Movies List',
    keywords: ['movies', 'next'],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
