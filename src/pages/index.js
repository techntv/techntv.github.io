import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout'
import PostPreview from '../components/post-review'
import usePosts from '../hooks/use-posts'
import Hero from '../components/hero';
// import Insta from '../components/insta'
export default () => {

  const posts = usePosts();

  return (
    <>
      <Hero />
      <Layout>
        <h1>Home</h1>
        <p>Hello Vincent Nguyen!</p>
        <Link to='/about'>Learn about me &rarr;</Link>
        <h2>Read my posts</h2>
        {
          posts.map(post => (
            <PostPreview key={post.slug} post={post} />
          ))
        }

        {/* <Insta></Insta>  */}
      </Layout>


    </>
  )
};
