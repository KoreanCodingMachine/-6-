import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  comment: [],
  isLoading: false,
  error: null,
};

// postId -> 메인글의 id => useParams의 값
// id -> 댓글의 순번 , 댓글 리스트의 id

// 메인페이지 글에 해당하는 댓글 가져오기
// payload -> postId
export const getCommentData = createAsyncThunk(
  'comment/getData',
  async (payload, thunkApi) => {
    try {
      const response = await axios.get(
        `http://localhost:5001/comment?postId=${payload}`
      );
      console.log(response);
      return thunkApi.fulfillWithValue(response.data);
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

// 댓글 등록
// payload -> comment,postId,Id
export const postCommentData = createAsyncThunk(
  'comment/postData',
  async (payload, thunkApi) => {
    try {
      const response = await axios.post(
        `http://localhost:5001/comment?postId=${payload.postId}`,
        payload
      );
      console.log(response);
      return thunkApi.fulfillWithValue(response.data);
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

// 댓글 수정
// payload -> 수정할 comment,commentId
export const putCommentData = createAsyncThunk(
  'comment/putData',
  async ({ id, comment }, thunkApi) => {
    try {
      const response = await axios.put(`http://localhost:5001/comment/${id}`, {
        id,
        comment,
      });
      console.log(response.data);
      return thunkApi.fulfillWithValue(response.data);
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

// 게시글 삭제
// payload-> 수정할 commentId -> id
export const deleteCommentData = createAsyncThunk(
  'comment/deleteData',
  async (arg, thunkApi) => {
    try {
      const response = await axios.delete(
        `http://localhost:5001/comment/${arg}`
      );
      console.log(response);
      console.log(arg);
      return thunkApi.fulfillWithValue(arg);
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

// {
//   "id":1,
//   "content":"내용",
//   "postId":1,
//   "like":false
// }

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: {
    [getCommentData.pending]: (state) => {
      state.isLoading = true;
    },
    [getCommentData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comment = action.payload;
    },
    [getCommentData.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [postCommentData.pending]: (state) => {
      state.isLoading = true;
    },
    [postCommentData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comment = [...state.comment, action.payload];
    },
    [postCommentData.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [putCommentData.pending]: (state) => {
      state.isLoading = true;
    },
    [putCommentData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comment = state.comment.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              content: action.payload.comment,
            }
          : item
      );
    },
    [putCommentData.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteCommentData.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteCommentData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comment = state.comment.filter(
        (item) => item.id !== action.payload
      );
    },
    [deleteCommentData.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = commentSlice.actions;
export default commentSlice.reducer;
