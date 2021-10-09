import React, { useState } from 'react'

const Form = ({ onAdd }) => {
  const [input, setInput] = useState('')
  const [name, setName] = useState('')

  const onSubmit = e => {
    e.preventDefault()

    if (!input || !name) {
      alert('Please add name and input')
      return
    }

    onAdd({ input, name })

    setInput('')
    setName('')
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Name</label>
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={e => setName(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Input</label>
        <input
          type='text'
          placeholder='Post'
          value={input}
          onChange={e => setInput(e.target.value)}
        ></input>
      </div>

      <input type='submit' value='Post' className='btn btn-block'></input>
    </form>
  )
}

export default Form

// export default () => {
//   const [userInput, changeUserInput] = useState('')
//   return (
//     <input type="text" value={userInput} onChange={e => changeUserInput(e.target.value)} />
//   )
// }
