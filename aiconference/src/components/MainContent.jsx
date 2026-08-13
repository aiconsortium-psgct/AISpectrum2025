
import React from 'react';
import ImageSlider from './ImageSlider.jsx';
import styled from 'styled-components';
import {
  AppContainer,
  InfoSection,
  SliderContainer,
  Title,
  Line
} from './App.styles';
import { colors } from '../styles/commonStyles';

import AIImpactLogo from '../assets/aiimpact.png';
import PSGLogo from '../assets/PSG_College_of_Technology_logo.png';
import AIConsLogo from '../assets/AICons_logo.jpg';
import ANRFLogo from '../assets/anrf_final.jpg';
import LRDELogo from '../assets/lrde.jpg';
import PlatinumJubliee from '../assets/platinumjubliee.png';
import CentenaryYear from '../assets/centenaryyear.png';
import intellitechExpo from '../assets/INTELLITECH EXPO (31).png';
import invitation from '../assets/invitation.pdf';


// Base logo group
const LogoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-left: -50px;
  margin-right: 30px;

  @media (max-width: 768px) {
    gap: 8px;
    margin-left: 0;
    margin-right: 0;
  }
`;

// Right logo group (slightly lifted up)
const RightLogoGroup = styled(LogoGroup)`
  position: relative;
  top: -10px;
  margin-left: 30px;
  @media (max-width: 768px) {
    top: -6px;
    margin-left: 0;
  }
`;

// Main header container
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 0 15px;
  }
`;

// Base logo style
const LogoImage = styled.img`
  height: ${(props) => (props.large ? '110px' : '110px')};
  width: auto;
  object-fit: contain;

  @media (max-width: 768px) {
    height: ${(props) => (props.large ? '80px' : '60px')};
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    gap: 0.2rem;
    width: 100%;
  }
`;

const CollegeName = styled.h1`
  margin: 0;
  font-size: 1.8rem;
  color: #0D58A9;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Address = styled.p`
  margin: 0;
  font-size: 1.2rem;
  color: #0D58A9;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const ConsortiumName = styled.h2`
  margin: 0;
  font-size: 1.2rem;
  color: #D9A353;
  font-weight: 600;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const StyledTitle = styled(Title)`
  width: 100%;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const TitleContent = styled.div`
  @media (max-width: 768px) {
    padding: 0 3px;
  }
`;

const ConferenceTitle = styled.div`
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const MainContent = () => {
  // placeholder: replace with the Google Slides URL you will share
  const slidesLink = 'https://docs.google.com/presentation/d/164BwjyDkMhSv53beRDUtpei8JfHByb9O/edit?slide=id.p1#slide=id.p1';

  return (
  <AppContainer>
        <InfoSection>
          <HeaderContainer>
            {/* Left Logos */}
            <LogoGroup>
              <LogoImage src={AIImpactLogo} alt="AI Impact Logo" />
              <LogoImage src={PSGLogo} alt="PSGCT Logo" />
              <LogoImage src={PlatinumJubliee} alt="Platinum Jubilee Logo" />
            </LogoGroup>
            {/* Center Text */}
            <ContentContainer>
              <CollegeName>PSG COLLEGE OF TECHNOLOGY</CollegeName>
              <Address>Coimbatore, Tamil Nadu, India - 641004</Address>
              <ConsortiumName>
                PSG - <span style={{ fontWeight: 'bold' }}>AI CONSORTIUM</span>
              </ConsortiumName>
            </ContentContainer>
            {/* Right Logos */}
            <RightLogoGroup>
              <LogoImage src={CentenaryYear} alt="Centenary Year Logo" large />
              <LogoImage src={AIConsLogo} alt="AI Consortium Logo" large />
              <LogoImage src={ANRFLogo} alt="ANRF Logo" large />
              <LogoImage src={LRDELogo} alt="LRDE Logo" large />
            </RightLogoGroup>
          </HeaderContainer>
        </InfoSection>
        {/* Conference Details */}
        <SliderContainer style={{ position: 'relative' }}>
          {/* INTELLITECH EXPO Tab - top right over video */}
          <div style={{
            position: 'absolute',
            top: 56,
            right: 16,
            zIndex: 10,
            display: 'flex',
            gap: '12px',
            alignItems: 'center'
          }}>
            <button
              onClick={() => window.open(slidesLink, '_blank')}
              style={{
                background: '#0d58a9',
                color: 'white',
                padding: '10px 18px',
                borderRadius: '22px',
                fontWeight: '700',
                fontSize: '0.95rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                cursor: 'pointer',
                border: '2px solid #D9A353'
              }}
            >
              View Details of the Conference
            </button>
          </div>
          <StyledTitle>
            <TitleContent>
              <ConferenceTitle>INTERNATIONAL CONFERENCE</ConferenceTitle>
              <Line /> happened on <Line />
              THE AI SPECTRUM: BRIDGING RESEARCH, INDUSTRY & INNOVATION
              <Line /> 22 - 24 December 2025
            </TitleContent>
            <Line />
            {/* Download Invitation Button */}
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
              <a
                href={invitation}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  background: '#D9A353',
                  color: '#0d58a9',
                  padding: '12px 24px',
                  borderRadius: '22px',
                  fontWeight: '700',
                  fontSize: '1rem',
                  textDecoration: 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                Download AI Spectrum Invitation
              </a>
            </div>
          </StyledTitle>
          <ImageSlider style={{ width: '200%', height: '100%' }} />
          {/* INTELLITECH popup removed; replaced by two action buttons above */}
    </SliderContainer>
  </AppContainer>
  );
};

export default MainContent;