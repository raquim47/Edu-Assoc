import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { init: false, user: null },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.init = true;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
