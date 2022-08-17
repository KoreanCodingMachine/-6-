import React from 'react';
import styled from 'styled-components';
import { deleteData } from '../../redux/modules/postSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

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
      <Card style={{ width: '25rem' }} className='card'>
        <Card.Img
          variant='top'
          src='logo192.png'
          onClick={onMoveDetailHandler}
          className='card-img'
        />
        <Card.Body>
          <section onClick={onMoveDetailHandler} className='card-section'>
            <Card.Title>
              {title}({nickname})
            </Card.Title>
            <Card.Text>{content}</Card.Text>
          </section>
          <div className='btn'>
            <Button
              variant='primary'
              onClick={() => {
                dispatch(onPatchHandler);
              }}
            >
              수정
            </Button>
            <Button variant='primary' onClick={onRemoveHandler}>
              삭제
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Wrapper>
  );
};

export default ListItem;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 25%;
  .card {
    width: 250px;
  }
  .card-img:hover {
    cursor: pointer;
  }
  .card-section {
    cursor: pointer;
  }
  .btn {
    display: flex;
    justify-content: space-around;
  }
`;
