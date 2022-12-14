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
            <p>์จ๋</p>
            <Weather className='date-text' />
            <p>๐ก๏ธ</p>
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
                  ๋ก๊ทธ์์
                </button>
                <button
                  onClick={() => {
                    navigate('/post');
                  }}
                >
                  ๊ธ ๋ฑ๋กํ๊ธฐ
                </button>
              </>
            ) : (
              <NavLink className='button' to='/login'>
                ๋ก๊ทธ์ธ
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
