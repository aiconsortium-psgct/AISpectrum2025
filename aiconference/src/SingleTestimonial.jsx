import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import Slider from 'react-slick';
import testimonialImage1 from './assets/image.png';
import testimonialImage2 from './assets/image2.png';
import sugunanthanImage from './assets/sugananthan.jpg';
import xiaoImage from './assets/Xiao.png';
import diegoImage from './assets/diego.png';
import ganeshImage from './assets/ganesh.png';
import drsrinivasan from "./assets/drsrinivasan.jpg";

const colors = {
  white: '#ffffff',
  yellow: '#D9A353',
  blue: '#0d58a9'
};

const typography = {
  heading: {
    fontFamily: "'Poppins', sans-serif"
  },
  body: {
    fontFamily: "'Inter', sans-serif"
  }
};

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const TestimonialsContainer = styled.section`
  padding: 80px 0;
  background: ${colors.blue};
  text-align: center;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

const TestimonialsTitle = styled.h2`
  font-family: ${typography.heading.fontFamily};
  font-size: 3rem;
  font-weight: 100;
  color: ${colors.yellow};
  margin-bottom: 50px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: ${colors.yellow};
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }
`;

const TestimonialCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 40px;
  width: 1200px;
  margin: 0 auto;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  gap: 40px;
  animation: ${slideIn} 0.8s ease forwards;

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
  }
`;

const TestimonialImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center top;
  box-shadow: 0 0 20px ${colors.yellow};
  transition: all 0.5s ease;
  cursor: pointer;

  &.ganesh-image {
    object-position: center 20%;
  }

  &:hover {
    width: 400px;
    height: 100%;
    border-radius: 15px;
    transform: translateX(-20px);
    filter: saturate(110%);
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    margin: 0 auto;

    &:hover {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      transform: none;
    }
  }
`;

const TestimonialContent = styled.div`
  color: ${colors.white};
  flex: 1;
  text-align: left;
  padding: 20px;

  @media (max-width: 768px) {
    text-align: center;
    padding: 10px;
  }
`;

const TestimonialText = styled.p`
  font-family: ${typography.body.fontFamily};
  font-size: 1.1em;
  line-height: 1.6;
  margin-bottom: 15px;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 1em;
    line-height: 1.4;
  }
`;

const TestimonialName = styled.h4`
  font-family: ${typography.heading.fontFamily};
  font-size: 1.2em;
  color: ${colors.yellow};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.1em;
  }
`;

const TestimonialRole = styled.p`
  font-family: ${typography.body.fontFamily};
  font-size: 0.9em;
  color: ${colors.white};
  opacity: 0.9;
  margin-top: 5px;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

// Slider config
const sliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 400,           // smooth transition
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,  // 3 seconds per card
  cssEase: 'linear',
  pauseOnHover: false,  // we'll control hover manually
};

const testimonials = [
  {
    name: "Dr. Badri N Subudhi",
    role: "Indian Institute of Technology Jammu, India",
    text: "AI Spectrum 2025 is where tomorrow's AI breakthroughs begin—uniting researchers, industry, and innovators to explore AI's origins, impact, future trends, and disruptive applications. More than just a conference, it's a nexus of interdisciplinary knowledge exchange and real‑world impact.",
    image: testimonialImage1
  },
  {
    name: "Prof. Dr. Liang Zhou",
    role: "Shanghai Intelligent Medical Devices and Active Health Collaborative Innovation Center, China",
    text: "AI Spectrum 2025 as it fosters global collaboration, open dialogue, and inclusivity in the AI research ecosystem. It stands as a platform poised to be a Launchpad for next-generation ideas and bold innovations in AI.",
    image: testimonialImage2
  },
  {
    name: "Prof. Dr. P N Suganthan",
    role: "Qatar University, Qatar",
    text: "This conference promises an unparalleled experience in exploring the frontiers of AI. From cutting-edge research to real-world industry applications across diverse tracks like AI Genesis and AI Impact, AI Spectrum 2025 is where future collaborations are truly forged.",
    image: sugunanthanImage
  },
  {
    name: "Prof. Dr. Xiao-Zhi Gao",
    role: "University of Eastern Finland, Finland",
    text: "As a professional in the AI space, I believe AI Spectrum 2025 represents a fantastic opportunity for growth and collaboration. It is perfectly designed to bridge academic advancements with practical industry needs, providing a dynamic environment for learning and forming valuable connections.",
    image: xiaoImage
  },
  {
    name: "Prof. Dr.Diego Oliva",
    role: "Universidad de Guadalajara, Mexico",
    text: "AI Spectrum 2025 is an excellent event for learning about the latest developments in AI and connecting with experts from diverse global perspectives. This event also provides the opportunity to explore theoretical and practical applications of AI directly from the experts.",
    image: diegoImage
  },
  {
    name: "Mr.Ganesh S. Rao",
    role: "Head of R&D, Advanced Driver Assistance Systems (ADAS) Engineering, Continental Autonomous Mobility India Private Limited, India",
    text: "AI is not just transforming mobility; it is redefining the boundaries of safety and connectivity. With Artificial Intelligence becoming the key driver for enhancing functions and usability in the car and beyond, it is important that AI remains Ethical, Progressive, Innovative, and of high Quality - EPIQ in every sense. Therefore, AI Spectrum plays a significant role in promoting collaboration between academia, industry, and policymakers to shape a future where AI is not only intelligent but also trustworthy and sustainable.",
    image: ganeshImage
  },
  {
    name: "Dr. Srinivasan Aruchamy ",
    role: "Principal Scientist, Underwater Robotics and Autonomous Systems Group , CSIR-CMERI, India",
    text: "As an AI practitioner, I see AI Spectrum 2025 as a unique space where innovation meets application. It offers rich learning experiences and the chance to collaborate with leaders from both academia and industry.",
    image: drsrinivasan
  }
];

const TestimonialsSlider = () => {
  const sliderRef = useRef(null);

  return (
    <TestimonialsContainer>
      <TestimonialsTitle>Expert Opinions on AI Spectrum 2025</TestimonialsTitle>
      <Slider ref={sliderRef} {...sliderSettings}>
        {testimonials.map((item, idx) => (
          <div key={idx}>
            <TestimonialCard
              onMouseEnter={() => sliderRef.current?.slickPause()}
              onMouseLeave={() => sliderRef.current?.slickPlay()}
            >
              <TestimonialImage 
                src={item.image} 
                alt={item.name} 
                className={item.name === "Mr.Ganesh S. Rao" ? "ganesh-image" : ""}
              />
              <TestimonialContent>
                <TestimonialText>"{item.text}"</TestimonialText>
                <TestimonialName>{item.name}</TestimonialName>
                <TestimonialRole>{item.role}</TestimonialRole>
              </TestimonialContent>
            </TestimonialCard>
          </div>
        ))}
      </Slider>
    </TestimonialsContainer>
  );
};

export default TestimonialsSlider;
