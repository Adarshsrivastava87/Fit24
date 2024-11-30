// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { getUserFitnessData } from 'src/api/healthApi';

// const fetchUserDetails = createAsyncThunk(
//   'user/fetchUserDetails',
//   async ({ id, typeArray }) => {
//     const userAllData = await Promise.all(
//       typeArray.map(async (value) => {
//         const data = await getUserFitnessData(id, value);
//         return { [value]: data };
//       })
//     );
//     const newObject = userAllData.reduce((acc, item) => {
//       return { ...acc, ...item };
//     }, {});

//     return newObject;
//   }
// );

// const userSlice = createSlice({
//   name: 'user',
//   initialState: {
//     userDetails: {},
//     status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
//     error: null
//   },
//   reducers: {
//     // Define any synchronous reducers here if needed
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUserDetails.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchUserDetails.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.userDetails = action.payload;
//       })
//       .addCase(fetchUserDetails.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   }
// });

// export const { actions, reducer } = userSlice;
// export { fetchUserDetails };