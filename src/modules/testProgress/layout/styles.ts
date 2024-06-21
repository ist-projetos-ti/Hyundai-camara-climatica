import styled, { css } from 'styled-components';

const backgroundValidation = () => css`
  background-color: ${document.title === 'NewTestProgress'
    ? '#fff'
    : '#EFEFEF'};
  overflow-y: scroll;
`;

const marginValidation = () => css`
  margin-left: ${document.title === 'NewTestProgress' ? 0 : 3}rem;
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  animation: ${({ theme }) => theme.animations.appearFromBottom} 0.6s;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${backgroundValidation()}
`;

export const Content = styled.div`
  width: 95%;
  height: 100%;
`;

export const Grid = styled.div`
  width: 95%;
  height: 100%;

  margin: auto;

  ${marginValidation()}
`;
