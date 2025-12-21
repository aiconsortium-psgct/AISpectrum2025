import React from 'react';
import styled from 'styled-components';
import { colors, typography } from './styles/commonStyles';

import yadatiImage from './assets/yadati.jpg';
import srinivasImage from './assets/srinivasa_padmanabhuni.jpg';
import milliImage from './assets/millie2.png';
import venkataImage from './assets/venkata.jpg';
import ferranteImage from './assets/ferrante.jpg';
import pabloImage from './assets/pablo.jpg';
import karthikVaidhyanathanImage from './assets/Dr.karthik.png';
import sudhaImage from './assets/sudha_R.png';
import srikanthImage from './assets/srikanth.jpg';
import anjaniImage from './assets/anjani.jpg';
import balajiImage from './assets/balaji.jpg';
import arunImage from './assets/arun.jpg';
import mukundImage from './assets/mukund.jpg';
import drsrinivasan from './assets/drsrinivasan.jpg';
import vidhya from './assets/vidhya.jpeg';
import praveenem from './assets/praveenem.jpg';
import vilas from './assets/vilas.jpg';
import sooriyan from './assets/sooriyan.jpg';
import badrinarayanan from './assets/badri_narayanan.jpg';
import aruna from './assets/aruna.jpg';
import saladin from './assets/saladin.jpg';
import asadin from './assets/asadin.jpg';
import JSB from './assets/JSB2.jpg';
import rajkumar from './assets/Rajkumar.jpg';
import devanand from './assets/deva.jpg';
import varun from './assets/varun.jpg';
import dakshin from './assets/dakshin.jpg';
import mahadevan from './assets/mahadevan.jpg';
import varun_hcl from './assets/varun_hcl.jpg';
import ananthakrishnan from './assets/ananthakrishnan.jpg';
import mohanbv from './assets/mohanbv.jpg';
import puthanial from './assets/puthainal.jpg';
import rajat from './assets/rajat.jpg';
import kapil from './assets/kapil.jpg';
import shankar from './assets/shankar.jpg';
import grk_mam from './assets/grk_mam.jpg';
import srinithi from './assets/srinithi.jpg';
import pal from './assets/pal.png';
const SectionContainer = styled.div`
  width: 100%;
  padding: 60px 0;
  background: linear-gradient(to bottom, #f8f9fa, #ffffff);
`;

const SectionTitle = styled.h2`
  font-family: ${typography.heading.fontFamily};
  font-size: 2.5rem;
  font-weight: 700;
  color: ${colors.blue};
  text-align: center;
  margin-bottom: 50px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: #D9A353;
    border-radius: 2px;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 0;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    width: 95%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 85%;
  }
`;

const SpeakerCard = styled.div`
  position: relative;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 400px;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 20px auto 0 auto;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border: 4px solid white;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  flex-shrink: 0;
  transform: translateZ(0);
  backface-visibility: hidden;
`;

const SpeakerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.5s ease;
  display: block;
  border-radius: 50%;
  transform: translateZ(0);
  backface-visibility: hidden;

  ${SpeakerCard}:hover & {
    transform: scale(1.05);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 50%, rgba(13, 88, 169, 0.9));
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 50%;
  transform: translateZ(0);
  backface-visibility: hidden;

  ${SpeakerCard}:hover & {
    opacity: 1;
  }
`;

const ContentContainer = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  text-align: center;
  margin-top: -20px;
`;

const SpeakerName = styled.h3`
  font-family: ${typography.heading.fontFamily};
  font-size: 1.4rem;
  font-weight: 600;
  color: ${colors.blue};
  margin: 0 0 10px 0;
`;

const SpeakerDesignation = styled.div`
  font-family: ${typography.body.fontFamily};
  font-size: 1rem;
  line-height: 1.5;
  color: #666;
  margin-bottom: 15px;
`;

const SpeakerLink = styled.a`
  display: inline-block;
  background: #D9A353;
  color: white;
  text-decoration: none;
  padding: 10px 25px;
  border-radius: 25px;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  text-align: center;
  margin-top: auto;

  &:hover {
    background: #c08a3f;
    transform: translateY(-2px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
  justify-content: center;
`;

