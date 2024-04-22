import styled, { css } from 'styled-components';
import themeDefaults from '../../../style/themeDefaults';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 auto;
  animation: ${({ theme }) => theme.animations.appearFromBottom} 0.6s;
  max-width: ${themeDefaults.breakpoints.md};
`;

export const Subtitle = styled.h2<{ isDesktop?: boolean }>`
  color: ${themeDefaults.colors.white};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 60px;
  font-style: italic;
  font-size: 20px;
  font-weight: 600;
  position: absolute;

  ${({ isDesktop }) =>
    isDesktop === false &&
    css`
      position: static;
    `}
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MobileLogoContainer = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 76px;
  align-items: center;
  margin-bottom: 0px;
`;

export const Content = styled.div`
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 200px;
`;
