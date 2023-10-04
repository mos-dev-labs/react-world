import React from 'react'
import { Button } from './Button'
import { DomProps } from '../utils'
import styles from './boxButton.module.css'

interface Props extends DomProps {
  children: React.ReactNode
}
export const BoxButton = ({ children, ...props }: Props) => {
  return (
    <Button {...DomProps.extract(props, styles['box-button'])}>
      {children}
    </Button>
  )
}
