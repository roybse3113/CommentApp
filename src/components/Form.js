import React, { useState } from 'react'

const Form = ({ onAdd, depth }) => {
  const [input, setInput] = useState('')
  const [name, setName] = useState('')

  const onSubmit = e => {
    e.preventDefault()

    // if (!input || !name) {
    //   alert('Please add name and input')
    //   return
    // }

    onAdd({ input, name })

    setInput('')
    setName('')
  }

  return (
    <form onSubmit={onSubmit}>
      {depth === 3 ? (
        ''
      ) : (
        <div>
          <div>
            <input
              className='nameInput'
              type='text'
              placeholder='Name...'
              value={name}
              onChange={e => setName(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              className='postInput'
              type='text'
              placeholder='Write a new post...'
              value={input}
              onChange={e => setInput(e.target.value)}
            ></input>
          </div>
        </div>
      )}
      {depth === 3 || !name || !input ? (
        ''
      ) : (
        <input type='submit' value='Post' className='btn btn-block'></input>
      )}
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
