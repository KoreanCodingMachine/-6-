import React from 'react';
import styled from 'styled-components';

const ListItem = ({ item }) => {
  const { title, nickname, content } = item;
  return (
    <Wrapper>
      <section className='title'>
        <h2>{title}</h2>
        <p>{nickname}</p>
        <p>{content}</p>
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
`;
