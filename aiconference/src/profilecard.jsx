import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import NameCard from './namecard';

const CardContainer = styled.div`
  background: #0d58a9;
  color: #FFFFFF;
  border-radius: 14px;
  padding: 15px;
  width: 100%;
  max-width: 380px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  height: 320px;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(13, 88, 169, 0.3);
    height: ${props => props.expandedHeight}px;
   
    .details {
      transform: translateY(0);
      opacity: 1;
    }

    .image-container {
      transform: scale(0.9);
      margin-bottom: 5px;
    }
  }
`;

const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 63%;
  background: linear-gradient(135deg, #E5E4E2, #BCC6CC);
  padding: 3px;
  margin-bottom: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 2;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  filter: saturate(75%);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`;

const Name = styled.h2`
  margin: 0;
  padding: 0;
  font-family: "Playfair Display", serif;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #D9A353;
  font-size: 1.5em;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 2;
`;

const DetailsContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(13, 88, 169, 0.95), rgba(13, 88, 169, 0.8));
  padding: 8px 15px 12px 15px;
  transform: translateY(100%);
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 0 0 14px 14px;
  backdrop-filter: blur(5px);
  min-height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Designation = styled.h5`
  margin: 0;
  padding: 0;
  font-size: 1.1em;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  letter-spacing: 0.3px;
  color: #FFFFFF;
  transition: all 0.5s ease;
  line-height: 1.2;
`;

const Organization = styled.h6`
  margin: 2px 0 0 0;
  padding: 0;
  font-size: 1em;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  letter-spacing: 0.3px;
  color: #D9A353;
  transition: all 0.5s ease;
  line-height: 1.2;
`;

const ProfileCard = ({ name, designation, organization, photoUrl }) => {
  const detailsRef = useRef(null);
  const [expandedHeight, setExpandedHeight] = useState(380);

  useEffect(() => {
    if (detailsRef.current) {
      const detailsHeight = detailsRef.current.offsetHeight;
      setExpandedHeight(320 + detailsHeight + 5);
    }
  }, [designation, organization]);

  return (
    <CardContainer expandedHeight={expandedHeight}>
      <ImageContainer className="image-container">
        <ProfileImage src={photoUrl} alt={name} />
      </ImageContainer>
      <Name className="name">{name}</Name>
      <DetailsContainer className="details" ref={detailsRef}>
        <Designation>{designation}</Designation>
        <Organization>{organization}</Organization>
      </DetailsContainer>
    </CardContainer>
  );
};

export default ProfileCard;
