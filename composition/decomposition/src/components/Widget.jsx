import React from 'react'

export default function Widget(props) {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
}