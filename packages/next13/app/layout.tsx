import React from 'react'
import { Header } from '@/src/components/Header'
import { Layout } from '@/src/components/Layout'
import '@/styles/reset.css'
import './layout.css'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" id="real-world-root">
      <body>
        <Layout type={'head'} className="main__header">
          <Header />
        </Layout>
        {children}
        <footer className="main__footer">
          <a>Go to git</a>
        </footer>
      </body>
    </html>
  )
}