const SocialLink = styled.a`
  color: ${colors.blue};
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #D9A353;
  }
`;
  const speakers = [
    {
    name: 'Shri Vilas Dhar',
    designation: 'President, Patrick J McGovern Foundation',
      iconUrl:vilas,
      link: 'https://www.linkedin.com/in/vilasdhar/',
    social: {
      linkedin: 'https://www.linkedin.com/in/vilasdhar/',
      twitter: '#',
      website: 'https://www.patrickjmcgovern.org/'
    }
    },
    {
    name: 'Prof. Yadati Narahari',
    designation: 'Honorary Professor, Department of CSA, IISC Bangalore',
      iconUrl: yadatiImage,
      link: 'https://gtl.csa.iisc.ac.in/hari',
    social: {
      linkedin: 'https://www.linkedin.com/in/yadati-narahari-0b0b0b0b/',
      twitter: '#',
      website: 'https://gtl.csa.iisc.ac.in/hari'
    }
    },
    {
    name: 'Dr Badri Narayanan Gopalakrishnan',
    designation: 'Founder, Infinite Sum Modelling<br/>Honorary Non Resident Fellow - NITI Aayog <br/>Govt of India',
      iconUrl:badrinarayanan,
      link: 'https://www.linkedin.com/in/badrinarayanang/',
    social: {
      linkedin: 'https://www.linkedin.com/in/badrinarayanang/',
      twitter: '#',
      website: 'https://www.linkedin.com/in/badrinarayanang/'
    }
    },
    {
    name: 'Mr Saldin Samuel',
    designation: 'Co-Founder - Haiva.ai, USA',
      iconUrl:saladin,
      link: 'https://www.linkedin.com/in/saldin-samuel-b68b03b/',
    social: {
      linkedin: 'https://www.linkedin.com/in/saldin-samuel-b68b03b/',
      twitter: '#',
      website: 'https://www.linkedin.com/in/saldin-samuel-b68b03b/'
    }
    },
    {
    name: 'Ms Aruna Jayaraman',
    designation: 'Co-Founder & COO - Haiva.ai, USA',
      iconUrl:aruna,
      link: 'https://www.linkedin.com/in/aruna-jayaraman-aj-0067058/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    social: {
      linkedin: 'https://www.linkedin.com/in/aruna-jayaraman-aj-0067058/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      twitter: '#',
      website: 'https://www.linkedin.com/in/aruna-jayaraman-aj-0067058/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    }
    },
    {
    name: 'Mr Mukund Bhoovaraghavan',
    designation: 'Principal Group Eng. Manager, Microsoft India',
    iconUrl: mukundImage,
    link: 'https://www.linkedin.com/in/mukundbhoovaraghavan/',
    social: {
      linkedin: 'https://www.linkedin.com/in/mukundbhoovaraghavan/',
      twitter: '#',
      website: '#'
    }
    },
    {
    name: 'Mr Sivavisakan sooriyan',
    designation: 'Co-Founder & CTO - Arcana , USA',
      iconUrl:sooriyan,
      link: 'https://www.linkedin.com/in/sivavisakan/',
    social: {
      linkedin: 'https://www.linkedin.com/in/sivavisakan/',
      twitter: '#',
      website: 'https://www.linkedin.com/in/sivavisakan/'
    }
    },
     {
    name: 'Mr Varun Kharbanda',
    designation: 'Global Director - Office of Responsible AI & Governance , HCL Technologies Ltd',
      iconUrl:varun_hcl,
      link: 'https://www.linkedin.com/in/varunkharbanda/',
    social: {
      linkedin: 'https://www.linkedin.com/in/varunkharbanda/',
      twitter: '#',
      website: 'https://www.linkedin.com/in/varunkharbanda/'
    }
    },
    {
    name: 'Shri R Ananthakrishnan',
    designation: 'Director of Software Engineering , Cisco Bangalore',
      iconUrl:ananthakrishnan,
      link: 'https://www.linkedin.com/in/ananthakrishnan-r-2980b74/?originalSubdomain=in',
    social: {
      linkedin: 'https://www.linkedin.com/in/ananthakrishnan-r-2980b74/?originalSubdomain=in',
      twitter: '#',
      website: 'https://www.linkedin.com/in/ananthakrishnan-r-2980b74/?originalSubdomain=in'
    }
    },
    {
      name: 'Dr Srinivas Padmanabhuni',
    designation: 'AI Advisor, Marax AI & Faculty, IIIT Lucknow ',
      iconUrl: srinivasImage,
      link: 'https://iiitl.ac.in/index.php/personnel/dr-srinivas-padmanabhuni/',
    social: {
      linkedin: 'https://www.linkedin.com/in/srinivas-padmanabhuni/',
      twitter: '#',
      website: 'https://iiitl.ac.in/index.php/personnel/dr-srinivas-padmanabhuni/'
    }
    },
    {
    name: 'Shri Dakshina Murthy Chunduri',
    designation: 'Software Engineering, CTO Organization,<br/> HCL Technologies Ltd',
      iconUrl: dakshin,
      link: 'https://www.linkedin.com/in/cdaks/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    social: {
      linkedin: 'https://www.linkedin.com/in/cdaks/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      twitter: '#',
      website: 'https://www.linkedin.com/in/cdaks/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    }
    },
    {
    name: 'Mr Mohan B V',
    designation: 'Vice president of Technology ,<br/>Bosch Global Software Technologies',
      iconUrl: mohanbv,
      link: 'https://www.linkedin.com/in/mohanbv?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    social: {
      linkedin: 'https://www.linkedin.com/in/cdaks/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      twitter: '#',
      website: 'https://www.linkedin.com/in/cdaks/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    }
    },
     {
      name: 'Dr Anjani Priyadarsini',
    designation: 'Quantum Lead, AWS India',
      iconUrl: anjaniImage,
    link: 'https://www.linkedin.com/in/dr-anjani-priyadarsini/',
    social: {
      linkedin: 'https://www.linkedin.com/in/dr-anjani-priyadarsini/',
      twitter: '#',
      website: '#'
    }
  },
  {
      name: 'Dr Shantanu Pal',
    designation: 'Lecturer, Emerging Technology Blockchain <br/> Deakin University',
      iconUrl: pal,
    link: 'https://experts.deakin.edu.au/60615-shantanu-pal',
    social: {
      linkedin: 'https://experts.deakin.edu.au/60615-shantanu-pal',
      twitter: '#',
      website: '#'
    }
  },
   {
      name: 'Dr G R Karpagam',
    designation: 'Director - PSG AI Consortium & Professor - CSE <br/>PSG College of Technology',
      iconUrl: grk_mam,
    link: 'https://www.linkedin.com/in/g-r-karpagam-68ab8353/',
    social: {
      linkedin: 'https://www.linkedin.com/in/g-r-karpagam-68ab8353/',
      twitter: '#',
      website: '#'
    }
  },
    {
      name: 'Dr Millie Pant',
    designation: 'Professor & Head, Dept. of Applied Mathematics and Scientific Computing , IIT Roorkee',
      iconUrl: milliImage,
      link: 'https://www.iitr.ac.in/~ASE/millifpt',
    social: {
      linkedin: 'https://www.linkedin.com/in/millie-pant-0b0b0b0b/',
      twitter: '#',
      website: 'https://www.iitr.ac.in/~ASE/millifpt'
    }
    },
    {
    name: 'Prof. Ferrante Neri',
    designation: 'Professor of ML & AI, University of Surrey',
      iconUrl: ferranteImage,
      link: 'https://www.surrey.ac.uk/people/ferrante-neri',
    social: {
      linkedin: 'https://www.linkedin.com/in/ferrante-neri-0b0b0b0b/',
      twitter: '#',
      website: 'https://www.surrey.ac.uk/people/ferrante-neri'
    }
    },
    {
      name: 'Dr Pablo Moscato',
    designation: 'Professor of Data Science, University of Newcastle',
      iconUrl: pabloImage,
      link: 'https://www.newcastle.edu.au/profile/pablo-moscato',
    social: {
      linkedin: 'https://www.linkedin.com/in/pablo-moscato-0b0b0b0b/',
      twitter: '#',
      website: 'https://www.newcastle.edu.au/profile/pablo-moscato'
    }
    },
    {
      name: 'Dr Karthik Vaidhyanathan',
    designation: 'Assistant Professor, IIIT Hyderabad',
      iconUrl: karthikVaidhyanathanImage,
      link: 'https://karthikvaidhyanathan.com/',
    social: {
      linkedin: 'https://www.linkedin.com/in/karthik-vaidhyanathan-0b0b0b0b/',
      twitter: '#',
      website: 'https://karthikvaidhyanathan.com/'
    }
    },
    {
      name: 'Mr Srikanth Subramanian',
    designation: 'VP, Engineering, Salesforce India',
      iconUrl: srikanthImage,
    link: 'https://www.linkedin.com/in/srikanth-subramanian/',
    social: {
      linkedin: 'https://www.linkedin.com/in/srikanth-subramanian/',
      twitter: '#',
      website: '#'
    }
    },
  {
    name: 'Dr. Srinivasan Aruchamy',
    designation: 'Principal Scientist - CSIR-CMERI',
    iconUrl: drsrinivasan,
    link: 'https://www.cmeri.res.in/user-details/1360',
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#'
    }
  },
  {
    name: 'Ms.Vidhya Subramanian',
    designation: 'Founder and CEO, Vistara LLC, USA',
    iconUrl: vidhya,
    link:'https://www.linkedin.com/in/vidhya-subramanian-bb7478/',
    social: {
      linkedin: 'https://www.linkedin.com/in/vidhya-subramanian-bb7478/',
      twitter: '#',
      website: '#'
  }
},
{
    name: 'Mr Kapilanjan EM',
    designation: 'Founder and CEO, Dossier.nexus',
    iconUrl: kapil,
    link:'https://www.linkedin.com/in/kapilanjan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    social: {
      linkedin: 'https://www.linkedin.com/in/vidhya-subramanian-bb7478/',
      twitter: '#',
      website: '#'
  }
},
{
  name: 'Mr. Praveen E M',
  designation: 'Senior Software Engineer , Microsoft Corporation USA',
  iconUrl: praveenem,
  link:'https://www.linkedin.com/in/praveenerodemurugesan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  social: {
    linkedin: '#',
      twitter: '#',
      website: '#'
  }
},
{
  name: 'Mr Shankar Gopalakrishnan',
  designation: 'Principal Software Engineer,DCN-Switching-India',
  iconUrl: shankar,
  link:'https://linkedin.com/in/shankar-gopalakrishnan-089a772',
  social: {
    linkedin: '#',
      twitter: '#',
      website: '#'
  }
},
{
    name: 'Mr Asadh Sheriff',
    designation: 'Director / Software Architect <br/> Otka , USA',
      iconUrl:asadin,
      link: 'https://www.linkedin.com/in/asadh-sheriff-59755419/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    social: {
      linkedin: 'https://www.linkedin.com/in/asadh-sheriff-59755419/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      twitter: '#',
      website: 'https://www.linkedin.com/in/asadh-sheriff-59755419/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    }
    },
    {
    name: 'Mr Mahadevan Sathappan',
    designation: 'Software Development Engineer , Amazon',
      iconUrl:mahadevan,
      link: '',
    social: {
      linkedin: '',
      twitter: '#',
      website: ''
    }
    },
    {
    name: 'Mr Rajat Misra',
    designation: ' Office of Responsible AI & Governance, <br/>HCL Technologies Ltd',
      iconUrl:rajat,
      link: 'https://www.linkedin.com/in/rajat-misra-pmp%C2%AE-csm%C2%AE-cspo%C2%AE-34a42914b/',
    social: {
      linkedin: 'https://www.linkedin.com/in/rajat-misra-pmp%C2%AE-csm%C2%AE-cspo%C2%AE-34a42914b/',
      twitter: '#',
      website: 'https://www.linkedin.com/in/rajat-misra-pmp%C2%AE-csm%C2%AE-cspo%C2%AE-34a42914b/'
    }
    },
    {
    name: 'Ms Puthanial Mariappan',
    designation: 'Responsible AI Solution Architect, <br/>HCL Technologies Ltd',
      iconUrl:puthanial,
      link: 'https://www.linkedin.com/in/puthanial-mariappan-425134268/',
    social: {
      linkedin: 'https://www.linkedin.com/in/puthanial-mariappan-425134268/',
      twitter: '#',
      website: 'https://www.linkedin.com/in/puthanial-mariappan-425134268/'
    }
    },
    {
    name: 'Ms Dhana Srinithi Srinivasan',
    designation: 'Data Scientist , Microsoft',
      iconUrl:srinithi,
      link: 'https://www.linkedin.com/in/dhana-srinithi-srinivasan/',
    social: {
      linkedin: 'https://www.linkedin.com/in/dhana-srinithi-srinivasan/',
      twitter: '#',
      website: 'https://www.linkedin.com/in/dhana-srinithi-srinivasan/'
    }
    },
];

