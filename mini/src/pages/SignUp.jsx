import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import { registerUser } from '../redux/modules/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { existNickname, existMemberId } from '../redux/modules/userActions';

const SignUp = () => {
  const { success } = useSelector((state) => state.user);

  const idMsg = useSelector((state) => state.user.idMsg);
  const nickMsg = useSelector((state) => state.user.nickMsg);

  const idErrorMessage = useSelector((state) => state.user.idErrorMsg);
  const nickErrorMessage = useSelector((state) => state.user.nickErrorMsg);

  const duplicateSuccess = useSelector((state) => state.user.duplicateSuccess);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [data, setData] = useState({
    email: '',
    password: '',
    rePassword: '',
    nickname: '',
    gender: '',
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  useEffect(() => {
    if (success) navigate('/login');
  }, [navigate, success]);

  // const onSubmitForm = (event) => {
  //   event.preventDefault();

  //   if (data.password !== data.rePassword) {
  //     alert('Password mismatch');
  //     return;
  //   }
  //   // transform email string to lowercase to avoid case sensitivity issues in login
  //   data.email = data.email.toLowerCase();
  //   dispatch(
  //     registerUser({
  //       email: data.email,
  //       password: data.password,
  //       nickname: data.nickname,
  //       gender: data.gender,
  //     })
  //   );
  // };

  // useEffect(() => {
  //   if (success) navigate('/login');
  // }, [navigate]);

  return (
    <WrapperContainer>
      <Form>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>아이디</Form.Label>
          <Form.Control
            type='email'
            size='lg'
            placeholder='아이디를 입력하세요'
            name='email'
            value={data.email}
            onChange={onChangeHandler}
          />
          <button
            type='button'
            onClick={() => {
              dispatch(existMemberId({ email: data.email }));
            }}
          >
            아이디 중복체크
          </button>
          {duplicateSuccess === true ? (
            idMsg === null ? null : (
              <p className='msg'>{idMsg}</p>
            )
          ) : idErrorMessage === null ? null : (
            <p className='error'>{idErrorMessage}</p>
          )}
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput2'>
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            type='text'
            size='lg'
            placeholder='비밀번호를 입력하세요'
            name='password'
            value={data.password}
            onChange={onChangeHandler}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput3'>
          <Form.Label>비밀번호 확인</Form.Label>
          <Form.Control
            type='text'
            size='lg'
            placeholder='비밀번호 확인'
            name='rePassword'
            value={data.rePassword}
            onChange={onChangeHandler}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput4'>
          <Form.Label>닉네임</Form.Label>
          <Form.Control
            type='text'
            size='lg'
            placeholder='닉네임'
            name='nickname'
            value={data.nickname}
            onChange={onChangeHandler}
          />
          <button
            type='button'
            onClick={() => {
              dispatch(existNickname({ nickname: data.nickname }));
            }}
          >
            닉네임 중복체크
          </button>
          {duplicateSuccess === true ? (
            nickMsg === null ? null : (
              <p className='msg'>{nickMsg}</p>
            )
          ) : nickErrorMessage === null ? null : (
            <p className='error'>{nickErrorMessage}</p>
          )}
        </Form.Group>
        <div className='select'>
          <input
            type='radio'
            id='select'
            name='gender'
            value='MALE'
            onChange={onChangeHandler}
          />
          <label htmlFor='select'>남성</label>
          <input
            type='radio'
            id='select2'
            name='gender'
            value='FEMALE'
            onChange={onChangeHandler}
          />
          <label htmlFor='select2'>여성</label>
        </div>
        <FormBtn
          type='button'
          variant='outline-success'
          onClick={() => {
            if (data.password !== data.rePassword) {
              alert('Password mismatch');
              return;
            }
            // transform email string to lowercase to avoid case sensitivity issues in login
            data.email = data.email.toLowerCase();
            dispatch(
              registerUser({
                email: data.email,
                nickname: data.nickname,
                password: data.password,
                gender: data.gender,
              })
            );
          }}
        >
          회원가입
        </FormBtn>
      </Form>
    </WrapperContainer>
  );
};

export default SignUp;

const FormBtn = styled(Button)`
  display: block;
  margin: 0 auto;
  width: 50%;
`;

const WrapperContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  Form {
    width: 60%;
    .select {
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
    }
    .msg {
      color: blue;
    }
    .error {
      color: red;
    }
  }
`;
