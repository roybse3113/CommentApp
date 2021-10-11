import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import VoteButton from './VoteButton'
import './reply.css'
import AddReply from './AddReply'

const Reply = ({ reply, depth }) => {
  const [replies, setReplies] = useState([])
  const [showAddReply, setShowAddReply] = useState(false)

  const addReply = r => {
    const id = uuidv4()
    const newReply = { id, ...r }
    setReplies([...replies, newReply])
  }

  return (
    <div className="reply">
      <VoteButton />
      <h3 className="name">{reply.name}</h3>
      <p>{reply.input}</p>

      {depth === 2 ? (
        ''
      ) : (
        <button
          type="button"
          className="addReply"
          onClick={() => setShowAddReply(!showAddReply)}
        >
          <i className="fas fa-reply" />
          {' '}
          Reply
        </button>
      )}

      {showAddReply ? (
        <div>
          <AddReply onAdd={addReply} depth={depth} />
        </div>
      ) : (
        ''
      )}

      <div>
        {replies.map(rep => (
          <Reply
            key={rep.id}
            reply={rep}
            depth={typeof depth === 'undefined' ? 1 : depth + 1}
          />
        ))}
      </div>
    </div>
  )
}

export default Reply
