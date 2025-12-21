import React from 'react';

const RegDetails = () => {
  return (
    <div id="registration" style={{ 
      marginBottom: '80px', 
      background: 'rgb(255, 255, 255)',
      borderRadius: '20px',
      padding: '30px',
      boxShadow: '0 10px 20px rgba(217, 163, 83, 0.2)',
      maxWidth: '1000px',
      margin: '60px auto',
      color: '#475569',
      border: '1px solid rgba(217, 163, 83, 0.2)',
      '@media (max-width: 768px)': {
        maxWidth: '100%',
        width: '100%',
        boxSizing: 'border-box',
        padding: '15px'
      }
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
        Registration Details
        <div style={{
          width: '150px',
          height: '4px',
          background: '#D9A353',
          margin: '0 auto',
          borderRadius: '2px',
          marginTop: '15px'
        }} />
      </h2>

      <ul style={{ 
        paddingLeft: '1.5rem', 
        marginBottom: '1.5rem', 
        listStyleType: 'disc', 
        marginTop: '20px',
        borderLeft: '3px solid #D9A353',
        
      }}>
        <li style={{ textAlign: 'left', marginBottom: '8px' }}>All accepted papers must be registered</li>
        <li style={{ textAlign: 'left', marginBottom: '8px' }}>At least one author must attend the conference to present the paper</li>
        <li style={{ textAlign: 'left', marginBottom: '8px' }}>Registration includes conference kit, lunch, and access to all sessions</li>
      </ul>

      <p style={{ 
        marginBottom: '1.5rem', 
        fontWeight: '500', 
        fontSize: '1.1rem',
        color: '#0d58a9',
        borderBottom: '2px solid #D9A353',
        paddingBottom: '10px',
        display: 'inline-block'
      }}>The registration fee for the conference is as follows:</p>
      
      <div style={{ 
        overflowX: 'auto',
        '@media (max-width: 768px)': {
          width: '100%'
        }
      }}>
        <table style={{
          width: '80%',
          borderCollapse: 'collapse',
          borderRadius: '30px',
          overflow: 'hidden',
          marginBottom: '2rem',
          border: '3px solid #D9A353',
          backgroundColor: '#023e8a',
          color: 'white',
          margin: '0 auto 30px',
          boxShadow: '0 4px 12px rgba(217, 163, 83, 0.2)',
          '@media (max-width: 768px)': {
            width: '100%',
            fontSize: '0.9rem'
          }
        }}>
          <thead>
            <tr style={{ 
              background: '#0d58a9', 
              color: 'white',
              '@media (max-width: 768px)': {
                display: 'flex',
                flexDirection: 'column'
              }
            }}>
              <th style={{ 
                padding: '1rem', 
                border: '3px solid #D9A353', 
                textAlign: 'center',
                '@media (max-width: 768px)': {
                  padding: '0.8rem',
                  border: 'none',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.3)'
                }
              }}>CATEGORY</th>
              <th style={{ 
                padding: '1rem', 
                border: '3px solid #D9A353', 
                textAlign: 'center',
                '@media (max-width: 768px)': {
                  padding: '0.8rem',
                  border: 'none',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.3)'
                }
              }}>INDIAN DELEGATES</th>
              <th style={{ 
                padding: '1rem', 
                border: '3px solid #D9A353', 
                textAlign: 'center',
                '@media (max-width: 768px)': {
                  padding: '0.8rem',
                  border: 'none'
                }
              }}>FOREIGN DELEGATES</th>
            </tr>
          </thead>
          <tbody>
            {[
              { category: 'Academician, Research Scholar', indian: '₹ 12,000', foreign: '$ 150 USD' },
              { category: 'Industry person', indian: '₹ 14,000', foreign: '$ 175 USD' },
              { category: 'Attendees', indian: '₹ 3,000', foreign: '$ 75 USD' }
            ].map((row, idx) => (
              <tr key={idx} style={{ 
                backgroundColor: idx % 2 === 0 ? '#fff' : '#f0f0f0', 
                color: '#000',
                '@media (max-width: 768px)': {
                  display: 'flex',
                  flexDirection: 'column',
                  borderBottom: '2px solid #D9A353'
                }
              }}>
                <td style={{ 
                  padding: '1rem', 
                  border: '3px solid #D9A353',
                  '@media (max-width: 768px)': {
                    padding: '0.8rem',
                    border: 'none',
                    borderBottom: '1px solid rgba(217, 163, 83, 0.3)',
                    fontSize: '0.85rem'
                  }
                }}>{row.category}</td>
                <td style={{ 
                  padding: '1rem', 
                  border: '3px solid #D9A353', 
                  fontWeight: 'bold', 
                  color: '#0d58a9',
                  '@media (max-width: 768px)': {
                    padding: '0.8rem',
                    border: 'none',
                    borderBottom: '1px solid rgba(217, 163, 83, 0.3)',
                    fontSize: '0.9rem'
                  }
                }}>{row.indian}</td>
                <td style={{ 
                  padding: '1rem', 
                  border: '3px solid #D9A353', 
                  fontWeight: 'bold', 
                  color: '#0d58a9',
                  '@media (max-width: 768px)': {
                    padding: '0.8rem',
                    border: 'none',
                    fontSize: '0.9rem'
                  }
                }}>{row.foreign}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ 
        fontStyle: 'italic', 
        marginBottom: '2rem', 
        textAlign: 'center', 
        color: '#0d58a9', 
        fontWeight: '600',
        padding: '10px',
        border: '1px solid #D9A353',
        borderRadius: '5px',
        backgroundColor: 'rgba(217, 163, 83, 0.1)'
      }}>
        <strong>Note:</strong> Registration fee inclusive of 18% GST.
      </p>

      <h2 style={{ 
        fontSize: '1.5rem', 
        fontWeight: 'bold', 
        marginBottom: '1.5rem', 
        fontFamily: 'Georgia, serif', 
        color: '#0d58a9',
        borderBottom: '2px solid #D9A353',
        paddingBottom: '10px',
        display: 'inline-block'
      }}>Payment Type: Internet Banking</h2>
      
      <div style={{ 
        overflowX: 'auto', 
        marginBottom: '2rem',
        '@media (max-width: 768px)': {
          width: '100%'
        }
      }}>
        <table style={{
          width: '80%',
          borderCollapse: 'collapse',
          border: '3px solid #D9A353',
          borderRadius: '1rem',
          overflow: 'hidden',
          backgroundColor: '#ffffff',
          color: '#000',
          margin: '0 auto 30px',
          boxShadow: '0 4px 12px rgba(217, 163, 83, 0.2)',
          '@media (max-width: 768px)': {
            width: '100%',
            fontSize: '0.9rem'
          }
        }}>
          <thead>
            <tr style={{ 
              background: '#0d58a9',
              '@media (max-width: 768px)': {
                display: 'flex',
                flexDirection: 'column'
              }
            }}>
              <th colSpan={2} style={{ 
                padding: '1rem', 
                textAlign: 'center', 
                color: 'white', 
                fontSize: '1.5rem', 
                border: '3px solid #D9A353',
                '@media (max-width: 768px)': {
                  fontSize: '1.2rem',
                  padding: '0.8rem',
                  border: 'none',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.3)'
                }
              }}>
                Payment Details
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              { label: 'Account Number', value: '1481267367' },
              { label: 'Name of the Beneficiary', value: 'PSG Center for Nonformal and Continuing Education (PSG CNCE)' },
              { label: 'Address', value: 'Peelamedu, Coimbatore - 641004' },
              { label: 'Name of the Bank', value: 'Central Bank of India' },
              { label: 'Account Type', value: 'Savings' },
              { label: 'IFSC Code', value: 'CBIN0280913' },
              { label: 'Swift Code', value: 'CBININBBOSB' }
            ].map((row, idx) => (
              <tr key={idx} style={{
                '@media (max-width: 768px)': {
                  display: 'flex',
                  flexDirection: 'column',
                  borderBottom: '2px solid #D9A353'
                }
              }}>
                <td style={{ 
                  padding: '1rem', 
                  fontWeight: 'bold', 
                  backgroundColor: '#f0f8ff', 
                  border: '3px solid #D9A353',
                  '@media (max-width: 768px)': {
                    padding: '0.8rem',
                    border: 'none',
                    borderBottom: '1px solid rgba(217, 163, 83, 0.3)',
                    fontSize: '0.85rem'
                  }
                }}>{row.label}</td>
                <td style={{ 
                  padding: '1rem', 
                  border: '3px solid #D9A353', 
                  color: '#0d58a9',
                  '@media (max-width: 768px)': {
                    padding: '0.8rem',
                    border: 'none',
                    fontSize: '0.9rem'
                  }
                }}>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegDetails; 