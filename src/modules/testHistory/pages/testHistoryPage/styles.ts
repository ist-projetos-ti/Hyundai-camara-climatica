import themeDefaults from '@style/themeDefaults';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 90%;

  h2 {
    color: ${themeDefaults.colors.darkPrimary};
  }
`;

export const ChamberInformationsContent = styled.div`
  width: 100%;
  display: flex;

  margin: 2rem 0;
`;

export const TestHistoryGraphContent = styled.div`
  width: 100%;
  height: 85%;

  margin-top: 2rem;
`;
