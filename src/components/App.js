import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import AddPost from './AddPost'
import Posts from './Posts'
import './App.css'

const App = () => {
  const [posts, setPosts] = useState([])

  const addPost = post => {
    const id = uuidv4()
    const newPost = { id, ...post }
    setPosts([...posts, newPost])
  }

  return (
    <div>
      <h1 className="title">
        React Comment App
        {' '}
        <i className="fas fa-comments" />
      </h1>
      <div className="original">
        <h2 className="mainHeader">Add a Post</h2>
        <AddPost onAdd={addPost} />
      </div>
      <Posts posts={posts} />
    </div>
  )
}
export default App
