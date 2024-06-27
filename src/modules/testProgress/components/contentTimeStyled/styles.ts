import themeDefaults from '@style/themeDefaults';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    font-size: 12px;
  }

  div {
    display: flex;

    p {
      width: 32px;
      height: 32px;

      border-radius: 10px;
      border: 1px solid ${themeDefaults.colors.primary};

      display: flex;
      align-items: center;
      justify-content: center;

      margin: 0px 2px;
    }
  }
`;
