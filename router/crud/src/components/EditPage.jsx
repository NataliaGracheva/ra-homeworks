import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

export default function EditPage({ match }) {

  const [data] = useFetch(process.env.REACT_APP_DATA_URL, []);
  const postId = +match.params.id;

  const [form, setForm] = useState({
    id: postId,
    content: ''
  });

  useEffect(() => {
    if (data.length > 0) {
      let d = data.find(i => i.id === postId)
      setForm(prev => ({ ...prev, content: d.content }))
    }
  }, [data, postId]);

  const handleChange = (e) => {
    const { value } = e.target
    setForm(prev => ({ ...prev, content: value }))
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
      <h3>Страница редактирования</h3>
      <textarea rows="6" cols="50" value={form.content} onChange={handleChange} />

      <Link to='/' onClick={handleSubmit}>
        <button className="button">Сохранить</button>
      </Link>

      <Link className="button" to='/' >
        <button className="button">Отмена</button>
      </Link>

    </div>
  );
}