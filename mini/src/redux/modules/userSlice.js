import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  userLogin,
  logoutUser,
  existNickname,
  existMemberId,
} from './userActions';

// initialize userToken from local storage
// accessToken , refreshToken
const userToken = localStorage.getItem('access-token')
  ? localStorage.getItem('access-token')
  : null;

const refreshToken = localStorage.getItem('refresh-token')
  ? localStorage.getItem('refresh-token')
  : null;

const initialState = {
  loading: false,
  userInfo: null,
  userToken, // isLogedIn값과 마찬가지 , 로그인한 사용자인지 아닌지 판별
  refreshToken,
  error: null,
  success: false,
  nickMsg: null, // 중복체크 메시지
  idMsg: null, // 중복체크 메시지
  nickErrorMsg: null, // 중복체크 닉네임 메시지
  idErrorMsg: null, // 중복체크 아이디 메시지
  duplicateSuccess: false, // 중복 감지 체크 (감지이면 true 아니면 false)
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // logout: (state) => {
    //   localStorage.removeItem('userToken'); // delete token from storage
    //   state.loading = false;
    //   state.userInfo = null;
    //   state.userToken = null;
    //   state.error = null;
    // },
  },
  extraReducers: {
    // login user
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload.data.data;
      localStorage.setItem('user-info', payload.data.data.nickname);
      state.userToken = payload.headers.authorization;
      state.refreshToken = payload.headers.refreshtoken;
      console.log(payload.headers.refreshToken);
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // register user
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true; // registration successful
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // lotout user
    [logoutUser.pending]: (state) => {
      state.loading = false;
      state.error = null;
    },
    [logoutUser.fulfilled]: (state, { payload }) => {
      localStorage.removeItem('access-token');
      localStorage.removeItem('refresh-token');
      localStorage.removeItem('user-info');
      state.loading = false;
      state.userInfo = payload;
      state.userToken = null;
      state.error = null;
    },
    [logoutUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // 닉네임 중복 체크
    [existNickname.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [existNickname.fulfilled]: (state, { payload }) => {
      state.loading = false;
      console.log(payload);
      state.nickMsg = payload.data.data;
      if (payload.data.data === null) {
        state.nickErrorMsg = payload.data.error.message;
      }
      state.duplicateSuccess = payload.data.success;
    },
    [existNickname.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // 아이디 중복 체크
    [existMemberId.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [existMemberId.fulfilled]: (state, { payload }) => {
      state.loading = false;
      console.log(payload);
      state.idMsg = payload.data.data;
      if (payload.data.data === null) {
        state.idErrorMsg = payload.data.error.message;
      }
      state.duplicateSuccess = payload.data.success;
    },
    [existMemberId.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
