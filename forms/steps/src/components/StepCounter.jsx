import React, { useState } from 'react';
import StepsAddForm from '../components/StepsAddForm';
import StepsList from '../components/StepsList';

function StepCounter(props) {
    const [stepsList, setStepsList] = useState([]);

    const handleAdd = stepsInfo => { setStepsList(prevStepsList => [...prevStepsList, stepsInfo]); }

    const arr = [];
    stepsList.forEach(o => {
        let found = false;
        console.log(o);
        arr.forEach(el => {
            console.log(el)
            if (el && el.date === o.date) {
                el.distance = +el.distance + +o.distance;
                found = true;
            }
        });

        if (!found) {
            arr.push(o);
        }
    });
    console.log(arr);


    const handleRemove = id => {
        setStepsList(prevStepsList => prevStepsList.filter(o => o.id !== id));
    };

    const sortedList = arr.sort(function (a, b) {
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