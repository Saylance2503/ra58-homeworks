import { createSlice } from '@reduxjs/toolkit';

const factsSlice = createSlice({
    name: 'facts',
    initialState: 1,
    reducers: {
        setNumberOfFacts: (state, action) => {
            return action.payload;
        },
    },
});

export const { setNumberOfFacts } = factsSlice.actions;
export default factsSlice.reducer;
