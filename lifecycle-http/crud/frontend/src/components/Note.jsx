import React from 'react'

export default function Note({content, handleDelete }) {
    
  return (
    <div className="note">
      <div>{content}</div>
      <button onClick={handleDelete} className="delete-btn">X</button>
    </div>
  )
}