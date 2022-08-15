// features/user/userSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// {
//     "memberId": "아이디",
//     "password": "패스워드",
//     "nickname": "닉네임",
//     "gender": "male"
//   }

// 회원가입 -> 서버로 post -> 서버 DB에 저장
export const registerUser = createAsyncThunk(
  'user/register',
  async ({ email, password, rePassword, name, gender }, thunkApi) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await axios.post(
        `http://localhost:5001/register`,
        { email, password, rePassword, name, gender },
        config
      );
    } catch (error) {
      if (error.response && error.response.data.message) {
        return thunkApi.rejectWithValue(error.response.data.message);
      } else {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  }
);

// 로그인
// 로그인 요청 -> response의 data에 access토큰을 받아옴 -> 로컬 스토리지에 저장
export const loginUser = createAsyncThunk(
  'user/login',
  async ({ email, password }, thunkApi) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          // token access token , refresh token
        },
      };
      const { data } = await axios.post(
        `http://localhost:5001/login`,
        { email, password },
        config
      );

      localStorage.setItem('userToken', data.userToken);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return thunkApi.rejectWithValue(error.response.data.message);
      } else {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  }
);

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null;

const initialState = {
  loading: false,
  userInfo: null, // for user object
  userToken, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('userToken');
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
    },
  },
  extraReducers: {
    [registerUser.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
    },
    [registerUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [loginUser.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      state.userToken = action.payload.userToken;
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
