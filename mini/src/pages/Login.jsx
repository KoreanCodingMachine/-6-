import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../redux/modules/userActions';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { loading, error, userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  // const onSubmitForm = () => {
  //   dispatch(userLogin({ email: email, password: password }));
  // };

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
            value={email}
            onChange={onChangeEmail}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput2'>
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            type='password'
            size='lg'
            placeholder='비밀번호를 입력하세요'
            name='password'
            value={password}
            onChange={onChangePassword}
          />
        </Form.Group>
        <FormBtn
          variant='outline-success'
          onClick={() => {
            dispatch(userLogin({ email: email, password: password }));
          }}
        >
          로그인
        </FormBtn>
        <FormBtn className='mt-3' variant='outline-warning'>
          카카오 로그인
        </FormBtn>
      </Form>
    </WrapperContainer>
  );
};

export default Login;

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
  }
`;
