import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Weather from './Weather';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/modules/userActions';

const Header = () => {
  const { userInfo, userToken } = useSelector((state) => state.user);
  const data = localStorage.getItem('user-info');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        <section>
          <div className='temp mt-3'>
            <p>온도</p>
            <Weather className='date-text' />
            <p>🌡️</p>
          </div>
          <div className='btn'>
            {data ? (
              <>
                <button
                  className='button m-lg-2'
                  onClick={() => {
                    dispatch(logoutUser());
                  }}
                >
                  로그아웃
                </button>
                <button
                  onClick={() => {
                    navigate('/post');
                  }}
                >
                  글 등록하기
                </button>
              </>
            ) : (
              <NavLink className='button' to='/login'>
                로그인
              </NavLink>
            )}
          </div>
        </section>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Wrapper = styled.div`
  section {
    display: flex;
    flex-grow: 1;
    justify-content: flex-start;
    padding-right: 1rem;
    gap: 10px;
    align-items: center;
    .date-text {
      font-weight: bold;
      align-items: center;
    }
    .temp {
      position: absolute;
      font-size: 36px;
      top: 20px;
      left: 30px;
      display: flex;
      gap: 10px;
    }
    .btn {
      position: absolute;
      top: 20px;
      right: 30px;
    }
  }
`;
