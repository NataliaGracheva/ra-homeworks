import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

export default function ViewPage({ match }) {

  const [data] = useFetch(process.env.REACT_APP_DATA_URL, []);
  console.log(data);
  console.log(match);
  const postId = match.params.id
  const url = process.env.REACT_APP_DATA_URL + '/' + postId;

  const [form, setForm] = useState({
    id: postId,
    content: ''
  });

  useEffect(() => {
    if (data.length > 0) {
      let d = data.find(i => i.id === +postId)//
      setForm(prev => ({ ...prev, content: d.content }))
    }
  }, [data, postId]);


  const handleDelete = () => {
    fetch(url, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
  };


  return (
    <div className="card">
      <h3>Страница просмотра</h3>
      <textarea rows="6" cols="50" value={form.content} readOnly={true} />

      <Link to={match.params.id + '/edit'}>
        <button className="button">Изменить</button>
      </Link>

      <Link className="button" to='/' onClick={handleDelete}>
        <button className="button">Удалить</button>
      </Link>

    </div>
  );
}
