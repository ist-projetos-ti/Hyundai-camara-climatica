import themeDefaults from '@style/themeDefaults';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 90%;

  h2 {
    color: ${themeDefaults.colors.darkPrimary};
  }
`;
