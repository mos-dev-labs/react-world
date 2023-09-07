import styled from 'styled-components'
import React from 'react'

interface Props extends React.HTMLProps<HTMLDivElement> {
  cell: number
  children?: React.ReactNode
}
export const Grid = ({ cell, children, ...props }: Props) => {
  return (
    <GridStyled cell={cell} {...props}>
      {children}
    </GridStyled>
  )
}

const GridStyled = styled.div<{ cell: number }>`
  width: ${(props) => {
    return 120 * props.cell + (props.cell + 1) * 20
  }}px;
`
