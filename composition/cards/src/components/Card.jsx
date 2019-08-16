import React from 'react';

function Card(props) {

    return (

        <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
                {props.children}
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href={props.href} className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Card;