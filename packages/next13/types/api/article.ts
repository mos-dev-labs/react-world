export type Author = {
  username: string
  bio: string
  image: string
  following: boolean
}

export type Article = {
  slug: string
  title: string
  description: string
  body: string
  tagList: Array<string>
  createdAt: string
  updatedAt: string
  favorited: boolean
  favoritesCount: number
  author: Author
}

export type Articles = {
  articles: Array<Article>
  articlesCount: number
}

export type Comment = {
  id: number
  createdAt: string
  updatedAt: string
  body: string
  author: Author
}
