import React from 'react';

const PaperSubmission = () => {
  return (
    <div id="paper-submission" style={{ 
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
        Paper Submission
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
        marginTop: '20px'
      }}>
        <li style={{ 
          textAlign: 'left', 
          marginBottom: '10px', 
          color: '#0d58a9',
          fontWeight: '500'
        }}>
          <strong style={{ color: '#D9A353' }}>Submission Guidelines:</strong> We invite authors to submit original research papers, case studies, and review articles relevant to the conference themes. Submissions must adhere to the following guidelines:
        </li>
        <li style={{ 
          textAlign: 'left', 
          marginBottom: '10px', 
          color: '#0d58a9',
          padding: '8px',
        }}>
          Accepted full papers [12–15 pages]
        </li>
        <li style={{ 
          textAlign: 'left',         
          marginBottom: '10px', 
          color: '#0d58a9',
          padding: '8px',
        }}>
          Accepted short papers [6–8 pages]
        </li>
        <li style={{ 
          textAlign: 'left', 
          marginBottom: '10px', 
          color: '#0d58a9'
        }}>
          Selected registered papers will be published in Scopus indexed proceedings / Journals.
        </li>
        <li style={{ 
          textAlign: 'left', 
          marginBottom: '10px', 
          color: '#0d58a9'
        }}>
          All the submitted manuscripts will be sent for peer review and the corresponding author will be notified the outcome of the review process.
        </li>
        <li style={{ 
          textAlign: 'left', 
          marginBottom: '10px', 
          color: '#0d58a9',
          padding: '8px',
        }}>
          Submitted research work must be original in content amd free from plagiarism. Authors are requested to submit a plagiarism report using iThenticate / Turnitin.
        </li>
        <li style={{ 
          textAlign: 'left', 
          marginBottom: '10px', 
          color: '#0d58a9',
          padding: '8px',
        }}>
          Plagiarism should be less than 20% to qualify for the paper to be reviewed.
        </li>
      </ul>

      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '20px', 
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
          <a
            href="assets/springer_template.docx"
            download="Springertemplate.docx"
            style={{
              backgroundColor: '#0d58a9',
              color: 'white',
              padding: '12px 30px',
              fontSize: '1.1rem',
              fontWeight: '600',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 6px rgba(13, 88, 169, 0.2)',
              textDecoration: 'none',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#0a4a8a';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 8px rgba(13, 88, 169, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#0d58a9';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 6px rgba(13, 88, 169, 0.2)';
            }}
          >
            📄 Download Template
          </a>
          
          <a
            href="https://cmt3.research.microsoft.com/AIS2025/Submission/Index"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#D9A353',
              color: 'white',
              padding: '12px 30px',
              fontSize: '1.1rem',
              fontWeight: '600',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 6px rgba(217, 163, 83, 0.2)',
              textDecoration: 'none',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#c08a42';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 8px rgba(217, 163, 83, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#D9A353';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 6px rgba(217, 163, 83, 0.2)';
            }}
          >
            Submit Paper
          </a>
        </div>
        <p style={{ marginTop: '15px', color: '#0d58a9', fontSize: '0.9rem' }}>
          The Microsoft CMT service is used for managing the peer-reviewing process for this conference.
        </p>
      </div>
    </div>
  );
};

export default PaperSubmission; 