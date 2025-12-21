import React from 'react';
import styled, { keyframes } from 'styled-components';
import testimonialImage from './assets/5856.jpg';
import XiaoImage from './assets/Xiao.png';
import drsrinivasan from "./assets/drsrinivasan.jpg";


// Theme object
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

const slideAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const TestimonialsContainer = styled.section`
  padding: 80px 0;
  background: ${colors.blue};
  overflow: hidden;
  position: relative;
`;

const TestimonialsTitle = styled.h2`
  font-family: ${typography.heading.fontFamily};
  font-size: 3rem;
  font-weight: 100;
  text-align: center;
  margin-bottom: 50px;
  color: ${colors.yellow};
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
`;

const TestimonialsTrack = styled.div`
  display: flex;
  animation: ${slideAnimation} 30s linear infinite;
  width: fit-content;
`;

const TestimonialsGroup = styled.div`
  display: flex;
  gap: 30px;
  padding: 0 15px;
`;

const TestimonialCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 30px;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const TestimonialImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

const TestimonialContent = styled.div`
  text-align: center;
  color: ${colors.white};
`;

const TestimonialText = styled.p`
  font-family: ${typography.body.fontFamily};
  font-size: 1.1em;
  line-height: 1.6;
  margin-bottom: 15px;
  font-style: italic;
  color: ${colors.white};
`;

const TestimonialName = styled.h4`
  font-family: ${typography.heading.fontFamily};
  font-size: 1.2em;
  margin: 0;
  color: ${colors.yellow};
`;

const TestimonialRole = styled.p`
  font-family: ${typography.body.fontFamily};
  font-size: 0.9em;
  color: ${colors.white};
  opacity: 0.9;
  margin: 5px 0 0;
`;

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Srinivasan Aruchamy ",
      role: "Principal Scientist, Underwater Robotics and Autonomous Systems Group , CSIR-CMERI, India",
      text: "As an AI practitioner, I see AI Spectrum 2025 as a unique space where innovation meets application. It offers rich learning experiences and the chance to collaborate with leaders from both academia and industry.",
      image: drsrinivasan
    },
    {
      name: "Prof. Dr. Xiao-Zhi Gao",
      role: "University of Eastern Finland, Finland",
      text: "As a professional in the AI space, I believe AI Spectrum 2025 represents a fantastic opportunity for growth and collaboration. It is perfectly designed to bridge academic advancements with practical industry needs, providing a dynamic environment for learning and forming valuable connections.",
      image: XiaoImage
    },
    {
      name: "John Smith",
      role: "AI Researcher",
      text: "The conference was an incredible platform for sharing knowledge and networking with industry experts. The quality of presentations was outstanding.",
      image: testimonialImage
    },
    {
      name: "Sarah Johnson",
      role: "Data Scientist",
      text: "I was impressed by the depth of discussions and the opportunity to connect with like-minded professionals. A truly enriching experience.",
      image: testimonialImage
    },
    {
      name: "Michael Chen",
      role: "Machine Learning Engineer",
      text: "The conference provided valuable insights into the latest AI trends and technologies. The networking opportunities were exceptional.",
      image: testimonialImage
    },
    {
      name: "Emily Brown",
      role: "AI Consultant",
      text: "An excellent platform for learning and collaboration. The sessions were well-organized and the speakers were highly knowledgeable.",
      image: testimonialImage
    },
    {
      name: "David Wilson",
      role: "Research Scientist",
      text: "The conference exceeded my expectations. The quality of research presented and the discussions were truly inspiring.",
      image: testimonialImage
    },
  ];

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <TestimonialsContainer>
      <TestimonialsTitle>What People Say</TestimonialsTitle>
      <TestimonialsTrack>
        <TestimonialsGroup>
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <TestimonialImage src={testimonial.image} alt={testimonial.name} />
              <TestimonialContent>
                <TestimonialText>"{testimonial.text}"</TestimonialText>
                <TestimonialName>{testimonial.name}</TestimonialName>
                <TestimonialRole>{testimonial.role}</TestimonialRole>
              </TestimonialContent>
            </TestimonialCard>
          ))}
        </TestimonialsGroup>
      </TestimonialsTrack>
    </TestimonialsContainer>
  );
};

export default Testimonials; 