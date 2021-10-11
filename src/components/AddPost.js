import React, { useState } from 'react'
import Form from './Form'

const AddPost = ({ onAdd }) => (
  <div>
    <Form onAdd={onAdd} />
  </div>
)

export default AddPost
