import React, { useState } from 'react';

function TrainingForm({ onAddTraining }) {
    const [date, setDate] = useState('');
    const [distance, setDistance] = useState('');

    const handleAddTraining = (e) => {
        e.preventDefault();

        if (!date || !distance) return;

        const newTraining = {
            date,
            distance: parseFloat(distance),
        };

        onAddTraining(newTraining);
        setDate('');
        setDistance('');
    };

    return (
        <form onSubmit={handleAddTraining}>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <input
                type="number"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
            />
            <button type="submit">Ok</button>
        </form>
    );
}

export default TrainingForm;
