import themeDefaults from '@style/themeDefaults';
import styled from 'styled-components';

export const Container = styled.div`
  width: 15%;
  height: 100%;

  display: flex;
  flex-direction: column;
  margin-left: 2rem;

  overflow-y: auto;
`;

export const CheckboxContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    color: ${themeDefaults.colors.warmGrayMinus1};
  }
`;
