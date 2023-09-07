'use client'
import React from 'react'
import StyledComponentsRegistry from '../lib/Registry'
import styled from 'styled-components'
import { GlobalStyle } from '../lib/GlobalStyle'
import { Header } from '../src/components/Header'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <Header />
          {children}
          <Footer>
            <a>Go to git</a>
          </Footer>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

const Footer = styled.footer`
  bottom: 0;
  position: fixed;
  z-index: 1000;
  width: 100%;
  font-size: 24px;
  line-height: 36px;
  background: linear-gradient(#485563, #29323c);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    padding: 15px;
  }
`
