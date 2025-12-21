import React from 'react';

const Dates = () => {
  return (
    <>
      <style>
        {`
          @media (max-width: 768px) {
            #important-dates {
              max-width: 100% !important;
              width: 100% !important;
              box-sizing: border-box !important;
              padding: 15px !important;
              border-radius: 0 !important;
              box-shadow: none !important;
              border: none !important;
              margin: 60px 0 !important;
            }
            #important-dates table {
              width: 100% !important;
              font-size: 0.9rem !important;
              border-radius: 0 !important;
              box-shadow: none !important;
              border: none !important;
            }
            #important-dates tr {
              background: transparent !important;
              color: #0d58a9 !important;
            }
            #important-dates td {
              background: transparent !important;
              border-bottom: 1px solid rgba(217, 163, 83, 0.3) !important;
            }
          }
        `}
      </style>
      <div id="important-dates" style={{ 
        marginBottom: '80px', 
        background: 'rgb(255, 255, 255)',
        borderRadius: '20px',
        padding: '30px',
        boxShadow: '0 10px 20px rgba(217, 163, 83, 0.2)',
        maxWidth: '1000px',
        margin: '60px auto',
        color: '#475569',
        border: '1px solid rgba(217, 163, 83, 0.2)',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <h2 style={{ 
          fontSize: '3rem',
          fontWeight: '800',
          color: '#0d58a9',
          marginBottom: '1rem',
          background: '#0d58a9',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textAlign: 'center'
        }}>
          IMPORTANT DATES
          <div style={{
            width: '150px',
            height: '4px',
            background: '#D9A353',
            margin: '0 auto',
            borderRadius: '2px',
            marginTop: '15px'
          }} />
        </h2>

        <table style={{
          width: '100%',
          borderCollapse: 'separate',
          borderSpacing: 0,
          border: '2px',
          borderRadius: '1rem',
          overflow: 'hidden',
          color: '#000',
          margin: '0 auto 30px',
          boxShadow: '0 0 0 2px white'
        }}>
          <tbody>
            {[
              ['Opening Date for Paper Submission', '05.06.2025'],
              ['Last Date for Full Paper Submission', '20.08.2025'],
              ['Notification of Acceptance', '15.10.2025'],
              ['Camera-Ready Paper Submission', '01.11.2025'],
              ['Last Date for Registration', '15.11.2025']
            ].map(([label, date], idx) => (
              <tr key={idx} style={{ 
                background: '#0d58a9', 
                color: 'white'
              }}>
                <td style={{ 
                  padding: '1.2rem', 
                  border: '3px solid white', 
                  fontWeight: 'bold', 
                  textAlign: 'left'
                }}>{label}</td>
                <td style={{ 
                  padding: '1.2rem', 
                  border: '3px solid white', 
                  textAlign: 'center', 
                  fontWeight: 'bold'
                }}>{date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dates;
