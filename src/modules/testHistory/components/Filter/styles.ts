import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const LabelTitle = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 18px;
  font-weight: bold;
`;

export const DateTimeInputContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 4px;
  height: 43px;
`;

export const Input = styled.input`
  width: 197px;
  height: 100%;
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
`;

export const Form = styled.form``;
