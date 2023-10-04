import React, { ForwardedRef, forwardRef, HTMLProps } from 'react'
import { DomProps } from '../utils'

interface Props extends HTMLProps<HTMLButtonElement> {
  children: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, ...props }: Props, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <button ref={ref} {...DomProps.extract(props)}>
        {children}
      </button>
    )
  }
)
