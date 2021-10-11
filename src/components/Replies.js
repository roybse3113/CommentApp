import React from 'react'
import Reply from './Reply'

const Replies = ({ replies, depth }) => (
  <div>
    {replies.map(reply => (
      <Reply
        key={reply.id}
        reply={reply}
        depth={typeof depth === 'undefined' ? 1 : depth + 1}
      />
    ))}
  </div>
)

export default Replies
