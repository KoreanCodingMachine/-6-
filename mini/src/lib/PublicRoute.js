import React from 'react';
import { Route } from 'react-router-dom';
import isAdmin from './isAdmin';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    // 로그인 된 상태(관리자)이면서 restricted가 true일 때, 메인 페이지로 이동된다.
    // 이는 이미 로그인한 유저가 다시 로그인 페이지에 접속하는 상황으로 예를 들 수 있다.
    // 비로그인 상태의 유저일 때는 해당 컴포넌트가 띄워진다.
    <Route
      {...rest}
      render={(props) =>
        isAdmin() && restricted ? <path to='/' /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
