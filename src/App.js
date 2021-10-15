import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import AddPost from './components/AddPost'
import Posts from './components/Posts'
import './components/App.css'

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
        <h2 className="mainHeader">
          Add Post
          {' '}
          <i className="fas fa-bullhorn" />
        </h2>
        <AddPost className="inputs" onAdd={addPost} />
      </div>
      <Posts posts={posts} />
    </div>
  )
}
export default App
