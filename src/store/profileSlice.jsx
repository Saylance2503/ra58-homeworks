import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        photos: [],
    },
    reducers: {
        addPhoto: (state, action) => {
            state.photos.unshift(action.payload);
        },
    },
});

export const { addPhoto } = profileSlice.actions;
export default profileSlice.reducer;