import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCommentData,
  postCommentData,
  deleteCommentData,
  putCommentData,
} from '../../redux/modules/commentSlice';

const Comment = ({ id }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.comment.comment);
  console.log(state.data);
  const [input, setInput] = useState('');
  const [like, setLike] = useState(false);

  const onChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const onPostHandler = (event) => {
    event.preventDefault();
    let body = {
      postId: id,
      content: input,
      like: like,
    };
    dispatch(postCommentData(body));
    window.location.reload();
  };

  // 함수로 하니까 안됨 시x => event.prevent.default해줘야함 (form 안이라서)
  // const onDeleteHandler = () => {};

  // const onModifyHandler = () => {
  //   let body = {};

  //   dispatch(putCommentData());
  // };

  useEffect(() => {
    dispatch(getCommentData(id));
  }, []);

  return (
    <div>
      <header>
        <h1>리뷰</h1>
        <hr />
      </header>
      <Form>
        <Form.Group
          className='mb-3 mt-3 input'
          controlId='exampleForm.ControlInput1'
        >
          <Form.Control
            className='w-75'
            type='text'
            size='lg'
            placeholder='댓글을 입력하세요'
            name='input'
            value={input}
            onChange={onChangeHandler}
          />
          <button onClick={onPostHandler}>추가</button>
        </Form.Group>
      </Form>
      {state.data &&
        state.data.map((item) => (
          <StyledSection key={item.id}>
            {console.log(item)}
            <h2>{item.nickname}</h2>
            <p>{item.content}</p>
            <button
              onClick={() => {
                dispatch(putCommentData({ id: item.id, content: input }));
                window.location.reload();
              }}
            >
              수정
            </button>
            <button
              onClick={() => {
                dispatch(deleteCommentData(item.id));
                window.location.reload();
              }}
            >
              삭제
            </button>
          </StyledSection>
        ))}
    </div>
  );
};

export default Comment;

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;

  .input_form {
    width: 100px;
  }

  p {
    margin-top: 1rem;
  }
`;
