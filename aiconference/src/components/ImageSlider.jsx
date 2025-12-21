// import React, { useState, useEffect } from 'react';

import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/images-college.jpg';

const VideoWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
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
      <BackgroundImage />
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


