import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  max-width: 100%;
`;

export const LabelTitle = styled.span`
  color: ${({ theme }) => theme.colors.petroleumGreen};
  font-size: 18px;
  font-weight: bold;
`;

export const DateTimeInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: column;
  gap: 24px;
  height: 100%;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 191px;
  height: 43px;
  background-color: #efefef;
  padding-left: 16px;
  border-radius: 12px;
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 4px;
  gap: 4px;

  svg {
    size: 27;
  }
`;

export const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 9px;
  width: 68px;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 14px;
  font-weight: bold;
  height: 31px;
  margin: 0px 8px;
  margin-bottom: 4px;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

export const Section = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-end;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20px;
`;
