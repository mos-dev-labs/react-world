import { request } from '@libs/utils/dist/libs/utils/src/request'
import { Articles } from '@/types/api/article'

const articleUrl = '/api/articles'

export const getArtices: Articles = () => {
  return request(articleUrl)
}
