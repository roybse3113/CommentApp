import React, { useState, useEffect, Component } from 'react'

const Form = ({ onAdd }) => {
  const [userInput, changeUserInput] = useState('')
  const [userName, changeUserName] = useState('')

  const onSubmit = e => {
    console.log('userinput', userInput)

    onAdd({ userInput, userName })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>Name</label>
          <input
            type='text'
            value={userName}
            onChange={e => changeUserName(e.target.value)}
          />
        </div>
        <div>
          <label>Post</label>
          <input
            type='text'
            value={userInput}
            onChange={e => changeUserInput(e.target.value)}
          />
        </div>
        <input type='submit' value='Add post'></input>
      </form>
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
