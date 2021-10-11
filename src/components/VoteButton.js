import React, { useState } from 'react'
import './VoteButton.css'

const VoteButton = () => {
  const [count, setCount] = useState(0)

  const upVote = () => {
    setCount(count + 1)
  }

  const downVote = () => {
    setCount(count - 1)
  }

  return (
    <div className="voteButtons">
      <button type="button" className="thumbsUp" onClick={upVote}>
        <i className="far fa-arrow-alt-circle-up" />
      </button>
      <div>{count}</div>
      <button type="button" className="thumbsDown" onClick={downVote}>
        <i className="far fa-arrow-alt-circle-down" />
      </button>
    </div>
  )
}

export default VoteButton
