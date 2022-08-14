import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const SignUp = () => {
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
            type='text'
            size='lg'
            placeholder='비밀번호를 입력하세요'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>비밀번호 확인</Form.Label>
          <Form.Control type='text' size='lg' placeholder='비밀번호 확인' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>이름</Form.Label>
          <Form.Control type='text' size='lg' placeholder='비밀번호 확인' />
        </Form.Group>
        <div class='select'>
          <input type='radio' id='select' name='shop' />
          <label for='select'>남성</label>
          <input type='radio' id='select2' name='shop' />
          <label for='select2'>여성</label>
        </div>
        <FormBtn variant='outline-success'>회원가입</FormBtn>
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
