import { combineReducers, configureStore } from '@reduxjs/toolkit';
import comment from './modules/commentSlice';
import thunk from 'redux-thunk';
import user from './modules/userSlice';
import postSlice from './modules/postSlice';
const middlewares = [thunk];

// 리듀서 통합
const rootReducer = combineReducers({
  postSlice,
  comment,
  user,
  devTools: false, // 배포환경 리덕스 데브툴즈 안보이게 설정
});

// 스토어 연결
const store = configureStore({
  reducer: rootReducer,

  middleware: [...middlewares],
});

export default store;
