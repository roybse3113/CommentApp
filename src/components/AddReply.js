import React, { useState } from 'react'
import Form from './Form'

const AddReply = ({ onAdd }) => {
  return (
    <div>
      <Form onAdd={onAdd} />
    </div>
  )
}

export default AddReply
