import React, { useState } from 'react'

const Form = ({ onAdd, depth }) => {
  const [input, setInput] = useState('')
  const [name, setName] = useState('')

  const onSubmit = e => {
    e.preventDefault()

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
            <textarea
              className='postInput'
              type='text'
              placeholder='Write a new post...'
              value={input}
              onChange={e => setInput(e.target.value)}
            ></textarea>
          </div>
        </div>
      )}
      {depth === 3 || !name || !input ? (
        ''
      ) : (
        <button className='submitButton' type='submit'>
          <i class='far fa-paper-plane'></i> Submit
        </button>
      )}
    </form>
  )
}

export default Form
