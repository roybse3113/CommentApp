import React, { useState } from 'react'
import AddPost from './AddPost'
import Posts from './Posts'
const App = () => {
  const [posts, setPosts] = useState([])

  const addPost = post => {
    const id = Math.floor(Math.random() * 1000 + 1)
    const newPost = { id, ...post }
    setPosts([...posts, newPost])
  }

  return (
    <div>
      <h1>yo</h1>
      <AddPost onAdd={addPost} />
      <Posts posts={posts} />
    </div>
  )
}
export default App
