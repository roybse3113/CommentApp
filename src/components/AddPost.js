import React, { useState } from 'react'
import Form from './Form'
import Posts from './Posts'

const AddPost = ({ onAdd, posts }) => {
  //   return (
  //     <div>
  //       <Form onAdd={onAdd} posts={posts} />
  //     </div>
  //   )
  const [userInput, changeUserInput] = useState('')
  const [userName, changeUserName] = useState('')

  const onSubmit = e => {
    e.preventDefault()

    console.log('userinput', userInput)

    if (!userInput || !userName) {
      alert('Missing name or post text')
      return
    }

    onAdd({ userInput, userName })

    changeUserInput('')
    changeUserName('')
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Name</label>
        <input
          type='text'
          placeholder='Name'
          value={userName}
          onChange={e => changeUserName(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Input</label>
        <input
          type='text'
          placeholder='Post'
          value={userInput}
          onChange={e => changeUserInput(e.target.value)}
        ></input>
      </div>

      <input type='submit' value='Add post' className='btn btn-block'></input>
    </form>
  )
}

export default AddPost
