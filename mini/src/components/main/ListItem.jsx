import React from 'react';
import styled from 'styled-components';
import { deleteData } from '../../redux/modules/postSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ListItem = ({ item }) => {
  const { id, title, nickname, content } = item;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 상세페이지에서 수정하기 구현
  // 상세페이지로 이동해서 현재 리스트의 목록 저장해두고
  // 상세페이지에서 수정하기 기능 구현
  // const onReviseHandler = () => {
  //   dispatch(patchData());
  // };

  const onRemoveHandler = () => {
    dispatch(deleteData(id));
  };

  const onPatchHandler = () => {
    navigate('/modify', { state: item });
  };

  const onMoveDetailHandler = () => {
    navigate(`/detail/${id}`, { state: item });
  };

  return (
    <Wrapper>
      <section className='title' onClick={onMoveDetailHandler}>
        <h2>{title}</h2>
        <p>{nickname}</p>
        <p>{content}</p>
      </section>
      <section>
        <button onClick={onPatchHandler}>수정</button>
        <button onClick={onRemoveHandler}>삭제</button>
      </section>
    </Wrapper>
  );
};

export default ListItem;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid lightblue;
  margin: 0 auto;
  padding: 10px 20px;
  margin-top: 1rem;
  width: 500px;
  .title {
    display: block;
    margin: 0 auto;
  }
  .title:hover {
    cursor: pointer;
  }
`;
