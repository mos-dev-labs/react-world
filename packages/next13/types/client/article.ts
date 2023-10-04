export type Article = {
  id: string | number
  user: {
    userName: string
    image: string
  }
  createDate: string
  title: string
  body: string
  likes: number
  isLike: boolean
  tags: string[]
}
