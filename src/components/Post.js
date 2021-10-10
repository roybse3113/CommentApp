import React, { useState } from 'react'
import Replies from './Replies'
import AddReply from './AddReply'
import VoteButton from './VoteButton'
import './post.css'

const Post = ({ post }) => {
  const [replies, setReplies] = useState([])
  const [showAddReply, setShowAddReply] = useState(false)

  const addReply = reply => {
    const id = Math.floor(Math.random() * 1000 + 1)
    const newReply = { id, ...reply }
    setReplies([...replies, newReply])
  }
  return (
    <div className='post'>
      <h1>New Post</h1>
      <h3>{post.input}</h3>
      <h3>{post.name}</h3>
      <VoteButton />
      <button onClick={() => setShowAddReply(!showAddReply)}>Add reply</button>
      {showAddReply ? (
        <div>
          {() => setShowAddReply(!showAddReply)}
          <AddReply onAdd={addReply} />
          <Replies replies={replies} />
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Post
