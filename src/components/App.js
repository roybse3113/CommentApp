import React, { useState } from 'react'
import Form from './Form'
import Post from './Post'
import AddPost from './AddPost'
import Posts from './Posts'

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, userName: 'joe', userInput: 'hw3' },
  ])

  const addPost = post => {
    const id = Math.floor(Math.random() * 10000 + 1)
    const newPost = {
      id,
      ...post,
    }
    setPosts = [...posts, newPost]
  }

  return (
    <div>
      <h1>yo</h1>
      <AddPost onAdd={addPost} posts={posts} />
      <Posts posts={posts} />
    </div>
  )
}
export default App
