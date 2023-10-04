import { Article } from '@/types/client/article'
import Image from 'next/image'
import { LikeButton } from '@/src/components/LikeButton'
import './index.css'

interface Props extends Article {}
export const Feed = ({
  id,
  user,
  createDate,
  title,
  body,
  likes,
  tags,
  isLike
}: Props) => {
  return (
    <article className="feed">
      <section className="feed__header">
        <div className="feed__user-info">
          <Image
            className="feed__user-image"
            src={user.image}
            alt={user.userName}
          />
          <div>
            <h3 className="feed__user-name">{user.userName}</h3>
            <label className="feed__create-date">{createDate}</label>
          </div>
        </div>
        <LikeButton
          className="feed__user__like-button"
          count={likes}
          isLike={isLike}
        />
      </section>
      <section className="feed__title">{title}</section>
      <section className="feed__body">{body}</section>
      <section className="feed__footer">
        <label className="feed__footer__button-read-more">Read more...</label>
        <ul className="feed__footer__tags">
          {tags.map((tag) => (
            <li className="feed__footer__tag" key={tag}>
              {tag}
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
