import React, { useState, useEffect, useRef } from 'react';
import ReactCardFlip from 'react-card-flip';
import { FaAtom, FaIndustry, FaRocket, FaChevronDown, FaBolt } from 'react-icons/fa';

const cardStyle = {
  width: '450px',
  height: '320px',
  margin: '15px',
  cursor: 'pointer',
};

const frontBackSharedStyle = {
  background: '#0d58a9',
  color: '#D9A353',
  padding: '30px',
  borderRadius: '20px',
  border: '4.5px solid #BCC6CC',
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  textAlign: 'center',
};

const TopicCard = ({ title, description, topics, icon }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const contentRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollTop);
  };

  useEffect(() => {
    if (isFlipped && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
      setContainerHeight(contentRef.current.clientHeight);
    }
  }, [isFlipped]);

  const hasMoreContent = contentHeight > containerHeight && scrollPosition < contentHeight - containerHeight;

  return (
    <div style={cardStyle}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" containerStyle={{ height: '100%' }}>
        {/* Front */}
        <div key="front" style={{
          ...frontBackSharedStyle,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }} onClick={handleClick}>
          {icon && <div style={{ fontSize: '2.5em', marginBottom: '15px' }}>{icon}</div>}
          <h3 style={{
            fontFamily: 'Libre Baskerville, Georgia, serif',
            fontSize: '1.5em',
            fontWeight: 'bold',
            margin: '0 0 10px 0',
            color: '#D9A353'
          }}>{title}</h3>
          <p style={{ fontSize: '0.9em', marginTop: '15px', opacity: 0.8 }}>Click to view topics</p>
        </div>

        {/* Back */}
        <div key="back" style={{
          ...frontBackSharedStyle,
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          overflowY: 'hidden',
          position: 'relative'
        }} onClick={handleClick}>
          <h4 style={{
            fontFamily: 'Libre Baskerville, Georgia, serif',
            fontSize: '1.2em',
            fontWeight: 'bold',
            marginTop: '0',
            marginBottom: '8px'
          }}>{description}</h4>
          <div
            ref={contentRef}
            style={{
              overflowY: 'auto',
              flex: 1,
              paddingRight: '10px',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
            onScroll={handleScroll}
          >
            <ul style={{
              listStyleType: 'disc',
              paddingLeft: '20px',
              fontSize: '0.9em',
              textAlign: 'left',
              margin: 0
            }}>
              {topics.map((topic, index) => (
                <li key={index} style={{ marginBottom: '4px' }}>{topic}</li>
              ))}
            </ul>
          </div>

          {(contentHeight > containerHeight) && (
            <div style={{
              position: 'absolute',
              bottom: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              color: 'rgba(255, 255, 255, 0.8)',
              textAlign: 'center',
              fontSize: '1.2em',
              pointerEvents: 'none',
              animation: hasMoreContent ? 'none' : 'fadeOut 0.5s forwards'
            }}>
              <FaChevronDown />
            </div>
          )}

          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
            @keyframes fadeOut {
              to { opacity: 0; }
            }
          `}</style>
        </div>
      </ReactCardFlip>
    </div>
  );
};

const TopicsSection = () => {
  const topicsData = [
    {
      title: 'Track 1: AI Genesis',
      description: 'Origin, Evolution, and Development of AI Technologies',
      icon: <FaAtom />,
      topics: [
        'Evolution of Machine Learning Algorithms',
        'Neural Networks: From Perceptrons to Deep Learning',
        'Perspectives on AI Research',
        'Reinforcement Learning Development',
        'AI Hardware Evolution (CPUs → GPUs → TPUs)',
        'Benchmarking and Dataset Evolution',
        'Explainability in Early AI Systems'
      ]
    },
    {
      title: 'Track 2: AI Impact',
      description: 'Transforming Industries, Societies, and Workspaces',
      icon: <FaIndustry />,
      topics: [
        'AI in Healthcare: Diagnosis, Imaging, Drug Discovery',
        'Smart Manufacturing and Industry 4.0',
        'AI in Education and Personalized Learning',
        'Smart Cities and Urban Intelligence',
        'AI and Ethics in Society',
        'Societal and Behavioral Impacts of AI',
        'AI Regulations and Policy Frameworks'
      ]
    },
    {
      title: 'Track 3: AI Horizon',
      description: 'Future Trends, Innovations, and the Next Frontiers of AI',
      icon: <FaRocket />,
      topics: [
        'Artificial General Intelligence (AGI)',
        'Quantum Machine Learning',
        'Federated Learning and Data Privacy',
        'Trustworthy and Transparent AI',
        'Emotionally Intelligent AI',
        'Autonomous Vehicles and Robotics',
        'Edge AI and Next-Gen Hardware'
      ]
    },
    {
      title: 'Track 4: AI Disrupt',
      description: 'Breakthroughs & Cross-Disciplinary Disruptions',
      icon: <FaBolt />,
      topics: [
        'Agentic AI and Next-Gen Autonomous Agents',
        'Large Language Models as Generalist Agents (GPT, Claude, Gemini)',
        'AI-Augmented Creativity and Generative Design',
        'AI + Blockchain: Decentralized Intelligence',
        'Digital Twins and Simulation-Based AI',
        'AI in the Metaverse and XR (VR/AR/MR)',
        'Synthetic Data and Data-Centric AI'
      ]
    }
  ];

  return (
    <div style={{
      background: 'rgb(255, 255, 255)',
      borderRadius: '20px',
      padding: '40px 30px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
      maxWidth: '1200px',
      margin: '40px auto',
    }}>
      <h2 style={{
        fontFamily: '"DM Serif Display", serif',
        fontSize: '3rem',
        fontWeight: '100',
        textAlign: 'center',
        marginBottom: '40px',
        color: '#0d58a9',
        background: '#0d58a9',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        position: 'relative'
      }}>
        Conference Tracks & Topics
        <div style={{
          position: 'absolute',
          bottom: '-15px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '150px',
          height: '4px',
          background: '#D9A353',
          borderRadius: '2px'
        }} />
      </h2>

      <p style={{
        fontSize: '1.1em',
        marginBottom: '30px',
        marginTop:'15px',
        lineHeight: '1.6',
        maxWidth: '900px',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'justify',
        color: '#475569',
      }}>
        We invite researchers, academicians, industry professionals, and practitioners to submit original papers on the foundations, applications, and future directions of Artificial Intelligence. The conference welcomes research articles, reviews, and technical contributions across various fields. Submissions spanning the full spectrum of AI, particularly those that bridge disciplines or explore emerging areas, are especially encouraged.
      </p>

      {/* First row: Track 1 and Track 2 */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '40px',
        marginBottom: '30px',
      }}>
        {topicsData.slice(0, 2).map((data, index) => (
          <TopicCard
            key={index}
            title={data.title}
            description={data.description}
            topics={data.topics}
            icon={data.icon}
          />
        ))}
      </div>

      {/* Second row: Track 3 and Track 4 */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '40px',
      }}>
        {topicsData.slice(2, 4).map((data, index) => (
          <TopicCard
            key={`row2-${index}`}
            title={data.title}
            description={data.description}
            topics={data.topics}
            icon={data.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default TopicsSection;
