import React from 'react'
import Post from './Post'

const Posts = ({ posts }) => (
  <div>
    {posts.map(post => (
      <Post key={post.id} post={post} />
    ))}
  </div>
)

export default Posts
