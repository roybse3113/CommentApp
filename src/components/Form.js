import React, { useState } from 'react'

// Form to be used by both replies and posts
const Form = ({
  prevName, onAdd, depth, setShowAddReply,
}) => {
  const [input, setInput] = useState(!prevName ? '' : `@${prevName}`.concat(' '))
  const [name, setName] = useState('')

  const onSubmit = e => {
    e.preventDefault()

    onAdd({ input, name })

    // Reset the values when typing a new post or reply
    if (!prevName) {
      setInput('')
    } else {
      setInput(prevName)
    }
    setName('')
    // To account for case when first adding a post where setShowAddReply is not defined
    if (setShowAddReply) {
      setShowAddReply(false)
    }
  }

  return (
    <form onSubmit={onSubmit}>
      {depth === 3 ? (
        ''
      ) : (
        <div>
          <div>
            <input
              className="nameInput"
              type="text"
              placeholder="Name..."
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div>
            <textarea
              className="postInput"
              type="text"
              placeholder={!prevName ? 'Write your question or reply...' : `@${prevName}`}
              value={input}
              onChange={e => setInput(e.target.value)}
            />
          </div>
        </div>
      )}
      {depth === 3 || !name || !input ? (
        ''
      ) : (
        <button className="submitButton" type="submit">
          <i className="far fa-paper-plane" />
          {' '}
          Submit
        </button>
      )}
    </form>
  )
}

export default Form
