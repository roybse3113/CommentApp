import React, { useState } from 'react'
import VoteButton from './VoteButton'
import './reply.css'
import AddReply from './AddReply'
import Replies from './Replies'

const Reply = ({ reply, depth }) => {
  const [replies, setReplies] = useState([])
  const [showAddReply, setShowAddReply] = useState(false)

  const addReply = reply => {
    const id = Math.floor(Math.random() * 1000 + 1)
    const newReply = { id, ...reply }
    setReplies([...replies, newReply])
  }

  return (
    <div className='reply'>
      <VoteButton />
      <h3 className='name'>{reply.name}</h3>
      <p>{reply.input}</p>

      {depth === 3 ? (
        ''
      ) : (
        <button
          className='addReply'
          onClick={() => setShowAddReply(!showAddReply)}
        >
          <i className='fas fa-reply'></i>
        </button>
      )}

      {showAddReply ? (
        <div>
          <AddReply onAdd={addReply} depth={depth} />
        </div>
      ) : (
        ''
      )}

      <Replies replies={replies} depth={depth} />
    </div>
  )
}

export default Reply
