import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

export const FormContainer = styled.div`
  width: ${({ theme }) => theme.breakpoints.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  flex: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: ${({ theme }) => theme.breakpoints.sm};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`;

export const ButtonsContainer = styled.div`
  justify-content: flex-end;
  display: flex;
  gap: 1rem;
  width: 100%;
`;
