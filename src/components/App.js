import React, { useState } from 'react'
import AddPost from './AddPost'
import Posts from './Posts'
import './App.css'

const App = () => {
  const [posts, setPosts] = useState([])

  const addPost = post => {
    const id = Math.floor(Math.random() * 1000 + 1)
    const newPost = { id, ...post }
    setPosts([...posts, newPost])
  }

  return (
    <div className='original'>
      <h1>Add a Post</h1>
      <AddPost onAdd={addPost} />
      <Posts posts={posts} />
    </div>
  )
}
export default App
