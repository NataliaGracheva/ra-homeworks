import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CreatePage() {

  const [form, setForm] = useState({
    id: '',
    content: ''
  });

  const handleChange = (e) => {
    const { value } = e.target
    setForm(prev => ({ ...prev, id: 0, content: value }))
  };

  const handleSubmit = () => {
    fetch(process.env.REACT_APP_DATA_URL, {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
  };

  return (
    <div className="card">
      <h3>Новая публикация</h3>
      <textarea rows="6" cols="50" value={form.content} onChange={handleChange} />
      <Link to="/" onClick={handleSubmit}>
        <button className="button">Сохранить</button>
      </Link>
      <Link to="/" >
        <button className="button">Отмена</button>
      </Link>
    </div>
  );
}