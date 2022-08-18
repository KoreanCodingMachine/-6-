import React from 'react';
import { Route } from 'react-router-dom';
import isAdmin from './isAdmin';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    // 로그인된 상태이면 해당 컴포넌트를 그대로 띄우고
    // 비로그인 상태이면 로그인 페이지로 이동한다.
    // 로그인 페이지로 redirect전 alert을 띄운다.
    <Route
      {...rest}
      render={(props) => {
        !isAdmin() &&
          alert('접근 권한이 없습니다. 로그인 후 다시 시도하십시오.');
        return isAdmin() ? <Component {...props} /> : <path to='/login' />;
      }}
    />
  );
};

export default PrivateRoute;
