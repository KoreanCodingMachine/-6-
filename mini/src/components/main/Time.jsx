import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import 'moment/locale/ko';
import { useInterval } from 'react-use';

const Time = () => {
  const [hours, setHours] = useState(0);
  const [minute, setMinute] = useState(0);

  const data = localStorage.getItem('user-info');
  const setDate = () => {
    let now = moment();
    setHours(now.hour());
    setMinute(now.minutes());
  };

  // useInterval
  useInterval(() => {
    setDate();
  }, 100);

  return (
    <Wrapper>
      <p className='time'>
        {hours}:{minute} 분
      </p>
      <p className='user-interface'>Hi, How about Today? {data}</p>
    </Wrapper>
  );
};

export default Time;

export const Wrapper = styled.div`
  .time {
    text-align: center;
    font-size: 36px;
  }
  .user-interface {
    font-size: 24px;
  }
`;
