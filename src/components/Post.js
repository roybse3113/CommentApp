import Form from './Form'
import React, { useState, useEffect, Component } from 'react'

const Post = ({ post }) => {
  return (
    <div>
      <h3>{post.userInput}</h3>
    </div>
  )
}

export default Post
