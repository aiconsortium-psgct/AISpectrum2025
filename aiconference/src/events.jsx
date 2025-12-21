import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Import the image for preconference
import workshops from './assets/workshops.png';
import intellitechExpo from './assets/INTELLITECH EXPO (31).png';
import keynote from './assets/keynote.jpg';
import expo from './assets/expo.png';
import paper from './assets/paper.png';

const eventData = [
  { title: 'Preconference Workshop', img: workshops },
  { title: 'Keynote Address', img: keynote },
  { title: 'Project Expo', img: expo },
  { title: 'Paper Presentation', img: paper },
];

const EventsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 50,
      easing: 'ease-out-cubic',
      delay: 0,
      mirror: false
    });
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-easing="ease-out-cubic"
      style={{
        margin: '40px auto',
        padding: '30px',
        background: 'rgb(255, 255, 255)',
        borderRadius: '20px',
        maxWidth: '1200px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
      }}
    >
      <h2 
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-out-cubic"
        style={{ 
          fontSize: '3rem',
          fontWeight: '800',
          color: '#0d58a9',
          marginBottom: '1rem',
          textAlign: 'center'
        }}
      >
        Events
        <div 
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-easing="ease-out-cubic"
          style={{
            width: '150px',
            height: '4px',
            background: '#D9A353',
            margin: '0 auto',
            borderRadius: '2px',
            marginTop: '15px'
          }} 
        />
      </h2>
      <div style={{ marginTop: '20px' }}>
        <div style={{ marginTop: '20px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '30px'
          }}>
            {eventData.map((event, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={index * 100}
                data-aos-easing="ease-out-cubic"
                style={{
                  width: '250px',
                  background: '#0c3c6c',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  textAlign: 'center',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                  transition: 'all 0.5s ease-out',
                  cursor: 'pointer',
                  transform: 'translateY(0)',
                  opacity: 1
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.05) translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1) translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
                }}
              >
                <img
                  src={event.img}
                  alt={event.title}
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease-out'
                  }}
                />
                <div style={{
                  background: '#0c3c6c',
                  padding: '10px',
                  borderBottomLeftRadius: '16px',
                  borderBottomRightRadius: '16px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  transition: 'all 0.5s ease-out'
                }}>
                  <h3 style={{
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    marginTop: '10px',
                    transition: 'all 0.5s ease-out'
                  }}>
                    {event.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          {/* INTELLITECH EXPO'25 Section */}
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <h2 style={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: '1rem' }}>INTELLITECH EXPO'25</h2>
            <img src={intellitechExpo} alt="INTELLITECH EXPO'25" style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsSection;

