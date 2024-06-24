import themeDefaults from '@style/themeDefaults';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 90%;

  h2 {
    color: ${themeDefaults.colors.darkPrimary};
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 20vh;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    width: 200px;

    :hover {
      background-color: ${themeDefaults.colors.black};
      color: ${themeDefaults.colors.white};
    }
  }

  button:nth-child(2) {
    margin-left: 1rem;
    :hover {
      background-color: ${themeDefaults.colors.primary};
    }
  }
`;
