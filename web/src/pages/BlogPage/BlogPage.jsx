// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const BlogPage = () => {
  return (
    <>
      <Metadata title="Blog" description="Blog page" />

      <h1>BlogPage</h1>
      <p>
        Find me in <code>./web/src/pages/BlogPage/BlogPage.jsx</code>
      </p>
      {/*
           My default route is named `blog`, link to me with:
           `<Link to={routes.blog()}>Blog</Link>`
        */}
    </>
  )
}

export default BlogPage
