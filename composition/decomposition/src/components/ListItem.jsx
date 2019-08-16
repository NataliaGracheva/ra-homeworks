import React from 'react'

export default function ListItem(props) {
    return <li className={props.className}>{props.children}</li>;
}