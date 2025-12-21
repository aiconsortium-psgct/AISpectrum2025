import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar.jsx';
import UpdatePopup from './components/UpdatePopup.jsx';
import { GlobalStyles, colors } from './styles/commonStyles';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Comitte from './comitte';
import ThemeSection from './Theme/theme.jsx';
import TopicsSection from './Topics/Topics.jsx';
import Firechat from './firechat.jsx';
import Sponsor from './Sponsor.jsx';
import EventsSection from './events.jsx';
import VenueContactSection from './VenueContactSection.jsx';
import Footer from './Footer.jsx';
import About from './reg-about/about.jsx';
import Dates from './imp.jsx';
import WelcomeCardSection from './cbeplaces.jsx';
import MainContent from './components/MainContent.jsx';
import TempComponent from './temp.jsx';
import SpeakerSection from './speaker.jsx';
import ConferenceSection from './Topics/Topics.jsx';
import PublicationSection from './PublicationSection.jsx';
import PaperSubmission from './reg-about/paper-submission';
import RegDetails from './reg-about/registration';

import Testimonials from './testimonials';
import SingleTestimonial from './SingleTestimonial.jsx';

// Back to Top Button Component
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: colors.white,
        border: 'none',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        display: isVisible ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
      }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 19V5M5 12L12 5L19 12"
          stroke={colors.blue}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

function App() {
  const [count, setCount] = useState(0);
  const [showTemp, setShowTemp] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showPopup, setShowPopup] = useState(true);

  // Export showTemp state and setter for Navbar to use
  window.appState = {
    showTemp,
    setShowTemp
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home', 'about', 'speakers', 'theme', 'cfp',
        'topics', 'Dates', 'registration', 'events', 'venue-contact',
        'sponsors', 'welcome', 'publications',
      ];
      
      let currentActiveSection = 'home';
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentActiveSection = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop - 70, 
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <GlobalStyles />
      
      {/* Update Popup */}
      {showPopup && <UpdatePopup onClose={() => setShowPopup(false)} />}
      
      {/* Only show Navbar when not displaying TempComponent */}
      {!showTemp && (
        <div style={{ position: 'relative', zIndex: 2 }}>
          <Navbar />
        </div>
      )}

      {/* Conditionally render content based on state */}
      {showTemp ? (
        <div style={{ position: 'relative', zIndex: 1 }}>
          <TempComponent />
          {/* Back button to return to main page */}
          <div style={{
            position: 'fixed',
            top: '20px',
            left: '20px',
            zIndex: 10,
            padding: '10px 20px',
            background: colors.blue,
            color: colors.white,
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
          }}
          onClick={() => setShowTemp(false)}>
            ← Back to Main
          </div>
        </div>
      ) : (
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div id="main-content">
            <MainContent />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="speakers">
            <SpeakerSection />
          </div>
          <div id="theme">
            <ThemeSection />
          </div>
          <div id="topics">
            <TopicsSection />
          </div>
          <div id="firechats">
            <Firechat />
          </div>
          <div id="publications">
            <PublicationSection />
          </div>
          <div id="Dates">
            <Dates />
          </div>
          <div id="paper-submission">
            <PaperSubmission />
          </div>
          <div id="reg-details">
            <RegDetails />
          </div>
          <div id="singletestimonial">
            <SingleTestimonial/>
          </div>
          <div id="events">
            <EventsSection />
          </div>
          <div id="sponsors">
            <Sponsor />
          </div>
          <div id="welcome">
            <WelcomeCardSection />
          </div>
          <div id="venue-contact">
            <VenueContactSection />
          </div>
          <Footer />
        </div>
      )}
      
      <BackToTopButton />
    </>
  );
}

export default App;