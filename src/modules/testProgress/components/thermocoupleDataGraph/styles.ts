import styled from 'styled-components';

export const Container = styled.div<{ isTestHistory?: boolean }>`
  width: 100%;
  height: ${({ isTestHistory }) => (isTestHistory ? 100 : 70)}%;

  display: flex;
`;

export const ThermocoupleGraphContent = styled.div`
  width: 85%;
  height: 100%;
`;

export const SliderContent = styled.div`
  margin-top: 1rem;
`;

export const SliderInformations = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    justify-content: space-around;

    width: 2.7%;

    p {
      font-size: 10px;
    }
  }
`;