const healthcareExperts = [
  {
    name: 'Dr J S Bhuvaneshwaran',
    designation: 'Director - PSG Hospitals',
    iconUrl: JSB,
    link: 'https://www.linkedin.com/in/drbhuvaneswaran-js-2822ab48/?originalSubdomain=in',
    social: {
      linkedin: 'https://www.linkedin.com/in/drbhuvaneswaran-js-2822ab48/?originalSubdomain=in',
      twitter: '#',
      website: 'https://www.linkedin.com/in/drbhuvaneswaran-js-2822ab48/?originalSubdomain=in'
    }
  },
  {
    name: 'Dr Sudha Ramalingam',
    designation: 'Professor & Head, PSG IMSR, India',
    iconUrl: sudhaImage,
    link: 'https://psgimsr.ac.in/old/community-medicine/dr-sudha-ramalingam/',
    social: {
      linkedin: 'https://www.linkedin.com/in/sudha-ramalingam-0b0b0b0b/',
      twitter: '#',
      website: 'https://psgimsr.ac.in/old/community-medicine/dr-sudha-ramalingam/'
    }
  },
  {
    name: 'Dr B Devanand',
    designation: 'Head of the Department of Radiology , PSG IMSR',
    iconUrl: devanand,
    link: 'https://psgimsr.ac.in/departments/clinical-departments/radiology/dr-b-devanand/',
    social: {
      linkedin: 'https://psgimsr.ac.in/departments/clinical-departments/radiology/dr-b-devanand/',
      twitter: '#',
      website: 'https://psgimsr.ac.in/departments/clinical-departments/radiology/dr-b-devanand/'
    }
  },
  {
    name: 'Dr Rajkumar K S',
    designation: 'Professor of  Surgical Oncology , PSG IMSR',
    iconUrl: rajkumar,
    link: 'https://www.linkedin.com/in/rajkumar-k-seenivasagam/',
    social: {
      linkedin: 'https://www.linkedin.com/in/rajkumar-k-seenivasagam/',
      twitter: '#',
      website: 'https://www.linkedin.com/in/rajkumar-k-seenivasagam/'
    }
  },
  {
    name: 'Dr M D Varun',
    designation: 'Department of Respiratory Medicine , PSG IMSR',
    iconUrl: varun,
    link: 'https://psgimsr.ac.in/departments/clinical-departments/respiratory-medicine/dr-varun-m-d/',
    social: {
      linkedin: 'https://psgimsr.ac.in/departments/clinical-departments/respiratory-medicine/dr-varun-m-d/',
      twitter: '#',
      website: 'https://psgimsr.ac.in/departments/clinical-departments/respiratory-medicine/dr-varun-m-d/'
    }
  }
];

