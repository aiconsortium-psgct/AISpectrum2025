import React, { useEffect, useRef, useState } from "react";
import grd from './assets/grd.jpg';
import marudhamalai from './assets/marudhamalai.png';
import isha from './assets/isha.png';
import gass from './assets/gass.png';
import gd from './assets/gd.png';
import ilovekovai from './assets/ilovekovai.jpg';
import thiruvalluvar from './assets/thiruvalluvar.jpg';
import boat from './assets/boat.jpg';
import perur from './assets/perur.jpg';
import ooty from './assets/ooty.jpg';
import falls from './assets/falls.jpg';

const WelcomeCardSection = () => {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const speedRef = useRef(0.5); // Reduced from 2 to 0.8 for slower scrolling

  const images = [
    { name: "PSG GRD Museum", img: grd },
    { name: "Marudhamalai Temple", img: marudhamalai },
    { name: "Isha Yoga Center", img: isha },
    { name: "Gass Forest Museum", img: gass },
    { name: "GD Car Museum", img: gd },
    { name: "Ukkadam Lake Spot", img: ilovekovai },
    { name: "Thiruvalluvar Statue", img: thiruvalluvar },
    { name: "Vallankulam Boat House", img: boat },
    { name: "Perur Temple", img: perur },
    { name: "Ooty", img: ooty },
    { name: "Siruvani Falls", img: falls }
  ];

  const repeatedImages = [...images, ...images]; // Duplicate for seamless scroll

  const animate = () => {
    if (scrollRef.current && !isPaused) {
      scrollRef.current.scrollLeft += speedRef.current;
      
      // Reset to start for seamless loop
      if (
        scrollRef.current.scrollLeft >=
        scrollRef.current.scrollWidth / 2
      ) {
        // Use a small offset to avoid visible jump
        scrollRef.current.scrollLeft = 1;
      }
    }
    
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    // Start animation
    animationRef.current = requestAnimationFrame(animate);
    
    // Clean up on unmount
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  return (
    <div
      style={{
        width: "100%",
        padding: "40px 0",
        background: 'rgb(255, 255, 255)',
        color: '#475569',
        textAlign: "center",
        borderRadius: "30px",
        overflow: "hidden",
        marginTop: "30px",
      }}
    >
      <div style={{ width: "90%", margin: "0 auto" }}>
        <h2 style={{ 
          fontSize: '3rem',
          fontWeight: '800',
          color: '#0d58a9',
          marginBottom: '3rem',
          background: '#0d58a9',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textAlign: 'center'
        }}>
          Welcome to Coimbatore
          <div style={{
            width: '150px',
              height: '4px',
            background: '#D9A353',
              margin: '0 auto',
              borderRadius: '2px',
            marginTop: '15px'
          }} />
        </h2>

        <div
          ref={scrollRef}
          style={{
            display: "flex",
            overflowX: "hidden",
            gap: "20px",
            padding: "20px 0",
            cursor: "grab",
            position: "relative",
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {repeatedImages.map((image, index) => (
            <div 
              key={index} 
              style={{ 
                flex: "0 0 auto",
                width: "300px",
                height: "200px",
                position: "relative",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.2)";
                e.currentTarget.style.zIndex = "10";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.zIndex = "1";
              }}
            >
              <img
                src={image.img}
                alt={image.name}
                style={{
                  width: "100%",
                  height: "100%",
                    objectFit: "cover",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                  transition: "all 0.3s ease",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                  background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
                  color: "white",
                  padding: "15px",
                  borderRadius: "0 0 10px 10px",
                  fontSize: "1.1em",
                  fontWeight: "600",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                  letterSpacing: "0.5px",
                  backdropFilter: "blur(2px)"
                }}
              >
                {image.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        [ref="scrollRef"]::-webkit-scrollbar {
          display: none;
        }
        
        div:hover .card-overlay {
          transform: translateY(0);
          opacity: 1;
        }
        
        /* Optimize animations */
        @media (prefers-reduced-motion: reduce) {
          * {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default WelcomeCardSection;