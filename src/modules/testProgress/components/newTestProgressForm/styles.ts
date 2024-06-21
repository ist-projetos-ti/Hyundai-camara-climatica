import themeDefaults from '@style/themeDefaults';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  margin-top: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FormContent = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
`;

export const TextAreaColumn = styled.div`
  width: 49%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ButtonAreaColumn = styled.div`
  width: 49%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const HideContent = styled.div`
  width: 100%;
  height: 5%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 1rem;

  button {
    color: ${themeDefaults.colors.primary};
    svg {
      margin: 3px 0 0 3px;
    }
  }
`;
export const ChamberInformationContent = styled.div`
  display: flex;
  align-items: flex-end;
`;
