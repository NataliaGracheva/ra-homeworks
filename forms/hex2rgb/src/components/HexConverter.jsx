import React, { useState } from 'react';

function HexConverter() {
    const [rgbColor, setRgbColor] = useState('');

    const convert = (hex) => {
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

        if (!result) {
            return "Ошибка!";
        }
        result.shift();
        return `rgb(${result.map(i => parseInt(i, 16)).join(', ')})`
    }

    const handleChange = evt => {
        // console.log(evt.target.value);
        let hex = evt.target.value;

        if (hex.length === 7) {
            // console.log(convert(evt.target.value));
            setRgbColor(convert(hex));
        }
    }

    return (
        <form style={{ backgroundColor: rgbColor }}>
            <input type="text" name="color" maxLength="7" placeholder="#000000" onChange={handleChange}></input>
            <div className="output">{rgbColor}</div>
        </form>
    )
}

export default HexConverter;