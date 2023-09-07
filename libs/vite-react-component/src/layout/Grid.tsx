import React from 'react'
import styled from "styled-components";

interface Props extends HTMLDivElement {
    cell: number
}
export const Grid = ({cell, ...props}: Props) => {

    return <GridStyled cell={cell} {...props} />
}

const GridStyled = styled.div`
  width: ${props => (props.cell * 32) + (props.cell - 1) * 8}px;
  height: 100%;
`
