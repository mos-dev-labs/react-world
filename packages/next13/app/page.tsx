import React from 'react'
import { Layout } from '@/src/components/Layout'
import { FeedList } from '@/src/components/FeedList'
import './page.css'

interface Props {
  searchParams: {
    page: number
  }
}

export default function Page({ searchParams: { page = 1 } }: Props) {
  return (
    <article className="root">
      <section className="main__banner">
        <h1 className="main__banner-title">Conduit</h1>
        <p className="main__banner-subject">A place to share your knowledge.</p>
      </section>
      <Layout type="body" className="main__body">
        <Layout type="contents">
          <section className="main__body-feed-list">
            <FeedList page={page} />
          </section>
        </Layout>
        <Layout type="side">
          <section className="main__body-popular-tags"></section>
        </Layout>
      </Layout>
    </article>
  )
}
