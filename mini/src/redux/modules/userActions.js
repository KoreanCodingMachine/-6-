import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const userLogin = createAsyncThunk(
  'user/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const response = await axios.post(
        'http://43.200.179.217:8080/api/member/login',
        { email, password },
        config
      );
      console.log(response);
      localStorage.setItem('access-token', response.headers.authorization);
      localStorage.setItem('refresh-token', response.headers.refreshToken);
      return response.headers;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const registerUser = createAsyncThunk(
  'user/register',
  async ({ email, password, nickname, gender }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      await axios.post(
        'http://43.200.179.217:8080/api/member/signup',
        { email, password, nickname, gender },
        config
      );
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const logoutUser = createAsyncThunk(
  'user/register',
  async (arg, { getState, rejectWithValue }) => {
    const { user } = getState();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.userToken}`,
        },
      };
      await axios.post('http://43.200.179.217:8080/api/member/logout', config);
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const existNickname = createAsyncThunk(
  'user/register',
  async ({ nickname }, { getState, rejectWithValue }) => {
    const { user } = getState();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.userToken}`,
        },
      };
      await axios.post(
        'http://43.200.179.217:8080/api/member/exist/nickname',
        { nickname },
        config
      );
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const existMemberId = createAsyncThunk(
  'user/register',
  async (email, { getState, rejectWithValue }) => {
    const { user } = getState();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.userToken}`,
        },
      };
      await axios.post(
        'http://43.200.179.217:8080/api/member/exist/memberId',
        { email },
        config
      );
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getUserDetails = createAsyncThunk(
  'user/getUserDetails',
  async (arg, { getState, rejectWithValue }) => {
    try {
      // get user data from store
      const { user } = getState();

      // configure authorization header with user's token
      const config = {
        headers: {
          Authorization: `Bearer ${user.userToken}`,
        },
      };

      const { data } = await axios.get(`/api/user/profile`, config);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
