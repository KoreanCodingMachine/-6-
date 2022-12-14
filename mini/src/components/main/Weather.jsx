import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
const api = {
  key: '429fbbdee2c7faef2e929ec4ce6c96af',
  base: 'https://api.openweathermap.org/data/2.5/',
};
const city = 'Seoul';

const Weather = () => {
  const [weather, setWeather] = useState('');
  const url = `${api.base}weather?q=${city}&appid=${api.key}`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setWeather({
        temperature: Math.round(res.data.main.temp - 273.15), // 섭씨 온도 구하기
      });
    });
  }, []);

  return <Wrapper className='weather'>{weather.temperature}</Wrapper>;
};

export default Weather;

const Wrapper = styled.div`
  font-size: 36px;
`;
