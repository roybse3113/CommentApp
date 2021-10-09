import React, { useState, useEffect, Component } from 'react'
 
const Form = () => {
    const [userInput, changeUserInput] = useState('')
    return (
        <div>
        <input type="text" value={userInput} onChange={e => changeUserInput(e.target.value)} />
            <input type="text" value={userInput} onChange={e => changeUserInput(e.target.value)} />
        </div>
    )
}

export default Form

// export default () => {
//   const [userInput, changeUserInput] = useState('')
//   return (
//     <input type="text" value={userInput} onChange={e => changeUserInput(e.target.value)} />
//   )
// }