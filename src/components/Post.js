import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Replies from './Replies'
import AddReply from './AddReply'
import VoteButton from './VoteButton'
import './post.css'

const Post = ({ post }) => {
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
          <AddReply prevName={post.name} setShowAddReply={setShowAddReply} onAdd={addReply} depth={0} />
        </div>
      )
    }
    return ''
  }

  return (
    <div>
      <div className="post">
        <VoteButton />
        <h3>
          <div className="name">
            <i className="fas fa-mail-bulk" />
            {' '}
            {post.name}
          </div>
        </h3>
        <p>{post.input}</p>

        <button
          type="button"
          className="addReply"
          onClick={() => setShowAddReply(!showAddReply)}
        >
          <i className="fas fa-reply" />
          {' '}
          Reply
        </button>
        {showAdd(showAddReply)}
        <Replies replies={replies} />
      </div>
    </div>
  )
}

export default Post
