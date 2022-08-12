import React from 'react';
import Header from '../components/main/Header';
import Time from '../components/main/Time';
import List from '../components/main/List';
import styled from 'styled-components';
import Footer from '../components/main/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <Section>
        <Time />
      </Section>
      <Section>
        <List />
      </Section>
      <Footer />
    </div>
  );
};

export default Home;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
