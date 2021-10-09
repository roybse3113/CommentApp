import React from 'react'
import Reply from './Reply'

const Replies = ({ replies }) => {
  return (
    <div>
      {replies.map(reply => (
        <Reply reply={reply} />
      ))}
    </div>
  )
}

export default Replies
