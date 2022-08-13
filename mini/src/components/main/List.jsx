import React, { useEffect } from 'react';
import ListItem from './ListItem';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../redux/modules/postSlice';

const List = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.postSlice.post);

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <Wrapper>
      Today
      {data && data.map((item) => <ListItem key={item.id} item={item} />)}
    </Wrapper>
  );
};

export default List;

const Wrapper = styled.div`
  text-align: center;
`;
