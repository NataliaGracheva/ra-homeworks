import React, { useState } from 'react'
import nanoid from 'nanoid';

function WatchAddForm(props) {
  const { onAdd } = props;
  const [form, setForm] = useState({ city: '', timeZone: '' });

  const handleChange = evt => {
    const { name, value } = evt.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  }

  const handleSubmit = evt => {
    evt.preventDefault();

    const watchInfo = {
      id: nanoid(),
      city: form.city,
      timeZone: +form.timeZone
    }

    onAdd(watchInfo);
    setForm({ city: '', timeZone: '' });
    console.log(watchInfo);//
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="city">Название</label>
        <label htmlFor="timeZone">Временная зона</label>

      </div>
      <input name="city" type="text" value={form.city} onChange={handleChange} />
      <input name="timeZone" type="number" min="0" value={form.timeZone} onChange={handleChange} />
      <button type="submit">Добавить</button>
    </form>);
}

export default WatchAddForm