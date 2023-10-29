import { configureStore } from '@reduxjs/toolkit';
import factsReducer from './reducers/facts';

const store = configureStore({
    reducer: {
        facts: factsReducer,
    },
});

export default store;
