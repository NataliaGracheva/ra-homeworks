import React from 'react'

export default function Note({ content, handleDelete }) {
    
  return (
    <div>
      <button onClick={handleDelete}>X</button>
      <div>{content}</div>
    </div>
  )
}