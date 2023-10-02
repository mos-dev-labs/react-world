import React from 'react'
import { Header } from '@/src/components/Header'
import '@/styles/reset.css'
import './layout.css'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <footer className="main__footer">
          <a>Go to git</a>
        </footer>
      </body>
    </html>
  )
}
