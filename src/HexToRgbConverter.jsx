import React, { useState } from 'react';

function HexToRgbConverter() {
    const [hexColor, setHexColor] = useState('');
    const [rgbColor, setRgbColor] = useState(null);

    const handleHexChange = (e) => {
        const inputHex = e.target.value;

        setHexColor(inputHex);

        if (inputHex.match(/^#[0-9A-Fa-f]*$/)) {
            if (inputHex.length >= 7 && inputHex.length <= 9) {
                if (inputHex.length === 7) {
                    const r = parseInt(inputHex.slice(1, 3), 16);
                    const g = parseInt(inputHex.slice(3, 5), 16);
                    const b = parseInt(inputHex.slice(5, 7), 16);
                    setRgbColor(`RGB(${r}, ${g}, ${b})`);
                    document.body.style.backgroundColor = inputHex;
                } else {
                    setRgbColor('');
                }
            } else {
                setRgbColor('');
            }
        } else {
            setRgbColor('');
        }
    }

    return (
        <div>
            <input
                type="text"
                value={hexColor}
                onChange={handleHexChange}
            />
            {rgbColor !== null ? <p>{rgbColor}</p> : null}
            {rgbColor === '' && <p style={{ color: 'red' }}>Ошибка!</p>}
        </div>
    );
}

export default HexToRgbConverter;
