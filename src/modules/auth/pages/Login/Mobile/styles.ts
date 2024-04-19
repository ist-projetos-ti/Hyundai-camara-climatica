import themeDefaults from '@style/themeDefaults';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  max-width: 534px;
  padding: 37px;
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 3.7em;
  color: ${themeDefaults.colors.white};
  margin-bottom: 16px;
`;

export const LogoImg = styled.img`
  width: 340px;

  @media (max-width: ${themeDefaults.breakpoints.md}) {
    width: 280px;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 80px;
  max-width: 100%;

  @media (max-width: ${themeDefaults.breakpoints.md}) {
    gap: 40px;
    flex-direction: column;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`;

export const StyledLink = styled.p`
  width: 100%;
  color: ${themeDefaults.colors.white};
  text-decoration: underline;
  margin-left: 32px;
  margin-bottom: 24px;
  button {
    text-decoration: underline;
    font-size: 16px;
  }
`;
