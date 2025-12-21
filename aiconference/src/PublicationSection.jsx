import React from 'react';
import styled from 'styled-components';
import lectureNotesImage from './assets/lecturenotes.png';
import eaiLogoImage from './assets/Eai_logo_with_margins.png';
import springerLogoImage from './assets/Springer.png';
import psgCareImage from './assets/PSGCARE.jpg';


const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 20px;
  border: 2px solid #D9A353;
  border-radius: 20px;
  background-color: #0d58a9;
  max-width: 600px;
  margin: auto;
  box-shadow: 0 4px 12px rgba(217, 163, 83, 0.2);

  @media (max-width: 768px) {
    gap: 15px;
    padding: 12px;
    max-width: 350px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
`;

const LogoImage = styled.img`
  max-height: 100px;
  filter: brightness(0) invert(1);

  @media (max-width: 768px) {
    max-height: 50px;
    max-width: 90px;
    object-fit: contain;
    flex: 1;
  }
`;

const PublicationSection = () => {
  return (
    <section
      id="publications"
      style={{
        padding: '30px',
        textAlign: 'center',
        background: 'rgb(255, 255, 255)',
        color: '#475569',
        borderRadius: '20px',
        boxShadow: '0 10px 20px rgba(217, 163, 83, 0.2)',
        maxWidth: '1000px',
        margin: '60px auto 60px',
        border: '1px solid rgba(217, 163, 83, 0.2)'
      }}
    >
      <h2
        style={{
          fontSize: '3rem',
          fontWeight: '800',
          color: '#0d58a9',
          marginBottom: '1rem',
          textAlign: 'center'
        }}
      >
        Publication
        <div style={{
          width: '150px',
          height: '4px',
          background: '#D9A353',
          margin: '15px auto',
          borderRadius: '2px',
        }} />
      </h2>

      <img
        src={lectureNotesImage}
        alt="Lecture Notes of the Institute for Computer Sciences cover"
        style={{
          maxHeight: '320px',
          marginBottom: '30px',
          borderRadius: '8px',
          boxShadow: '0 10px 20px rgba(217, 163, 83, 0.2)',
          border: '1px solid rgba(217, 163, 83, 0.2)'
        }}
      />

      <p
        style={{
          fontSize: '1.2em',
          lineHeight: '1.8',
          maxWidth: '900px',
          margin: '0 auto 50px',
          opacity: 0.95,
          color: '#475569',
          padding: '20px',
          backgroundColor: 'rgba(217, 163, 83, 0.05)',
          borderRadius: '10px',
          textAlign:'justify',
          border: '1px solid rgba(217, 163, 83, 0.2)'
        }}
      >
        The conference proceedings will be published in the{' '}
        Lecture Notes of the Institute for Computer Sciences, Social Informatics and Telecommunications Engineering (LNICST){' '}
        series by Springer. They will be indexed in Scopus,Ei Compendex, DBLP, and
        other leading citation databases.
      </p>

      <LogoContainer>
        <LogoImage
          src={eaiLogoImage}
          alt="EAI Logo"
        />
        <LogoImage
          src={springerLogoImage}
          alt="Springer Logo"
        />
      </LogoContainer>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: '30px 0 0 0',
        gap: '24px',
        maxWidth: '900px',
        marginLeft: 'auto',
        marginRight: 'auto',
        background: 'none',
        borderRadius: '12px',
        padding: '18px 24px',
        boxShadow: '0 2px 8px rgba(217, 163, 83, 0.08)',
        border: '0.2px solid #D9A353',
        flexDirection: 'row',
      }}>
        <img
          src={psgCareImage}
          alt="PSG CARE Logo"
          style={{
            height: '70px',
            width: 'auto',
            objectFit: 'contain',
            marginRight: '18px',
            background: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(13, 88, 169, 0.08)',
            padding: '6px',
            marginBottom: 0,
          }}
        />
        <span style={{
          fontSize: '1.25em',
          color: 'black',
          fontWeight: 'normal',
          textAlign: 'left',
          lineHeight: 1.5
        }}>
          Acknowledgement to PSG CARE for their role in bridging with EAI for the publication of the conference proceedings.
        </span>
        <style>{`
          @media (max-width: 768px) {
            #publications > div[style*='display: flex'] {
              flex-direction: column !important;
              align-items: center !important;
              padding: 12px 6px !important;
              gap: 12px !important;
            }
            #publications > div[style*='display: flex'] img {
              margin-right: 0 !important;
              margin-bottom: 10px !important;
              height: 55px !important;
            }
            #publications > div[style*='display: flex'] span {
              text-align: center !important;
              font-size: 1.1em !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default PublicationSection;
