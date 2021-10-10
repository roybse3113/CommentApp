import React, { useState } from 'react'
import Form from './Form'

const AddReply = ({ onAdd, depth }) => {
  return (
    <div>
      <Form onAdd={onAdd} depth={depth} />
    </div>
  )
}

export default AddReply

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
