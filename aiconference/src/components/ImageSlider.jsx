// import React, { useState, useEffect } from 'react';

import React from 'react';
import styled from 'styled-components';

// Google Drive video ID
const VIDEO_ID = "1SHZeOkhhXs6zA85UTtuZIuoJN3FD6NP9";

const VideoWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const VideoIframe = styled.iframe`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border: none;
  pointer-events: none;
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
      <VideoIframe
        src={`https://drive.google.com/file/d/${VIDEO_ID}/preview`}
        allow="autoplay"
        allowFullScreen
      />
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


