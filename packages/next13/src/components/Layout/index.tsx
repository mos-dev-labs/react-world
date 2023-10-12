'use client'

import React from 'react'
import { DomProps, Grid } from '@libs/react-component'
import { usePageGridCount } from '@/src/hooks/usePageGridCount'

interface Props extends DomProps {
  type: 'body' | 'contents' | 'side' | 'head'
  children?: React.ReactNode
}
export const Layout = ({ type, children, ...props }: Props) => {
  const { gridCount } = usePageGridCount(type)
  return (
    <Grid cell={gridCount} {...props}>
      {children}
    </Grid>
  )
}
