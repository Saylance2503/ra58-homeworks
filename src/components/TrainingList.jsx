import React from 'react';

function TrainingList({ trainings, onDeleteTraining }) {
    return (
        <ul>
            {trainings.map((training, index) => (
                <li key={index}>
                    {training.date} - {training.distance} км
                    <button onClick={() => onDeleteTraining(training)}>✘</button>
                </li>
            ))}
        </ul>
    );
}

export default TrainingList;
