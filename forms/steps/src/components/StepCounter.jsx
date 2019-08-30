import React, { useState } from 'react';
import StepsAddForm from '../components/StepsAddForm';
import StepsList from '../components/StepsList';
import StepsInfoModel from '../models/StepsInfoModel';

function StepCounter(props) {
    const [stepsList, setStepsList] = useState([]);

    const handleAdd = stepsInfo => {
        setStepsList(prevStepsList => {
            const existent = prevStepsList.find(o => o.date === stepsInfo.date);
            if (existent === undefined) {
                // значит нет шага с такой датой, просто добавляем
                return [...prevStepsList, stepsInfo];
            }

            // значит есть шаг с такой датой
            return prevStepsList.map(o => {
                if (o.id !== existent.id) {
                    return o;
                }

                // это тот шаг, который нужно обновить
                return new StepsInfoModel(o.id, o.date, o.distance + stepsInfo.distance);
            })

        });
    }

    const handleRemove = id => {
        setStepsList(prevStepsList => prevStepsList.filter(o => o.id !== id));
    };

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