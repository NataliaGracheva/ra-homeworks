import React from 'react';

export default function Notes({ notes, handleDelete }) {

  return notes.map((note) => (
    <div key={note.id}>
      <button onClick={null}>X</button>
      <div>{note.content}</div>
    </div>
  ));
}