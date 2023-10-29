import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import FactInput from './components/FactInput';
import FactDisplay from './components/FactDisplay';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Star Wars Факты</h1>
        <FactInput />
        <FactDisplay />
      </div>
    </Provider>
  );
}

export default App;
