import React, { useState } from 'react'
import Replies from './Replies'
import AddReply from './AddReply'
import VoteButton from './VoteButton'
import './post.css'

const Post = ({ post }) => {
  const [replies, setReplies] = useState([])

  const addReply = reply => {
    const id = Math.floor(Math.random() * 1000 + 1)
    const newReply = { id, ...reply }
    setReplies([...replies, newReply])
  }
  return (
    <div className='post'>
      <h3>{post.input}</h3>
      <h3>{post.name}</h3>
      <VoteButton />
      <AddReply onAdd={addReply} />
      <Replies replies={replies} />
    </div>
  )
}

export default Post
