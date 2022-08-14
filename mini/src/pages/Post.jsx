import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { postData } from '../redux/modules/postSlice';
import { useNavigate, useParams } from 'react-router-dom';

const Post = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  // 제목(title) , 이미지(imgUrl) , 내용(content) , 작성자(nickname)
  // img -> 이미지 전송 어떻게 할지 고민 , 작성자 -> 로그인한 유저 정보일것임으로 로그인 후 구현
  // id는 따로 저장하지 않아도 다음 id로 자동 설정된다.
  const [data, setData] = useState({
    title: '',
    content: '',
    img: '',
    nickname: '',
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <Container className='mt-5'>
      <Form>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>제목</Form.Label>
          <Form.Control
            type='email'
            placeholder='제목을 입력하세요'
            value={data.title}
            onChange={onChangeHandler}
            name='title'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>작성 날짜 , 시간</Form.Label>
          <Form.Control type='email' placeholder='작성날짜,시간' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>이미지</Form.Label>
          <Form.Control
            type='email'
            placeholder='이미지 url'
            value={data.img}
            onChange={onChangeHandler}
            name='img'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>내용</Form.Label>
          <Form.Control
            as='textarea'
            rows={10}
            value={data.content}
            onChange={onChangeHandler}
            name='content'
          />
        </Form.Group>
        <FormBtn
          variant='outline-success'
          onClick={() => {
            dispatch(postData(data));
            navigate('/');
          }}
        >
          등록하기
        </FormBtn>
        <FormBtn
          className='mt-3'
          variant='outline-warning'
          onClick={() => {
            navigate('/');
          }}
        >
          홈으로
        </FormBtn>
      </Form>
    </Container>
  );
};

export default Post;

const FormBtn = styled(Button)`
  display: block;
  margin: 0 auto;
  width: 50%;
`;
