import React from 'react';
import PropTypes from 'prop-types';
import StepsInfoModel from '../models/StepsInfoModel';

function StepsListItem(props) {
    const { stepsInfo, onRemove: handleRemove } = props;

    return (
        <React.Fragment>
            <tr>
                <td>{stepsInfo.date}</td>
                <td>{stepsInfo.distance}</td>
                <td onClick={() => handleRemove(stepsInfo.id)} className="third-col">
                    <span role="img" aria-label="delete">&#10060;</span>
                </td>
            </tr>
        </React.Fragment>
    );
}

StepsListItem.propTypes = {
    stepsInfo: PropTypes.instanceOf(StepsInfoModel).isRequired,
    onRemove: PropTypes.func.isRequired,
}

export default StepsListItem;
