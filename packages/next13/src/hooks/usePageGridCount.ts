'use client'
import { useEffect, useMemo, useState } from 'react'

const getDeviceWidth = () => {
  return window.innerWidth
}

export const usePageGridCount = (
  type: 'body' | 'contents' | 'side' | 'head'
) => {
  const [deviceWidth, setDeviceWidth] = useState(getDeviceWidth())

  const gridCount = useMemo(() => {
    if (deviceWidth > 1140) {
      return {
        head: 8,
        body: 8,
        contents: 6,
        side: 2
      }
    }

    if (deviceWidth > 860) {
      return {
        head: 6,
        body: 6,
        contents: 4,
        side: 2
      }
    }

    return {
      head: 4,
      body: 4,
      contents: 4,
      side: 0
    }
  }, [deviceWidth])

  useEffect(() => {
    window.addEventListener('resize', () => {
      setDeviceWidth(getDeviceWidth())
    })
    return window.removeEventListener('resize', () => {
      setDeviceWidth(getDeviceWidth())
    })
  }, [])

  return { gridCount: gridCount[type] }
}
