// import { createSlice } from '@reduxjs/toolkit';

// // initialize userToken from local storage
// // accessToken , refreshToken
// const userToken = localStorage.getItem('access-token')
//   ? localStorage.getItem('access-token')
//   : null;

// const refreshToken = localStorage.getItem('refresh-token')
//   ? localStorage.getItem('refresh-token')
//   : null;

// const initialState = {
//   loading: false,
//   success: false,
//   error: null,
//   userInfo: null,
//   refreshToken,
//   userToken,
// };

// export const

// const heartSlice = createSlice({
//   name: 'heart',
//   initialState,
//   reducers: {
//     // logout: (state) => {
//     //   localStorage.removeItem('userToken'); // delete token from storage
//     //   state.loading = false;
//     //   state.userInfo = null;
//     //   state.userToken = null;
//     //   state.error = null;
//     // },
//   },
//   extraReducers: {
//     // login user
//     [userLogin.pending]: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     [userLogin.fulfilled]: (state, { payload }) => {
//       state.loading = false;
//       state.userInfo = payload;
//       state.userToken = payload.authorization;
//       state.refreshToken = payload.refreshToken;
//     },
//     [userLogin.rejected]: (state, { payload }) => {
//       state.loading = false;
//       state.error = payload;
//     },
//   },
// });

// export const {} = heartSlice.actions;

// export default heartSlice.reducer;
