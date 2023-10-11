import React, { useState } from 'react';

function HexToRgbConverter() {
    const [hexColor, setHexColor] = useState('');
    const [rgbColor, setRgbColor] = useState('');
    const [error, setError] = useState('');

    const handleHexChange = (e) => {
        const inputHex = e.target.value;

        setHexColor(inputHex);

        if (inputHex.length === 7) {
            if (inputHex.match(/^#[0-9A-Fa-f]{6}$/)) {
                setError('');
                const r = parseInt(inputHex.slice(1, 3), 16);
                const g = parseInt(inputHex.slice(3, 5), 16);
                const b = parseInt(inputHex.slice(5, 7), 16);
                setRgbColor(`RGB(${r}, ${g}, ${b})`);
                document.body.style.backgroundColor = inputHex;
            } else {
                setError('Ошибка!');
                setRgbColor('');
            }
        } else {
            setError('');
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
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {rgbColor && <p>{rgbColor}</p>}
        </div>
    );
}

export default HexToRgbConverter;
