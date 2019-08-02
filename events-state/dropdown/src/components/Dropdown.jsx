import React, { useState } from 'react'
import DropdownList from '../components/DropdownList'

function Dropdown() {
    const [visibility, setVisibility] = useState(false);
    const menuItems = ["Profile Information", "Change Password", "Become PRO", "Help", "Log Out"];
    const handleClick = evt => setVisibility(prevState => !prevState)

    return (
        <div>
            <button onClick={handleClick}>ACCOUNT SETTINGS</button>
            {visibility ? <DropdownList list={menuItems} /> : null}
        </div>
    )
}

export default Dropdown