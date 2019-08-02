import React from 'react'
import PropTypes from 'prop-types'
// import ItemModel from '../models/ItemModel'

function DropdownItem(props) {
    const { name, active } = props.item;

    const onClick = () => {
        props.onClick(props.item); // передаём объект
    }

    return active ? <li onClick={onClick} style={{ color: "#FF8C00" }}>{name}</li> : <li onClick={onClick}>{name}</li>
}

DropdownItem.propTypes = {
    // item: PropTypes.instanceOf(ItemModel).isRequired,
    onClick: PropTypes.func.isRequired,
}

export default DropdownItem