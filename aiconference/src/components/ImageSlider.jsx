// import React, { useState, useEffect } from 'react';

import React from 'react';
import styled from 'styled-components';
// Video removed due to large file size (141MB)
// For production, host video on YouTube, Vimeo, or CDN
// import psgVideo from '../assets/psgvideo.mp4';

// Use a placeholder image instead
import placeholderImage from '../assets/images-college.jpg';

const VideoWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const FixedVideo = () => {
  return (
    <VideoWrapper>
      <Image src={placeholderImage} alt="PSG College" />
      <Overlay />
    </VideoWrapper>
  );
};

export default FixedVideo;

const FixedPhoto =() => {
  return (
    <ImageWrapper>
      <Image src={psgphoto} type="./assets/psg.png" />
    </ImageWrapper>
  )
}

export function ImageSlider() {
  return (
    <ImageWrapper>
      <Image src={psgphoto} type="./assets/psg.png" />
    </ImageWrapper>
  )
}


