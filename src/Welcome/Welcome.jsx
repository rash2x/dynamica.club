import React from 'react';
import styled, { css } from 'styled-components';
import background from './dynamica-background.mp4';
import { ReactComponent as LogoSvg } from './logo.svg';
import { ReactComponent as TelegramLogoSvg } from './telegram-logo.svg';
import { ReactComponent as InstagramLogoSvg } from './instagram-logo.svg';
import useWindowSize from '../utils/useWindowSize';

const Base = styled.div``;

const Background = styled.video.attrs({
  autoPlay: true,
  loop: true,
  muted: true,
  playsInline: true,
  src: background
})`
  position: absolute;
  zIndex: -1;
  right: 0;
  bottom: 0;
  
  ${props => props.isLandscape && css`height: 100%;`}
  ${props => !props.isLandscape && css`width: 100%;`}
  
`;

const Content = styled.div`
  max-width: 800px;
  
  position: absolute;
  top: 100px;
  left: 100px;
`;

const Logo = styled(LogoSvg)`  
  width: 200px;
  border-radius: 12px;
`;

const Title = styled.h1`
  font-size: 68px;
  font-weight: 800;
  letter-spacing: -1.5px;
  
  strong {
    color: #7C4DFF;
  }
  
  span {
    color: #FF4081;
  }
`;

const SocialButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  margin-top: 120px;
`;

const SocialButton = styled.a`
  background: #121212;
  display: flex;
  height: 56px;
  border-radius: 8px;
  
  padding: 0 24px 0 12px;
  
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  
  & + & {
    margin-top: 16px;
  }
  
  svg {
    fill: #fff;
    width: 32px;
    height: 32px;
    
    margin-right: 16px;
  }
`;

const TelegramButton = styled(SocialButton)`
  
  &:hover {
    background: linear-gradient(180deg, #2AABEE 0%, #229ED9 99.26%);
  }

`;

const InstagramButton = styled(SocialButton)`
  &:hover {
    background: linear-gradient(228deg,#1400c8 0%,#b900b4 51%,#f50000 100%);
  }
`;

const Welcome = () => {

  const windowSize = useWindowSize();
  const isLandscape = windowSize.height / windowSize.width >= 0.5625;

  console.log(isLandscape);



  return (
    <Base>
      <Background isLandscape={isLandscape} />
      <Content>
        <Logo />
        <Title>Практикуй онлайн <strong>динамические медитации Ошо 🌊</strong></Title>

        <SocialButtons>
          <TelegramButton href="https://t.me/dynamica_club" target="_blank">
            <TelegramLogoSvg /> Добавляйся Telegram
          </TelegramButton>
          <InstagramButton href="https://instagram.com/dynamica_club" target="_blank">
            <InstagramLogoSvg /> Подписывайся на Instagram
          </InstagramButton>
        </SocialButtons>
      </Content>

    </Base>
  )
}

export default Welcome;
