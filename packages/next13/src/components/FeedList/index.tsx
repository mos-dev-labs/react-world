import { getArticles } from '@/src/apis/articles'
import { Feed } from '@/src/components/Feed'

interface Props {
  page: number
}
export const FeedList = async ({ page }: Props) => {
  const feeds = await getArticles(page)
  return (
    <>
      {feeds.map((feed) => (
        <Feed key={feed.id} {...feed} />
      ))}
    </>
  )
}
