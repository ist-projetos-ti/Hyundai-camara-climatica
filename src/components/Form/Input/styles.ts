// import { FiAlertCircle } from 'react-icons/fi';
import styled, { css } from 'styled-components';
import { PiEyeThin, PiEyeSlashThin } from 'react-icons/pi';

import { BsCheck } from 'react-icons/bs';

interface ContainerInterface {
  isError: boolean;
  disabled?: boolean;
  isFocused?: boolean;
  color?: string;
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

  ${({ theme, isFocused }) =>
    isFocused &&
    css`
      border: ${theme.colors.secondary} solid 1px;
    `}

  ${({ theme, isError }) =>
    isError &&
    css`
      border-color: ${theme.colors.danger};
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
    /* -webkit-box-shadow: 0 0 0 30px ${({ theme }) =>
      theme.colors.primary} inset !important; */
    /* -webkit-text-fill-color: black !important; */
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

export const CheckIcon = styled(BsCheck).attrs(({ theme }) => ({
  color: `${theme.colors.according}`,
  size: 22,
}))`
  margin: 0 5px;
`;

export const EyeIcon = styled(PiEyeThin).attrs(() => ({
  size: 22,
}))``;

export const ClosedEyeIcon = styled(PiEyeSlashThin).attrs(() => ({
  size: 22,
}))``;
