import React, { useState } from 'react'

const VoteButton = () => {
  const [count, setCount] = useState(0)

  const upVote = () => {
    setCount(count + 1)
  }

  const downVote = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={upVote}>Like</button>
      <button onClick={downVote}>Dislike</button>
    </div>
  )
}

export default VoteButton
