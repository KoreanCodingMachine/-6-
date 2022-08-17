import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const testApi = 'http://43.200.179.217:8080';
const Api = 'http://3.39.190.253';

export const userLogin = createAsyncThunk(
  'user/login',
  async ({ email, password }, { getState, rejectWithValue }) => {
    const { user } = getState();
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
      localStorage.setItem('access-token', response.headers.authorization);
      localStorage.setItem('refresh-token', response.headers.refreshtoken);
      console.log(response);
      return response;
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
        `${Api}/api/member/signup`,
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
  'user/logout',
  async (arg, { getState, rejectWithValue }) => {
    const { user } = getState();
    console.log(user);
    try {
      await axios.post(
        'http://43.200.179.217:8080/api/member/logout',
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: user.userToken,
            RefreshToken: user.refreshToken,
          },
        }
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

export const existNickname = createAsyncThunk(
  'user/existNickname',
  async ({ nickname }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await axios.post(
        'http://43.200.179.217:8080/api/member/exist/nickname',
        { nickname },
        config
      );
      console.log(response);
      return response;
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
  'user/existMemberId',
  async ({ email }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await axios.post(
        'http://43.200.179.217:8080/api/member/exist/memberId',
        { email },
        config
      );
      console.log(response);
      return response;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
