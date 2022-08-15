import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import { registerUser } from '../redux/modules/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const { loading, error, userInfo, success } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [data, setData] = useState({
    email: '',
    password: '',
    rePassword: '',
    name: '',
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

  const onSubmitForm = (event) => {
    // event.preventDefault();

    if (data.password !== data.rePassword) {
      alert('Password mismatch');
      return;
    }
    data.email = data.email.toLowerCase();
    dispatch(
      registerUser({
        email: data.email,
        password: data.password,
        rePassword: data.rePassword,
        name: data.name,
        gender: data.gender,
      })
    );
  };

  // useEffect(() => {
  //   if (success) navigate('/login');
  // }, [navigate]);

  return (
    <WrapperContainer>
      <Form onSubmit={onSubmitForm}>
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
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
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
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
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
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>이름</Form.Label>
          <Form.Control type='text' size='lg' placeholder='이름' />
        </Form.Group>
        <div className='select'>
          <input
            type='radio'
            id='select'
            name='gender'
            value='male'
            onChange={onChangeHandler}
          />
          <label htmlFor='select'>남성</label>
          <input
            type='radio'
            id='select2'
            name='gender'
            value='female'
            onChange={onChangeHandler}
          />
          <label htmlFor='select2'>여성</label>
        </div>
        <FormBtn variant='outline-success' disabled={loading}>
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
  }
`;
