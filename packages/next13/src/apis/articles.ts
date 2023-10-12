import { Article as ClientArticle } from '@/types/client/article'
import { Article, Articles } from '@/types/api/article'
import { request } from '@libs/utils'
import { API_DOMAIN } from '@/src/consts'

const articleUrl = `${API_DOMAIN}/api/articles`

export const getArticles = async (page?: number): Promise<ClientArticle[]> => {
  try {
    const data = await request<Articles>(articleUrl)
    return data.articles.map((article: Article) => ({
      id: `${article.title}-${article.author}-${article.createdAt}`,
      user: {
        userName: article.author.username,
        image: article.author.image
      },
      createDate: article.createdAt,
      title: article.title,
      body: article.description,
      likes: article.favoritesCount,
      isLike: article.favorited,
      tags: article.tagList
    }))
  } catch (e) {
    console.log('error', e)
    return Promise.reject(e)
  }
}
