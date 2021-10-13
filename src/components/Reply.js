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

  const showAdd = condition => {
    if (condition) {
      return (
        <div>
          <AddReply
            prevName={reply.name}
            setShowAddReply={setShowAddReply}
            onAdd={addReply}
            depth={depth}
          />
        </div>
      )
    }
    return ''
  }

  const showButton = val => {
    if (val < 2) {
      return (
        <button
          type="button"
          className="addReply"
          onClick={() => setShowAddReply(!showAddReply)}
        >
          <i className="fas fa-reply" />
          {' '}
          Reply
        </button>
      )
    }
    return ''
  }

  return (
    <div className="reply">
      <VoteButton />
      <h3 className="name">
        <i className="far fa-comment-dots" />
        {' '}
        {reply.name}
      </h3>
      <p>{reply.input}</p>

      {showButton(depth)}
      {showAdd(showAddReply)}

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
