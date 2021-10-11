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
    <div>
      <h1 className='title'>
        React Comment App <i class='fas fa-comments'></i>
      </h1>
      <div className='original'>
        <h1 className='mainHeader'>Add a Post</h1>
        <AddPost onAdd={addPost} />
      </div>
      <Posts posts={posts} />
    </div>
  )
}
export default App
