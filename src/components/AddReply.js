import React, { useState } from 'react'
import Form from './Form'

const AddReply = ({
  prevName, onAdd, depth, setShowAddReply,
}) => (
  <div>
    <Form prevName={prevName} onAdd={onAdd} depth={depth} setShowAddReply={setShowAddReply} />
  </div>
)

export default AddReply
