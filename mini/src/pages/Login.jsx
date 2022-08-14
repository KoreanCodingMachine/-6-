import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const Login = () => {
  return (
    <WrapperContainer>
      <Form>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>아이디</Form.Label>
          <Form.Control
            type='email'
            size='lg'
            placeholder='아이디를 입력하세요'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            type='password'
            size='lg'
            placeholder='비밀번호를 입력하세요'
          />
        </Form.Group>
        <FormBtn variant='outline-success'>로그인</FormBtn>
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
