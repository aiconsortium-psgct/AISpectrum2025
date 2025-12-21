import React from 'react';
import styled from 'styled-components';

const NameCardContainer = styled.div`
  background: #0d58a9;
  color: #FFFFFF;
  border-radius: 10px;
  padding: 12px 20px;
  min-width: 180px;
  max-width: 320px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 8px;
`;

const Name = styled.h3`
  margin: 0 0 4px 0;
  font-family: "Playfair Display", serif;
  font-weight: 700;
  color: #D9A353;
  font-size: 1.1em;
`;

const Organization = styled.p`
  margin: 0;
  font-size: 0.95em;
  font-family: "Inter", sans-serif;
  color: #FFFFFF;
`;

const NameCard = ({ name, organization }) => (
  <NameCardContainer>
    <Name>{name}</Name>
    <Organization>{organization}</Organization>
  </NameCardContainer>
);

export default NameCard;
