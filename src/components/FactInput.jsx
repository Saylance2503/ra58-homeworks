import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setNumberOfFacts } from '../actions/facts';

const FactInput = () => {
    const dispatch = useDispatch();
    const [numberOfFactsInput, setNumberOfFactsInput] = useState(1);

    const handleInputChange = (event) => {
        const value = parseInt(event.target.value, 10);
        if (!isNaN(value) && value >= 1 && value <= 5) {
            setNumberOfFactsInput(value);
        }
    };

    const handleFetchFacts = () => {
        dispatch(setNumberOfFacts(numberOfFactsInput));
    };

    return (
        <div>
            <input
                type="number"
                min={1}
                max={5}
                value={numberOfFactsInput}
                onChange={handleInputChange}
            />
            <button onClick={handleFetchFacts}>Получить факты</button>
        </div>
    );
};

export default FactInput;
