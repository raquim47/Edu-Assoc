import { configureStore } from '@reduxjs/toolkit';
import firebaseReducer from './firebase-slice';

const store = configureStore({
  reducer: {
    firebase: firebaseReducer,
  },
});

export default store;
