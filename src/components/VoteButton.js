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

  let countColor = {
    color: 'black',
  }

  const colorChange = () => {
    if (count < 0) {
      countColor = {
        color: 'rgb(190, 87, 87)',
      }
    } else if (count === 0) {
      countColor = {
        color: 'black',
      }
    } else {
      countColor = {
        color: 'rgb(56, 170, 56)',
      }
    }
  }

  return (
    <div className="voteButtons">
      <button type="button" className="thumbsUp" onClick={upVote}>
        <i className="far fa-arrow-alt-circle-up" />
      </button>
      {colorChange()}
      <div style={countColor}>{count}</div>
      <button type="button" className="thumbsDown" onClick={downVote}>
        <i className="far fa-arrow-alt-circle-down" />
      </button>
    </div>
  )
}

export default VoteButton
