import React, { useState } from 'react';
import StepsAddForm from '../components/StepsAddForm';
import StepsList from '../components/StepsList';

function StepCounter(props) {
    const [stepsList, setStepsList] = useState([]);

    const handleAdd = stepsInfo => { setStepsList(prevStepsList => [...prevStepsList, stepsInfo]); }
    const handleRemove = id => {
        setStepsList(prevStepsList => prevStepsList.filter(o => o.id !== id));
    }

    const sortedList = stepsList.sort(function (a, b) {
        var dateA = new Date(a.date), dateB = new Date(b.date);
        return dateA - dateB; //сортировка по возрастающей дате
    });

    return (
        <div className="container">
            <StepsAddForm onAdd={handleAdd} />
            <StepsList stepsList={sortedList} onRemove={handleRemove} />
        </div>
    );
}

export default StepCounter;