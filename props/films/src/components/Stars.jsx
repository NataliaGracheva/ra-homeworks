import React from 'react';
import Star from '../components/Star';
import shortid from 'shortid';
import PropTypes from 'prop-types';

function Stars({ count }) {
    if ((typeof count !== 'number') || (count < 1) || (count > 5)) {
        return null;
    }

    return (
        <ul>
            {[...Array(Math.round(count))].map(star => <li key={shortid.generate()}><Star /></li>)}
        </ul>
    );
}

Stars.defaultProps = {
    count: 0
};

Stars.propTypes = {
    count: PropTypes.number
};

export default Stars;