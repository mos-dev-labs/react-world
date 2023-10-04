import React from 'react'
import { Feed } from '@/src/components/Feed'
import { Grid } from '@libs/react-component'
import { usePageGridCount } from '@/src/hooks/usePageGridCount'
import './page.css'

export default function Page() {
  const { gridCount } = usePageGridCount()
  return (
    <article>
      <section className="main__banner">
        <h1 className="main__banner-title">Conduit</h1>
        <p className="main__banner-subject">A place to share your knowledge.</p>
      </section>
      <Grid cell={gridCount.body} className="main__body">
        <Grid cell={gridCount.contents}>
          <section className="main__body-feed-list">
            <Feed
              id={1}
              user={{ userName: 'a', image: '' }}
              createDate={'2023-10-3'}
              title={'test'}
              body={'test contents'}
              likes={3}
              isLike={false}
              tags={['a', 'b', 'c']}
            />
            <Feed
              id={2}
              user={{ userName: 'a', image: '' }}
              createDate={'2023-10-3'}
              title={'test'}
              body={'test contents'}
              likes={3}
              isLike={false}
              tags={['a', 'b', 'c']}
            />
            <Feed
              id={3}
              user={{ userName: 'a', image: '' }}
              createDate={'2023-10-3'}
              title={'test'}
              body={'test contents'}
              likes={3}
              isLike={false}
              tags={['a', 'b', 'c']}
            />
          </section>
        </Grid>
        <Grid cell={gridCount.side}>
          <section className="main__body-popular-tags" />
        </Grid>
      </Grid>
    </article>
  )
}