const Speaker = () => {
  return (
    <>
      <SectionContainer>
        <SectionTitle>Keynote Speakers and Panelists</SectionTitle>
        <CardGrid>
          {speakers.map((speaker, index) => (
            <SpeakerCard key={index}>
              <ImageContainer>
              <SpeakerImage src={speaker.iconUrl} alt={speaker.name} />
                <Overlay />
              </ImageContainer>
              <ContentContainer>
                <div>
              <SpeakerName>{speaker.name}</SpeakerName>
              <SpeakerDesignation dangerouslySetInnerHTML={{ __html: speaker.designation }} />
                </div>
                <div>
              <SpeakerLink href={speaker.link} target="_blank" rel="noopener noreferrer">
                View Profile
              </SpeakerLink>
                  <SocialLinks>
                    <SocialLink href={speaker.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin"></i>
                    </SocialLink>
                    <SocialLink href={speaker.social.twitter} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter"></i>
                    </SocialLink>
                    <SocialLink href={speaker.social.website} target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-globe"></i>
                    </SocialLink>
                  </SocialLinks>
                </div>
              </ContentContainer>
            </SpeakerCard>
          ))}
        </CardGrid>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle>Experts from Healthcare</SectionTitle>
        <CardGrid>
          {healthcareExperts.map((expert, index) => (
            <SpeakerCard key={index}>
              <ImageContainer>
              <SpeakerImage src={expert.iconUrl} alt={expert.name} />
                <Overlay />
              </ImageContainer>
              <ContentContainer>
                <div>
              <SpeakerName>{expert.name}</SpeakerName>
              <SpeakerDesignation dangerouslySetInnerHTML={{ __html: expert.designation }} />
                </div>
                <div>
              <SpeakerLink href={expert.link} target="_blank" rel="noopener noreferrer">
                View Profile
              </SpeakerLink>
                  <SocialLinks>
                    <SocialLink href={expert.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin"></i>
                    </SocialLink>
                    <SocialLink href={expert.social.twitter} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter"></i>
                    </SocialLink>
                    <SocialLink href={expert.social.website} target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-globe"></i>
                    </SocialLink>
                  </SocialLinks>
                </div>
              </ContentContainer>
            </SpeakerCard>
          ))}
        </CardGrid>
      </SectionContainer>
    </>
  );
};

export default Speaker;
