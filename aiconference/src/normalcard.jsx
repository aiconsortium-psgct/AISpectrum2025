import React from 'react';

const NormalCard = ({ name, designation, organization, iconUrl, details, link, index }) => {
  return (
    <div data-aos="fade-up" data-aos-delay={index * 100} style={{
      background: '#0d58a9',
      color: '#FFFFFF',
      borderRadius: '14px',
      padding: '20px',
      width: '100%',
      maxWidth: '300px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      transition: 'transform 0.3s ease',
      cursor: 'pointer',
      height: '100%',
      minHeight: '400px'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-5px)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
    }}
    >
      {iconUrl && (
        <div style={{
          width: '220px',
          height: '220px',
          borderRadius: '63%',
          background: 'linear-gradient(135deg, #E5E4E2, #BCC6CC)',
          padding: '3px',
          marginBottom: '15px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          overflow: 'hidden'
        }}>
          <img 
            src={iconUrl} 
            alt={name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '50%'
            }}
          />
        </div>
      )}
      <h2 style={{
        margin: '9px 0 20px 0',
        fontFamily: '"Playfair Display", serif',
        fontWeight: '700',
        letterSpacing: '0.5px',
        color: '#D9A353',
        fontSize: '1.8em'
      }}>{name}</h2>
      <h5 style={{ 
        margin: '4.5px 0', 
        fontSize: '1.1em',
        fontFamily: '"Inter", sans-serif',
        fontWeight: '500',
        letterSpacing: '0.3px'
      }}>{designation}</h5>
      {organization && (
        <h6 style={{ 
          margin: '10px 0 0 0', 
          fontSize: '1em',
          fontFamily: '"Inter", sans-serif',
          fontWeight: '500',
          letterSpacing: '0.3px'
        }}>{organization}</h6>
      )}
      <button
        style={{
          marginTop: '15px',
          padding: '10px 20px',
          background: '#FFFFFF',
          color: '#004AAD',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
        onClick={() => window.open(link, '_blank')}
      >
        Know More 
      </button>
    </div>
  );
};

const NormalCardGrid = ({ cards, style }) => {
  return (
    <div data-aos="fade-up" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '20px',
      padding: '10px',
      width: '100%',
      maxWidth: '1400px',
      margin: '0 auto',
      ...style
    }}>
      {cards.map((card, index) => (
        <NormalCard
          key={index}
          index={index}
          name={card.name}
          designation={card.designation}
          organization={card.organization}
          iconUrl={card.iconUrl}
          details={card.details}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default NormalCardGrid;
