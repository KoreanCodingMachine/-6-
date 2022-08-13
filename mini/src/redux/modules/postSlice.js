import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  post: [],
  isLoading: false,
  error: null,
};

// 게시글 가져오기
// payload -> 전체 글 데이터
export const getData = createAsyncThunk(
  'post/getData',
  async (payload, thunkApi) => {
    try {
      const response = await axios.get('http://localhost:5001/post');
      console.log(response);
      return thunkApi.fulfillWithValue(response.data);
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

// 게시글 등록
// payload -> title,nickname,content,url,id
export const postData = createAsyncThunk(
  'post/postData',
  async (payload, thunkApi) => {
    try {
      const response = await axios.post('http://localhost:5001/post', payload);
      console.log(response);
      return thunkApi.fulfillWithValue(response.data);
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

// 게시글 수정
// payload -> 수정할 게시글 데이터(title,content,url,id)
export const patchData = createAsyncThunk(
  'post/patchData',
  async (payload, thunkApi) => {
    try {
      const response = await axios.patch(
        `http://localhost:5001/post/${payload.id}`
      );
      console.log(response);
      return thunkApi.fulfillWithValue(payload);
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

// 게시글 삭제
// payload-> 게시글 id
export const deleteData = createAsyncThunk(
  'post/deleteData',
  async (payload, thunkApi) => {
    try {
      const response = await axios.delete(
        `http://localhost:5001/post/${payload}`
      );
      console.log(response);
      return thunkApi.fulfillWithValue(payload);
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: {
    [getData.pending]: (state) => {
      state.isLoading = true;
    },
    [getData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    },
    [getData.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [postData.pending]: (state) => {
      state.isLoading = true;
    },
    [postData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = [...state.post, action.payload];
    },
    [postData.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [patchData.pending]: (state) => {
      state.isLoading = true;
    },
    [patchData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = state.post.map((item) =>
        item.id === action.payload.id
          ? {
              ...state,
              title: action.payload.title,
              content: action.payload.content,
              imgUrl: action.payload.imgUrl,
            }
          : item
      );
    },
    [patchData.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteData.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = state.post.filter((item) => item.id !== action.payload);
    },
    [deleteData.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
