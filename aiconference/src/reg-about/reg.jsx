import React from 'react';

// Important Dates Component
const ImpDates = () => {
  return (
    <div id="dates" style={{ 
      marginBottom: '80px', 
      background: 'rgb(255, 255, 255)',
      borderRadius: '20px',
      padding: '30px',
      boxShadow: '0 10px 20px rgba(217, 163, 83, 0.2)',
      maxWidth: '70%',
      margin: '60px auto',
      color: '#475569',
      border: '1px solid rgba(217, 163, 83, 0.2)'
    }}>
      <h2 style={{ 
        fontSize: '3rem',
        fontWeight: '800',
        color: '#0d58a9',
        marginBottom: '1rem',
        textAlign: 'center'
      }}>
        Important Dates
        <div style={{
          width: '150px',
          height: '4px',
          background: '#D9A353',
          margin: '0 auto',
          borderRadius: '2px',
          marginTop: '15px'
        }} />
      </h2>

      <div style={{ overflowX: 'auto' }}>
        <table style={{
          width: '80%',
          borderCollapse: 'collapse',
          borderRadius: '30px',
          overflow: 'hidden',
          marginBottom: '2rem',
          border: '3px solid #D9A353',
          backgroundColor: '#0d58a9',
          color: 'white',
          margin: '0 auto 30px',
          boxShadow: '0 4px 12px rgba(217, 163, 83, 0.2)'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#0d58a9', color: 'white' }}>
              <th style={{ padding: '1rem', border: '3px solid #D9A353', textAlign: 'center' }}>EVENT</th>
              <th style={{ padding: '1rem', border: '3px solid #D9A353', textAlign: 'center' }}>DATE</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: '#fff', color: '#000' }}>
              <td style={{ padding: '1rem', border: '3px solid #D9A353' }}>Opening Date for Paper Submission</td>
              <td style={{ padding: '1rem', border: '3px solid #D9A353', fontWeight: 'bold', color: '#0d58a9' }}>06.05.2025</td>
            </tr>
            <tr style={{ backgroundColor: '#f0f0f0', color: '#000' }}>
              <td style={{ padding: '1rem', border: '3px solid #D9A353' }}>Last Date for Full Paper Submission</td>
              <td style={{ padding: '1rem', border: '3px solid #D9A353', fontWeight: 'bold', color: '#0d58a9' }}>01.08.2025</td>
            </tr>
            <tr style={{ backgroundColor: '#fff', color: '#000' }}>
              <td style={{ padding: '1rem', border: '3px solid #D9A353' }}>Notification of Acceptance</td>
              <td style={{ padding: '1rem', border: '3px solid #D9A353', fontWeight: 'bold', color: '#0d58a9' }}>15.10.2025</td>
            </tr>
            <tr style={{ backgroundColor: '#f0f0f0', color: '#000' }}>
              <td style={{ padding: '1rem', border: '3px solid #D9A353' }}>Camera-Ready Paper Submission</td>
              <td style={{ padding: '1rem', border: '3px solid #D9A353', fontWeight: 'bold', color: '#0d58a9' }}>01.11.2025</td>
            </tr>
            <tr style={{ backgroundColor: '#fff', color: '#000' }}>
              <td style={{ padding: '1rem', border: '3px solid #D9A353' }}>Last Date for Registration</td>
              <td style={{ padding: '1rem', border: '3px solid #D9A353', fontWeight: 'bold', color: '#0d58a9' }}>15.11.2025</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ImpDates;