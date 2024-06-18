import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: calc(100% + 32px);
  gap: 8px;
`;

export const LabelTitle = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 18px;
  font-weight: bold;
`;

export const DateTimeInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  height: 43px;
`;

export const Input = styled.input`
  width: 197px;
  height: 100%;
  background-color: #efefef;

  padding-left: 2rem;

  border-radius: 15px;
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 4px;
  gap: 4px;
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
