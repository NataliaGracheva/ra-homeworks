import React, { useState } from 'react'
import DropdownItem from '../components/DropdownItem'
import ItemModel from '../models/ItemModel'

function DropdownList({ list }) {
    const [items, setItems] = useState(list.map((item, i) => new ItemModel(i, item)));
    // console.log(items);

    const onItemClick = item => {
        // console.log(item);
        setItems(prevItems => prevItems.map(o => {

            if (o.id === item.id) {
                return { ...o, active: !o.active };
            }
            return { ...o, active: false };
        }));
    }

    return (
        <ul>
            {items.map(o => <DropdownItem key={o.id} item={o} onClick={onItemClick} />)}
        </ul>

    );
}

export default DropdownList