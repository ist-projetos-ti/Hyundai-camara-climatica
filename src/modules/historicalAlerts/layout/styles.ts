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

  @media (max-width: 1400px) {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;

export const Grid = styled.div`
  width: 95%;
  height: 100%;

  margin: auto;

  @media (max-width: 1400px) {
    margin: 0;
    padding: 0px 20px;
    width: 91%;
  }

  @media (max-width: 950px) {
    margin: 0;
    padding: 0px 20px;
    width: 89%;
  }
`;

export const ContainerMobile = styled.div`
  flex: 1;
`;
