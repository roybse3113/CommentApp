import React, { useState } from 'react'
import VoteButton from './VoteButton'
import './reply.css'
import AddReply from './AddReply'
import Replies from './Replies'

const Reply = ({ reply, depth }) => {
  console.log('depth', depth)
  const [replies, setReplies] = useState([])

  const addReply = reply => {
    const id = Math.floor(Math.random() * 1000 + 1)
    const newReply = { id, ...reply }
    setReplies([...replies, newReply])
  }

  if (depth > 3) {
    return null
  }

  return (
    <div className='reply'>
      <h1>Depth: {depth}</h1>
      <h3>{reply.input}</h3>
      <h3>{reply.name}</h3>
      <VoteButton />
      <AddReply onAdd={addReply} depth={depth} />
      <Replies replies={replies} depth={depth} />
    </div>
  )
}

export default Reply

// export const Reply = ({ depth }) => {
//   if (depth === 0) {
//     // Base case
//     return null
//   }

//   if (depth == 2) {
//     //case for 3 nested replies
//   }

//   return (
//     <>
//       <h1>Depth: {depth}</h1>
//       <Reply depth={depth - 1} />
//     </>
//   )
// }
