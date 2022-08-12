import React from 'react';
import Weather from './Weather';
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <section>
        <p>온도</p>
        <Weather className='date-text' />
        <p>아이콘</p>
      </section>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  section {
    display: flex;
    background-color: yellow;
    flex: 0;
    justify-content: flex-end;
    padding-right: 1rem;
    gap: 10px;
    align-items: center;
    .date-text {
      font-weight: bold;
      align-items: center;
    }
  }
`;
