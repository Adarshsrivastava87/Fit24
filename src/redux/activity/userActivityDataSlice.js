
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance';

export const monthlyData = createAsyncThunk('activity/monthlyData', async (credentials) => {
  const response = await axiosInstance.post('/login', credentials);
  return response.data;
});

export const weeklyData = createAsyncThunk('activity/weeklyData', async (userData) => {
  const response = await axiosInstance.post('/signup', userData);
  return response.data;
});

const authSlice = createSlice({
  name: 'activity',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(monthlyData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(monthlyData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(monthlyData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(weeklyData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(weeklyData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(weeklyData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
