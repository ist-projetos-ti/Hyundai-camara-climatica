import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  animation: ${({ theme }) => theme.animations.appearFromBottom} 0.6s;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 95%;
  height: 100%;
`;

export const Grid = styled.div`
  width: 95%;
  height: 100%;

  margin: auto;
`;

export const ContainerMobile = styled.div`
  flex: 1;
`;
