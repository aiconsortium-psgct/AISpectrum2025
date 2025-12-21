import React from 'react';
import styled from 'styled-components';
import { colors, typography } from '../styles/commonStyles';
import psgLogo from '../assets/PSG_College_of_Technology_logo.png';
import platinumJubilee from '../assets/platinumjubliee.png';
import centenaryLogo from '../assets/centenaryyear.png';
import aiConsortiumLogo from '../assets/AI_Cons_logo.png';
import aiImpactLogo from '../assets/aiimpact.png';
import logo75 from '../assets/75.png';
import logo100 from '../assets/100.png';
import trust from '../assets/trust1.png';


const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContainer = styled.div`
  background: #FFFFFF;
  padding: 25px;
  border-radius: 15px;
  border: 6px solid #D9A353;
  box-shadow: 0 0 30px rgba(217, 163, 83, 0.4), 0 8px 25px rgba(0, 0, 0, 0.2);
  width: 85%;
  max-width: 550px;
  position: relative;
  text-align: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: ${colors.blue};
  border: none;
  color: ${colors.white};
  font-size: 28px;
  cursor: pointer;
  padding: 5px 12px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s, background-color 0.2s;
  width: 40px;
  height: 40px;

  &:hover {
    transform: scale(1.1);
    background: #0a3d7a;
  }
`;

const LogoRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
  flex-wrap: wrap;
`;

const Logo = styled.img`
  height: ${props => props.large ? '65px' : '50px'};
  object-fit: contain;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));

  @media (max-width: 768px) {
    height: ${props => props.large ? '52px' : '40px'};
  }
`;

const ConferenceName = styled.h2`
  color: ${colors.blue};
  font-size: 19px;
  font-weight: bold;
  margin: 12px 0;
  font-family: ${typography.heading.fontFamily};
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const MainLogo = styled.img`
  width: 275px;
  max-width: 90%;
  margin: 15px auto;
  display: block;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15));

  @media (max-width: 768px) {
    width: 275px;
  }
`;

const EventTitle = styled.h3`
  color: #D9A353;
  font-size: 25px;
  font-weight: bold;
  margin: 12px 0 8px;
  font-family: ${typography.heading.fontFamily};

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const OrganizationText = styled.p`
  color: ${colors.blue};
  font-size: 14px;
  font-weight: 600;
  margin: 5px 0;
  line-height: 1.4;
  font-family: ${typography.body.fontFamily};

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const UpdatePopup = ({ onClose }) => {
  return (
    <PopupOverlay onClick={onClose}>
      <PopupContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        
        <LogoRow>
          <Logo src={psgLogo} alt="PSG Tech Logo" />
          <Logo src={logo75} alt="Platinum Jubilee Logo" />
          <Logo src={aiConsortiumLogo} alt="AI Consortium Logo" />
          <Logo src={logo100} alt="100 Years Logo" />
          <Logo src={trust} alt="Trust Logo" large />
        </LogoRow>

        <ConferenceName>
          INTERNATIONAL CONFERENCE <br />ON <br />THE AI SPECTRUM : BRIDGING RESEARCH, INDUSTRY & INNOVATION
        </ConferenceName>

        <MainLogo src={aiImpactLogo} alt="AI Impact Logo" />

        <EventTitle>Pre-Summit Event - AI Impact Summit 2026</EventTitle>

        <OrganizationText>
          Ministry of Electronics and Information Technology (MeitY)
        </OrganizationText>
        <OrganizationText>
          Government of India
        </OrganizationText>
      </PopupContainer>
    </PopupOverlay>
  );
};

export default UpdatePopup; 