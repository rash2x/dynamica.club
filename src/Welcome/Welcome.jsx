import React from 'react';
import styled, { css } from 'styled-components';
import background from './dynamica-background.mp4';
import { ReactComponent as LogoSvg } from './logo.svg';
import { ReactComponent as TelegramLogoSvg } from './telegram-logo.svg';
import { ReactComponent as InstagramLogoSvg } from './instagram-logo.svg';
import { ReactComponent as YoutubeLogoSvg } from './youtube-logo.svg';
import useWindowSize from '../utils/useWindowSize';
import { generateMedia } from 'styled-media-query';

const media = generateMedia({
  huge: '1440px',
  large: '1170px',
  medium: '767px',
  small: '450px',
});

const Base = styled.div`
  width: 100vw;
  height: 100vh;

  ${media.lessThan('medium')`
    background: linear-gradient(180deg, #7C4DFF 0%, #4F1AE2 100%);
  `};
  
`;

const Background = styled.video.attrs({
  autoPlay: true,
  loop: true,
  muted: true,
  playsInline: true,
  src: background
})`
  position: absolute;
  z-index: -1;
  right: 0;
  bottom: 0;
  
  ${props => props.isLandscape && css`height: 100%;`}
  ${props => !props.isLandscape && css`width: 100%;`}
  
  ${media.lessThan('large')`
    right: -300px;
  `};
  
  ${media.lessThan('medium')`
    display: none;
  `};
`;

const Content = styled.div`
  max-width: 600px;
 
  padding: 100px 0 0 100px;
  
  ${media.lessThan('medium')`
    padding: 32px 32px 0 32px;
    max-width: auto;
  `}
`;

const Logo = styled(LogoSvg)`  
  width: 200px;
  border-radius: 12px;
`;

const Title = styled.h1`
  font-size: 56px;
  font-weight: 800;
  letter-spacing: -1.5px;
  
  strong {
    color: #7C4DFF;
  }
  
  span {
    color: #FF4081;
  }
  
  ${media.lessThan('medium')`
    font-size: 36px;
    
    strong {
      color: #fff;
    }
  `}
`;

const SocialButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  margin-top: 160px;
  
  ${media.lessThan('medium')`
    margin-top: 60px;
  `}
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
  
  ${media.lessThan('medium')`    
    font-size: 15px;
    padding: 0 20px 0 12px;
    height: 48px;
    
    svg {
      width: 24px;
      height: 24px;
      
      margin-right: 12px;
    }
  `}
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

const YoutubeButton = styled(SocialButton)`
  &:hover {
    background: #EB3223;
  }
`;

const Copyright = styled.div`
  position: absolute;
  bottom: 32px;
  left: 100px;
  
  
  font-size: 14px;
  
  
  ${media.lessThan('medium')`
    color: #fff;
    left: 32px;
  `}
`;

const Welcome = () => {
  const windowSize = useWindowSize();
  const isLandscape = windowSize.height / windowSize.width >= 0.5625;

  return (
    <Base>
      <Background isLandscape={isLandscape} />
      <Content>
        <Logo />
        <Title>Практикуй онлайн <strong>динамические медитации Ошо</strong></Title>

        <SocialButtons>
          <TelegramButton href="https://t.me/dynamica_club" target="_blank">
            <TelegramLogoSvg /> Добавляйся Telegram
          </TelegramButton>
          <InstagramButton href="https://instagram.com/dynamica_club" target="_blank">
            <InstagramLogoSvg /> Подписывайся на Instagram
          </InstagramButton>
          <YoutubeButton href="https://youtu.be/Ps_8MD2zb6A" target="_blank">
            <YoutubeLogoSvg /> Подкаст про динамику
          </YoutubeButton>
        </SocialButtons>
      </Content>
      <Copyright>2021 © Позволь себе все 😘</Copyright>
    </Base>
  )
}

export default Welcome;
