import { createSlice } from '@reduxjs/toolkit';

const factsSlice = createSlice({
    name: 'facts',
    initialState: [],
    reducers: {
        setNumberOfFacts: (state, action) => {
            state.length = action.payload;
        },
    },
});

export const { setNumberOfFacts } = factsSlice.actions;
export default factsSlice.reducer;
