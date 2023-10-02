import { ForwardedRef, forwardRef } from 'react'

interface Props {
  text: string
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ text }: Props, ref: ForwardedRef<HTMLButtonElement>) => {
    return <button ref={ref}>{text}</button>
  }
)
