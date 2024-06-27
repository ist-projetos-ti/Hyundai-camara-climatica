import themeDefaults from '@style/themeDefaults';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 50px;

  margin-top: 1rem;

  display: flex;
  justify-content: space-between;
`;

export const InformationContent = styled.div`
  width: 75%;
  height: 100%;

  display: flex;
`;

export const ElapsedTimeContent = styled.div`
  width: 35%;
  height: 100%;

  display: flex;
  align-items: center;

  h3 {
    font-size: 14px;
    margin-right: 0.5rem;
  }

  b {
    font-size: 16px;
    margin: 1rem 5px 0px 5px;
  }
`;

export const NavigationButton = styled.button`
  width: 260px;
  height: 100%;

  border: 2px solid ${themeDefaults.colors.primary};
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  p {
    font-weight: bold;
    color: ${themeDefaults.colors.primary};
  }

  transition: 300ms;
  &:hover {
    transform: scale(1.1);
  }
`;
