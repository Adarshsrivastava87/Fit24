import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser } from 'src/api/authApi';

export const loginMethod = createAsyncThunk(
  'user/loginUser',
  async (credentials, thunkAPI) => {
    const response = await loginUser(credentials);
    return response.data;
  }
);

const userSlice = createSlice({
  name: 'login',
  initialState: {
    userData: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    logoutUser: (state) => {
      state.userData = null;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;

// async function fakeLoginApi(credentials) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (credentials.username === 'user' && credentials.password === 'pass') {
//         resolve({ data: { id: 1, name: 'John Doe', email: 'john@example.com' } });
//       } else {
//         reject(new Error('Invalid username or password'));
//       }
//     }, 1000);
//   });
// }