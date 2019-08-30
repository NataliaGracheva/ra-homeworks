import React from 'react';

export default function List(props) {
    const { users, onClick: handleUserClick } = props;

    return (
        <ul>
            {users.map(o => <li key={o.id} onClick={() => handleUserClick(o.id)}
                className={o.active ? 'active' : ''}>{o.name}</li>)}
        </ul>
    )
}