import React from 'react';
import styled from 'styled-components';
import background from './dynamica-background.mp4';

const Base = styled.div``;

const Background = styled.video.attrs({
  autoPlay: true,
  loop: true,
  muted: true,
  playsInline: true,
  src: background
})`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
`;

const Welcome = () => {
    return (
        <Base>
            <Background />
        </Base>
    )
}

export default Welcome;
