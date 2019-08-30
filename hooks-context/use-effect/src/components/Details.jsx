import React, { useEffect, useState } from 'react';

export default function Details({ info }) {
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    console.log({ info });

    useEffect(() => {
        setIsLoading(true);
        fetch(`${process.env.REACT_APP_USERS_URL}/${info.id}.json`)
            .then(response => response.json())
            .then(response => setUser(response))
            .then(() => setIsLoading(false));
    }, [info.id]);

    return (
        <div className="details">
            {isLoading ? <p>Loading...</p> :

                <ul>
                    <li><img src={user.avatar} alt={user.name + " photo"}></img></li>
                    <li><strong>{user.name}</strong></li>
                    <li>city: {user.details.city}</li>
                    <li>company: {user.details.company}</li>
                    <li>position: {user.details.position}</li>
                </ul>
            }
        </div>
    )
}
