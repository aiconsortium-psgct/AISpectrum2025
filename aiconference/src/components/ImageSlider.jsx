// import React, { useState, useEffect } from 'react';

import React from 'react';
import styled from 'styled-components';
import psgVideo from '../assets/psgvideo.mp4';

const VideoWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Video = styled.video`
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
      <Video autoPlay muted loop playsInline>
        <source src={psgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
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


