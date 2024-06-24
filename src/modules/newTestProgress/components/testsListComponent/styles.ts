import themeDefaults from '@style/themeDefaults';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 55px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 1rem;
`;

export const TestsListComponentInformations = styled.div`
  width: 100%;
  height: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    width: 55%;
    height: 100%;
    background-color: ${themeDefaults.colors.white};

    &::placeholder {
      text-align: center;
    }
  }
`;

export const LabelContent = styled.div`
  width: 25%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const TemperatureInformation = styled.div<{ color: string }>`
  width: 15%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ color }) => color};
`;
