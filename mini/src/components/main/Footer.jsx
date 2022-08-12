import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return <Wrapper>오늘은 너의 날이야</Wrapper>;
};

export default Footer;

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: black;
  text-align: center;
  min-height: 50px;
`;
