import React from 'react'

const Reply = ({ reply }) => {
  return (
    <div>
      <h3>{reply.input}</h3>
      <h3>{reply.name}</h3>
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
