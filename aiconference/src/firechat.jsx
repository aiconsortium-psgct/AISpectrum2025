import React from 'react';
import styled from 'styled-components';
import { colors, typography } from './styles/commonStyles';

const SectionContainer = styled.div`
  width: 100%;
  padding: 60px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
`;

const SectionTitle = styled.h2`
  font-family: ${typography.heading.fontFamily};
  font-size: 3rem;
  font-weight: 800;
  color: ${colors.blue};
  text-align: center;
  margin-bottom: 10px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 4px;
    background: #D9A353;
    border-radius: 2px;
  }
`;

const Tagline = styled.p`
  font-family: ${typography.body.fontFamily};
  font-size: 1.2rem;
  color: #666;
  text-align: center;
  margin-bottom: 20px;
  font-style: italic;
  font-weight: 500;
`;

const FirechatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  max-width: 1400px;
  margin: 60px auto 0;
  padding: 0 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 0 15px;
  }
`;

const FirechatCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 35px;
  box-shadow: 0 10px 40px rgba(13, 88, 169, 0.15);
  border: 3px solid #D9A353;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 50px rgba(13, 88, 169, 0.25);
  }
`;

const FirechatNumber = styled.div`
  display: inline-block;
  background: linear-gradient(135deg, ${colors.blue}, #0a3d7a);
  color: white;
  padding: 8px 20px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(13, 88, 169, 0.3);
`;

const Description = styled.p`
  font-family: ${typography.body.fontFamily};
  font-size: 1rem;
  color: #555;
  line-height: 1.7;
  margin-bottom: 20px;
  padding: 15px;
  background: #f0f7ff;
  border-radius: 10px;
  font-style: italic;
  text-align: justify;
`;

const MainTheme = styled.h3`
  font-family: ${typography.heading.fontFamily};
  font-size: 1.8rem;
  font-weight: 700;
  color: ${colors.blue};
  margin-bottom: 25px;
  line-height: 1.4;
  border-left: 5px solid #D9A353;
  padding-left: 20px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SubTheme = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  color: #D9A353;
  margin: 25px 0 15px;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    font-size: 1.15rem;
  }
`;

const ChatItem = styled.div`
  background: linear-gradient(135deg, #f8f9fa, #ffffff);
  padding: 18px 20px;
  margin: 12px 0;
  border-radius: 12px;
  border-left: 4px solid ${colors.blue};
  font-size: 1.05rem;
  line-height: 1.6;
  color: #333;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 12px rgba(13, 88, 169, 0.15);
  }

  strong {
    color: ${colors.blue};
    font-weight: 600;
  }
`;

const ClosingRemarks = styled.div`
  margin-top: 30px;
  padding: 20px 25px;
  background: linear-gradient(135deg, ${colors.blue}, #0a3d7a);
  color: white;
  border-radius: 15px;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  box-shadow: 0 6px 20px rgba(13, 88, 169, 0.3);
  position: relative;
  overflow: hidden;

  strong {
    color: #D9A353;
  }
`;

const Firechat = () => {
  const firechats = [
    {
      number: 'FIRECHAT',
      description: 'An informal, story-driven conversation between a moderator and a single guest. It focuses on personal insights, experiences creating an intimate and reflective atmosphere.',
      mainTheme: 'AI - Hype, Hope & Human Impact',
      chats: [
        {
          title: 'Chat 1',
          description: 'Responsible AI: From Headlines to Real-Life Impact'
        },
        {
          title: 'Chat 2',
          description: 'Idea to Impact: The Startup Journey in Applied AI'
        },
        {
          title: 'Chat 3',
          description: 'Future of Work: Skills, Students & the AI-Driven Workplace / Academia–Industry Connect: Making Research Reach People'
        }
      ],
      closingRemarks: 'AI Bubble — Hype or Reality?'
    },
    {
      number: 'PANEL DISCUSSION',
      description: 'Brings together multiple experts to share diverse viewpoints on a topic. It is more structured, debate-oriented, and offers a broader understanding through different perspectives and audience interaction.',
      mainTheme: 'Healing with Algorithms: Beyond Stethoscopes: How AI is Redefining Modern Healthcare',
      chats: [
        {
          title: 'Topic 1',
          description: 'Responsible AI in Healthcare'
        },
        {
          title: 'Topic 2',
          description: 'AI Innovation Journey from Lab to Hospital'
        },
        {
          title: 'Topic 3',
          description: 'Future of Healthcare Work — Training Doctors & AI Together'
        }
      ],
      closingRemarks: 'AI in Healthcare — Hype or Genuine Transformation?'
    }
  ];

  return (
    <SectionContainer>
      <SectionTitle>Firechats & Panel Discussion</SectionTitle>
      <br/>
      <Tagline>AI Unplugged: Human Stories, Decisions, Dilemmas & Disruption </Tagline>
      <FirechatGrid>
        {firechats.map((firechat, index) => (
          <FirechatCard key={index}>
            <FirechatNumber>{firechat.number}</FirechatNumber>
            <Description>{firechat.description}</Description>
            <MainTheme>{firechat.mainTheme}</MainTheme>
            
            {firechat.chats.map((chat, chatIndex) => (
              <div key={chatIndex}>
                <SubTheme>{chat.title}</SubTheme>
                <ChatItem>
                  {chat.description}
                </ChatItem>
              </div>
            ))}

            <ClosingRemarks>
              <strong>Closing Remarks:</strong> {firechat.closingRemarks}
            </ClosingRemarks>
          </FirechatCard>
        ))}
      </FirechatGrid>
    </SectionContainer>
  );
};

export default Firechat;
