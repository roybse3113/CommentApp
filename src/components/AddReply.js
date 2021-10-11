import React, { useState } from 'react'
import Form from './Form'

const AddReply = ({ onAdd, depth }) => (
  <div>
    <Form onAdd={onAdd} depth={depth} />
  </div>
)

export default AddReply
