import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import Post from 'components/Post'
import { NextSeo } from 'next-seo'

const BlogList = ({ posts }) => {
  const sortedPosts = posts.sort((post1, post2) =>
    new Date(post1.date) > new Date(post2.date) ? -1 : 1
  )

  const [count, setCount] = useState({
    prev: 0,
    next: 10
  })
  const [hasMore, setHasMore] = useState(true)
  const [current, setCurrent] = useState(
    sortedPosts.slice(count.prev, count.next)
  )

  const getMoreData = () => {
    if (current.length === sortedPosts.length) {
      setHasMore(false)
      return
    }

    setCurrent(
      current.concat(sortedPosts.slice(count.prev + 10, count.next + 10))
    )

    setCount(prevState => ({
      prev: prevState.prev + 10,
      next: prevState.next + 10
    }))
  }

  return (
    <>
      <NextSeo
        title="Roberlan Carvalho"
        description="Desenvolvedor Full Stack imerso em tecnologia, música e jogos, partilhando inovações."
        openGraph={{
          images: [
            {
              url: 'https://roberlancarvalho.com/assets/img/blog-image.png',
              width: 1200,
              height: 630,
              alt: 'Roberlan Carvalho - Blog'
            }
          ]
        }}
      />
      <InfiniteScroll
        dataLength={current.length}
        next={getMoreData}
        hasMore={hasMore}
      >
        {current.map((post, i) => (
          <Post
            key={i}
            slug={post.slug}
            title={post.frontmatter.title}
            timeToRead={post.timeToRead}
            date={post.frontmatter.date}
            description={post.frontmatter.description}
            main_class={post.frontmatter['main-class']}
          />
        ))}
      </InfiniteScroll>
    </>
  )
}

export default BlogList
