import { useMemo } from 'react'
import { BoxButton, DomProps } from '@libs/react-component'
import './index.css'

interface Props extends DomProps {
  count: number
  isLike: boolean
}

export const LikeButton = ({ count, isLike }: Props) => {
  const classNames = useMemo(() => {
    const classnames = ['like-button']
    if (isLike) {
      classnames.push('like-button__status-like')
    }
    return classnames.join(' ')
  }, [isLike])

  return <BoxButton className={classNames}>{count}</BoxButton>
}
