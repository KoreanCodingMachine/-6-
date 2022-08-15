import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Weather from './Weather';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { logout } from '../../redux/modules/userSlice';

const Header = () => {
  const { userInfo, userToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <section>
        <div className='temp'>
          <p>온도</p>
          <Weather className='date-text' />
          <p>아이콘</p>
        </div>
        <div className='btn'>
          {userInfo ? (
            <button
              className='button'
              onClick={() => {
                dispatch(logout());
              }}
            >
              로그아웃
            </button>
          ) : (
            <NavLink className='button' to='/login'>
              로그인
            </NavLink>
          )}
        </div>
      </section>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  section {
    display: flex;
    background-color: yellow;
    flex: 0;
    justify-content: flex-start;
    padding-right: 1rem;
    gap: 10px;
    align-items: center;
    .date-text {
      font-weight: bold;
      align-items: center;
    }
    .temp {
      display: flex;
      gap: 10px;
    }
    .btn {
      position: absolute;
      line-height: auto;
      right: 0;
    }
  }
`;
