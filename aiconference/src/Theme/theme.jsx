import React, { useEffect } from 'react';
import { colors, typography } from '../styles/commonStyles';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ThemeSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <>
      <section 
        data-aos="fade-up"
        style={{
          marginBottom: '80px', 
          background: 'rgb(255, 255, 255)',
          borderRadius: '20px',
          padding: '30px',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
          maxWidth: '800px',
          margin: '60px auto 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          transformOrigin: 'center center',
          willChange: 'transform',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
          e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
        }}
      >
        <h2 
          data-aos="fade-down"
          data-aos-delay="200"
          style={{
            fontSize: '3rem',
            fontWeight: '100',
            color: '#0d58a9',
            marginBottom: '1rem',
            background: '#0d58a9',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textAlign: 'center',
            transition: 'all 0.4s ease'
          }}
        >
          Theme
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            style={{
              width: '150px',
              height: '4px',
              background: '#D9A353',
              margin: '0 auto',
              borderRadius: '2px',
              transition: 'all 0.4s ease',
              transformOrigin: 'center',
            }}
          />
        </h2>
        <p 
          data-aos="fade-up"
          data-aos-delay="300"
          style={{
            fontFamily: typography.heading.fontFamily,
            fontSize: '1.2em',
            fontWeight: 'bold',
            marginTop: '10px',
            textAlign: 'center',
            marginBottom: '25px',
            color: colors.blue,
            transition: 'all 0.4s ease'
          }}
        >
          "EPIQ AI: Shaping a Responsible and Transformative Future"
        </p>
        <p 
          data-aos="fade-up"
          data-aos-delay="400"
          style={{
            fontSize: '1.1em',
            marginTop: '15px',
            lineHeight: '1.6',
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'justify',
            textJustify: 'inter-word',
            color: '#475569',
            transition: 'all 0.4s ease',
            padding: '20px',
            backgroundColor: 'rgba(217, 163, 83, 0.05)',
            borderRadius: '10px',
            border: '1px solid rgba(217, 163, 83, 0.2)'
          }}
        >
          AI is revolutionizing industries, research, and society, but it must be ethical, progressive, innovative, and of high quality to maximize its potential responsibly. EPIQ AI 2025 brings together researchers, industry experts, policymakers, and innovators to shape a future where AI is trustworthy, impactful, and sustainable.
        </p>
      </section>
    </>
  );
};

export default ThemeSection;