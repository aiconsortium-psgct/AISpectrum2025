// import React, { useState, useEffect } from 'react';

import React from 'react';
import styled from 'styled-components';

// For autoplay to work, video needs to be hosted on a service that allows direct streaming
// Google Drive doesn't support autoplay in embedded videos
// Alternative: Upload to Cloudinary (free), Vimeo, or use compressed local file
const VIDEO_ID = "1SHZeOkhhXs6zA85UTtuZIuoJN3FD6NP9";
const VIDEO_URL = `https://www.googleapis.com/drive/v3/files/${VIDEO_ID}?alt=media&key=AIzaSyDUm1VUpUKm_xMH7T_oN83aEqTJ8gPdWpc`;

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
      <Video 
        autoPlay 
        muted 
        loop 
        playsInline
        crossOrigin="anonymous"
      >
        <source src={VIDEO_URL} type="video/mp4" />
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


