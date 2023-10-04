import React, { HTMLProps } from 'react'

interface Props extends HTMLProps<HTMLDivElement> {
  cell: number
  children?: React.ReactNode
}
export const Grid = ({ cell, children, ...props }: Props) => {
  return (
    <div style={{ width: 120 * cell + (cell + 1) * 20 }} {...props}>
      {children}
    </div>
  )
}
