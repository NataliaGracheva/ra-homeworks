import React from 'react';
import Message from '../components/Message';
import Response from '../components/Response';
import Typing from '../components/Typing';
import PropTypes from 'prop-types';

function MessageHistory({ list }) {

    return (
        <ul>
            {list.map(message =>
                message.type === 'message' ? <Message key={message.id} message={message} /> :
                    (message.type === 'response' ? <Response key={message.id} message={message} /> :
                        <Typing key={message.id} message={message} />)
            )}
        </ul>
    );
}

MessageHistory.propTypes = {
    list: PropTypes.array.isRequired,
};

export default MessageHistory;