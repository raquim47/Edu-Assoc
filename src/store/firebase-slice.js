import { createSlice } from '@reduxjs/toolkit';

const firebaseSlice = createSlice({
  name: 'firebase',
  initialState: { initFirebase: false, isLoggedIn: false },
  reducers: {
    setInitFirebase: (state) => {
      state.initFirebase = true;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});
export const firebaseActions = firebaseSlice.actions;
export default firebaseSlice.reducer;
