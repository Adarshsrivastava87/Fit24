
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
// import { reducer as userReducer } from './userDetails'; // Adjust the path accordingly


const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
