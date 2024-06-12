import styled, { css } from 'styled-components';

interface ContainerInterface {
  isError: boolean;
  disabled?: boolean;
  isFocused?: boolean;
  color?: string;
  darkMode?: boolean;
  variety?: boolean;
}

export const InputComponent = styled.input`
  background: transparent !important;
  text-align: center;
`;

export const Container = styled.div<ContainerInterface>`
  display: flex;
  width: 100%;

  align-content: center;
  border: #dedede solid 1px;
  border-radius: 10px;

  height: 43px;
  font-size: 14px;
  padding: 8px;
  width: 72px;
  ${({ variety }) =>
    variety &&
    css`
      width: 86px;
    `}
  transition: 0.2s ease all;
  cursor: text;

  ${({ theme, isError }) =>
    isError &&
    css`
      border-color: ${theme.colors.lightDanger};
    `}

  input:-webkit-autofill,
    textarea:-webkit-autofill,
    select:-webkit-autofill {
  }

  input {
    font-size: 14px;
    font-weight: 500;
    color: #757575;
    flex: 1;
    width: 80%;
    background: transparent;
    border: 0;
  }

  @media (max-width: 600px) {
    input {
      font-size: 1rem;
    }
  }
`;
