import React from 'react'
import { Grid } from '@libs/react-component'
import './page.css'

export default function Page() {
  return (
    <article>
      <section className="main__banner">
        <h1 className="main__banner-title">Conduit</h1>
        <p className="main__banner-subject">A place to share your knowledge.</p>
      </section>
      <Grid cell={8} className="main__body">
        <Grid cell={6}>
          <section className="main__body-feed-list"></section>
        </Grid>
        <Grid cell={2}>
          <section className="main__body-popular-tags" />
        </Grid>
      </Grid>
    </article>
  )
}
