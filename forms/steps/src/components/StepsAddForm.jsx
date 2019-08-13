import React, { useState } from 'react';
import StepsInfoModel from '../models/StepsInfoModel';
import nanoid from 'nanoid';

function StepsAddForm(props) {
    const { onAdd } = props;
    const [form, setForm] = useState({ date: '', distance: '' });

    const handleChange = evt => {
        const { name, value } = evt.target;
        setForm(prevForm => ({ ...prevForm, [name]: value }));
    }

    const handleSubmit = evt => {
        evt.preventDefault();

        const stepsInfo = new StepsInfoModel(nanoid(), form.date, form.distance);
        onAdd(stepsInfo);
        setForm({ date: '', distance: '' });
        console.log(form);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="date">Дата</label>
                <label htmlFor="distance">Пройдено км</label>
            </div>
            <input name="date" type="date" min="1970-01-01" value={form.date} onChange={handleChange} />
            <input name="distance" type="number" min="1" value={form.distance} onChange={handleChange} />
            <button type="submit">OK</button>
        </form>
    );
}

export default StepsAddForm;