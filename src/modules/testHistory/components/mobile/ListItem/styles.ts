import styled, { css } from 'styled-components';

interface IDateLabelProps {
  variety?: boolean;
}

interface ITestBox {
  isActive: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  margin-bottom: 4px;
`;

export const HeaderItem = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin: 8px;
  gap: 4px;
  align-items: flex-start;
`;

export const WrapButton = styled.button<ITestBox>`
  background-color: ${({ theme }) => theme.colors.warmGrayBackground};
  color: ${({ theme }) => theme.colors.primary};
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4.15px;

  transition: 0.5s;
  rotate: ${({ isActive }) => (isActive ? 90 : 0)}deg;
`;

export const Label = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  font-size: 14px;
`;

export const TextItem = styled.div`
  border: 2px solid;
  border-radius: 7px;
  padding: 10px;
  width: 100%;
  border-color: ${({ theme }) => theme.colors.warmGrayBackground};
  font-size: 18px;
  display: flex;
  gap: 8px;
`;

export const TestBox = styled.div<ITestBox>`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
  height: 100%;
  transition: 200ms;
  margin-bottom: 32px;
  ${({ isActive }) =>
    !isActive &&
    css`
      display: none;
    `};
`;

export const DateLabel = styled.div<IDateLabelProps>`
  color: ${({ theme }) => theme.colors.secondary};
  ${({ variety }) =>
    variety &&
    css`
      color: ${({ theme }) => theme.colors.danger};
    `}
`;

export const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  padding: 8px;
  font-size: 14px;
  font-weight: bold;
`;
