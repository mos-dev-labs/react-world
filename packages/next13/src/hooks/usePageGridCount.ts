import { useMemo } from 'react'

export const usePageGridCount = () => {
  const getDeviceWidth = () => {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    )
  }

  const gridCount = useMemo(() => {
    const deviceWidth = getDeviceWidth()
    if (deviceWidth > 1140) {
      return {
        body: 8,
        contents: 6,
        side: 2
      }
    }

    if (deviceWidth > 800) {
      return {
        body: 6,
        contents: 4,
        side: 2
      }
    }

    return {
      body: 4,
      contents: 4,
      side: 0
    }
  }, [])

  return { gridCount }
}
