import React from "react";
import hcltech from './assets/hcl tech.png';
import maxbyte from './assets/maxbyte.png';
import arcana from './assets/arcana.png';
import dossier from './assets/dossier.png';
import bosch from './assets/bosch.png';
import logiqlabs from './assets/logiqlabs.jpg';
import cubeai from './assets/cubeai.jpg';
import cisco from './assets/cisco.jpg';
import haiva from './assets/haiva.jpg';
import janatics from './assets/janatics.jpg';
import alumni1 from './assets/alumni1.png';
import alumni2 from './assets/alumni3.jpg';
import alumni_obu from './assets/alumni_obu.png';
import hpe from './assets/hpe.png';
import aiimpact from './assets/aiimpact.png';
import anrf from './assets/anrf_final.jpg';
import lrde from './assets/lrde.jpg';
import psgtech from './assets/PSG_College_of_Technology_logo.png';
import psgtrust from './assets/trust.png';
import aiconsortium from './assets/AICons_logo.jpg';

const Sponsor = () => {
  const governmentSponsors = [
    {
      name: "AI Impact",
      logo: aiimpact,
      type: "Government Support",
      color: "#0d58a9"
    },
    {
      name: "ANRF",
      logo: anrf,
      type: "Government Support",
      color: "#0d58a9"
    },
    {
      name: "LRDE",
      logo: lrde,
      type: "Government Support",
      color: "#0d58a9"
    },
    {
      name: "PSG College of Technology",
      logo: psgtech,
      type: "Institution Support",
      color: "#0d58a9"
    }
  ];

  const industrySponsors = [
    {
      name: "HCLTech",
      logo: hcltech,
      type: "Platinum Sponsor",
      color: "#8B8B8B"
    },
    {
      name: "Maxbyte",
      logo: maxbyte,
      type: "Gold Sponsor",
      color: "#D9A353"
    },
    {
      name: "Arcana Analytics",
      logo: arcana,
      type: "Gold Sponsor",
      color: "#D9A353"
    },
    {
      name: "Cisco",
      logo: cisco,
      type: "Gold Sponsor",
      color: "#D9A353"
    },
    {
      name: "Haiva",
      logo: haiva,
      type: "Gold Sponsor",
      color: "#D9A353"
    },
    {
      name: "Janatics",
      logo: janatics,
      type: "Silver Sponsor",
      color: "#C0C0C0"
    },
    {
      name: "HPE",
      logo: hpe,
      type: "Silver Sponsor",
      color: "#C0C0C0"
    },
    {
      name: "Dossier Nexus",
      logo: dossier,
      type: "Bronze Sponsor",
      color: "#CD7F32"
    },
    {
      name: "Bosch",
      logo: bosch,
      type: "Bronze Sponsor",
      color: "#CD7F32"
    },
    {
      name: "Logiq Labs",
      logo: logiqlabs,
      type: "Bronze Sponsor",
      color: "#CD7F32"
    },
    {
      name: "CubeAI Solutions",
      logo: cubeai,
      type: "Other Sponsor",
      color: "#666666"
    }
  ];

  const alumniSponsors = [
    {
      name: "Alumni 1",
      logo: alumni1,
      type: "Silver Sponsor",
      color: "#C0C0C0"
    },
    {
      name: "Alumni 2",
      logo: alumni2,
      type: "Silver Sponsor",
      color: "#C0C0C0"
    },
    {
      name: "Alumni OBU",
      logo: alumni_obu,
      type: "Bronze Sponsor",
      color: "#CD7F32"
    }
  ];
  return (
    <>
      <style>{`
        .sponsor-card {
          background:#ffffff;
          color: white;
          padding: 10px;
          border-radius: 12px;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          text-align: center;
          font-weight: 500;
        }

        .sponsor-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 20px rgba(0, 0, 0, 0.35);
        }
      `}</style>

      <div
        style={{
          width: "100%",
          background: 'rgb(255,255,255)',
          padding: "20px 20px",
          textAlign: "center",
          boxSizing: "border-box",
          margin: 0,
          marginTop: "40px",
          marginBottom: "10px",
          borderRadius: "20px",
        }}
      >
        {/* Main Section Title */}
        <h2
          style={{
            fontSize: '3rem',
            fontWeight: '800',
            color: '#0d58a9',
            marginBottom: '3rem',
            background: '#0d58a9',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textAlign: 'center'
          }}
        >
          Sponsors and Partners
          <div style={{
            width: '150px',
            height: '4px',
            background: '#D9A353',
            margin: '0 auto',
            borderRadius: '2px',
            marginTop: '15px'
          }} />
        </h2>

        {/* Government and Institution Sponsors Section */}
        <h3
          style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#0d58a9',
            marginBottom: '2rem',
            marginTop: '2rem',
            textAlign: 'center'
          }}
        >
          Government and Institution Support
        </h3>

        {/* Government Sponsor Cards Grid */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "40px",
            marginBottom: "60px",
            alignItems: "flex-start",
          }}
        >
          {governmentSponsors.map((sponsor, i) => (
            <div key={i} className="sponsor-card" style={{ 
              width: "280px",
              height: "280px",
              background: '#ffffff',
              padding: '30px 20px',
              borderRadius: '15px',
              textAlign: 'center',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              border: `3px solid ${sponsor.color}`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px'
            }}>
              <div style={{
                flex: '1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%'
              }}>
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '140px',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <div style={{
                fontSize: '1.2rem',
                fontWeight: '700',
                color: sponsor.color,
                borderTop: `2px solid ${sponsor.color}`,
                paddingTop: '15px',
                width: '100%'
              }}>
                {sponsor.type}
              </div>
            </div>
          ))}
        </div>

        {/* Industry Sponsors Section */}
        <h3
          style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#0d58a9',
            marginBottom: '2rem',
            marginTop: '2rem',
            textAlign: 'center'
          }}
        >
          Industry Sponsors
        </h3>

        {/* Industry Sponsor Cards Grid */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "40px",
            marginBottom: "60px",
            alignItems: "flex-start",
          }}
        >
          {industrySponsors.map((sponsor, i) => (
            <div key={i} className="sponsor-card" style={{ 
              width: "280px",
              height: "280px",
              background: '#ffffff',
              padding: '30px 20px',
              borderRadius: '15px',
              textAlign: 'center',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              border: `3px solid ${sponsor.color}`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px'
            }}>
              <div style={{
                flex: '1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%'
              }}>
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '140px',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <div style={{
                fontSize: '1.2rem',
                fontWeight: '700',
                color: sponsor.color,
                borderTop: `2px solid ${sponsor.color}`,
                paddingTop: '15px',
                width: '100%'
              }}>
                {sponsor.type}
              </div>
            </div>
          ))}
        </div>

        {/* Alumni Sponsors Section */}
        <h3
          style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#0d58a9',
            marginBottom: '2rem',
            marginTop: '2rem',
            textAlign: 'center'
          }}
        >
          Alumni Partners
        </h3>

        {/* Alumni Sponsor Cards Grid */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "40px",
            marginBottom: "60px",
            alignItems: "flex-start",
          }}
        >
          {alumniSponsors.map((sponsor, i) => (
            <div key={i} className="sponsor-card" style={{ 
              width: "280px",
              height: "280px",
              background: '#ffffff',
              padding: '30px 20px',
              borderRadius: '15px',
              textAlign: 'center',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              border: `3px solid ${sponsor.color}`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px'
            }}>
              <div style={{
                flex: '1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%'
              }}>
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '140px',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <div style={{
                fontSize: '1.2rem',
                fontWeight: '700',
                color: sponsor.color,
                borderTop: `2px solid ${sponsor.color}`,
                paddingTop: '15px',
                width: '100%'
              }}>
                {sponsor.type}
              </div>
            </div>
          ))}
        </div>  
      </div>
    </>
  );
};

export default Sponsor;
