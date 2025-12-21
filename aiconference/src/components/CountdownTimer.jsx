import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CountdownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
  padding: 20px;
  background: rgba(13, 88, 169, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(5px);
`;

const TimeUnit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
`;

const TimeValue = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #0D58A9;
  font-family: 'Montserrat', sans-serif;
`;

const TimeLabel = styled.div`
  font-size: 0.9rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-12-22T00:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <CountdownContainer>
      <TimeUnit>
        <TimeValue>{timeLeft.days}</TimeValue>
        <TimeLabel>Days</TimeLabel>
      </TimeUnit>
      <TimeUnit>
        <TimeValue>{timeLeft.hours}</TimeValue>
        <TimeLabel>Hours</TimeLabel>
      </TimeUnit>
      <TimeUnit>
        <TimeValue>{timeLeft.minutes}</TimeValue>
        <TimeLabel>Minutes</TimeLabel>
      </TimeUnit>
      <TimeUnit>
        <TimeValue>{timeLeft.seconds}</TimeValue>
        <TimeLabel>Seconds</TimeLabel>
      </TimeUnit>
    </CountdownContainer>
  );
};

export default CountdownTimer; 