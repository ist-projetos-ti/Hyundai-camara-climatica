import styled, { css } from 'styled-components';
import { PiEyeThin, PiEyeSlashThin } from 'react-icons/pi';
import { BsCheck } from 'react-icons/bs';
import { tint } from 'polished';

interface ContainerInterface {
  isError: boolean;
  disabled?: boolean;
  isFocused?: boolean;
  color?: string;
  darkMode?: boolean;
}

export const InputComponent = styled.input`
  background: transparent !important;
  border: 1px solid blue;
`;

export const Separator = styled.div`
  height: 40px;
  width: 1px;
  background: ${({ theme }) => theme.colors.loginInputColor};
  margin-right: 10px;
  margin-left: 5px;
`;

export const Container = styled.div<ContainerInterface>`
  display: flex;
  width: 100%;
  align-items: center;
  align-content: center;
  border: ${({ theme, color }) => color || theme.colors.primary} solid 1px;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  transition: 0.2s ease all;
  cursor: text;

  & > button {
    svg {
      color: ${({ theme }) => theme.colors.loginInputColor};
    }
  }

  ${({ theme, isFocused, darkMode }) =>
    isFocused &&
    css`
      border: solid 1px;
      border-color: ${darkMode
        ? theme.colors.lightSecondary
        : theme.colors.secondary};
    `}

  ${({ theme, isError, darkMode }) =>
    isError &&
    css`
      border-color: ${darkMode
        ? theme.colors.lightDanger
        : theme.colors.danger};
    `}

  ${({ theme, disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      color: ${theme.colors.inactive};
      border: ${theme.colors.inactive} solid 2px;
    `}

    input:-webkit-autofill,
    textarea:-webkit-autofill,
    select:-webkit-autofill {
  }

  input {
    font-size: 1.2em;
    flex: 1;
    width: 80%;
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme, color }) => color || theme.colors.primary};
      font-size: 17px;
      font-weight: 400;
    }

    color: ${({ theme, color }) => color || theme.colors.black};

    ${({ theme, disabled }) =>
      disabled &&
      css`
        cursor: not-allowed;
        color: ${theme.colors.inactive};

        &::placeholder {
          color: ${theme.colors.inactive};
        }
      `}
  }

  @media (max-width: 600px) {
    input {
      font-size: 1rem;
    }
  }
`;

export const CheckIcon = styled(BsCheck).attrs(() => ({
  size: 22,
}))`
  margin: 0 5px;
`;

export const CheckIconContainer = styled.span<{ darkMode?: boolean }>`
  svg {
    color: ${({ theme, darkMode }) =>
      darkMode ? tint(0.7, theme.colors.according) : theme.colors.according};
  }
`;

export const EyeIcon = styled(PiEyeThin).attrs(() => ({
  size: 22,
}))``;

export const ClosedEyeIcon = styled(PiEyeSlashThin).attrs(() => ({
  size: 22,
}))``;
