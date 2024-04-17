import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.white};

  box-shadow: ${({ theme }) => theme.shadows.outer};
`;

export const LogoContent = styled(Link)`
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }
`;

export const LogoTitleContent = styled.div`
  margin-left: 0.8rem;

  h1 {
    font-size: 2.25rem;
    font-weight: 600;

    @media (max-width: 1200px) {
      font-size: 2rem;
    }

    @media (max-width: 900px) {
      font-size: 1.5rem;
    }

    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }

  h4 {
    font-size: 0.85rem;
    font-weight: 400;
  }
`;

export const InformationsContent = styled.div`
  display: flex;
  align-items: center;

  > a {
    display: flex;
    align-items: center;

    > h4 {
      margin: 0 0.5rem;
    }

    svg {
      margin-right: 0.5rem;
    }

    &:nth-child(1) {
      margin-right: 1rem;
    }
  }
`;
