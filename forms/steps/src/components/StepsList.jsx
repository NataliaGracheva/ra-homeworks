import React from 'react';
import StepsListItem from '../components/StepsListItem';

function StepsList(props) {
    const { stepsList, onRemove: handleRemove } = props;

    return (
        <table>
            <thead>
                <tr>
                    <td>Дата</td>
                    <td>Пройдено км</td>
                    <td className="third-col">Действия</td>
                </tr>
            </thead>
            <tbody>
                {stepsList.map(o => <StepsListItem key={o.id} stepsInfo={o}
                    onRemove={handleRemove} />)}
            </tbody>
        </table>
    );
}

export default StepsList;