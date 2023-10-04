import { sleep } from './timer'

export const request = (baseUrl: string) => {
  return fetch(baseUrl)
    .then((res) => {
      return Promise.resolve(res.json())
    })
    .catch((e) => {
      return Promise.reject(e)
    })
}

export const requestWithTimer = (api: Promise<unknown>, time: number) => {
  return Promise.race([api, sleep(time)])
}
