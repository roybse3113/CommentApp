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
      <VoteButton />
      <h1 className='postTitle'>New Post</h1>
      <h2>
        <div className='name'>{post.name}</div>
      </h2>
      <p>{post.input}</p>

      <button
        className='addReply'
        onClick={() => setShowAddReply(!showAddReply)}
      >
        <i className='fas fa-reply'></i> Reply
      </button>

      {showAddReply ? (
        <div>
          <AddReply onAdd={addReply} />
        </div>
      ) : (
        ''
      )}

      <Replies replies={replies} />
    </div>
  )
}

export default Post
