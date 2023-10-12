import React, { useState } from 'react';
import TrainingForm from './components/TrainingForm';
import TrainingList from './components/TrainingList';
import './App.css';

function App() {
  const [trainings, setTrainings] = useState([]);

  const addTraining = (newTraining) => {
    const existingTrainingIndex = trainings.findIndex((t) => t.date === newTraining.date);

    if (existingTrainingIndex !== -1) {
      const updatedTrainings = [...trainings];
      updatedTrainings[existingTrainingIndex].distance += newTraining.distance;
      setTrainings(updatedTrainings.sort((a, b) => new Date(b.date) - new Date(a.date)));
    } else {
      setTrainings([newTraining, ...trainings].sort((a, b) => new Date(b.date) - new Date(a.date)));
    }
  };

  const deleteTraining = (training) => {
    const updatedTrainings = trainings.filter((t) => t.date !== training.date);
    setTrainings(updatedTrainings.sort((a, b) => new Date(b.date) - new Date(a.date)));
  };

  return (
    <div className="container">
      <div className="form-container">
        <TrainingForm onAddTraining={addTraining} />
      </div>
      <TrainingList trainings={trainings} onDeleteTraining={deleteTraining} />
    </div>
  );
}

export default App;
