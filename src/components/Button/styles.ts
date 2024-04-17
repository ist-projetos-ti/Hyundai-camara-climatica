import styled, { css } from 'styled-components';

interface IContainerProps {
  $outlined?: boolean;
  $alt?: boolean;
  disabled?: boolean;
  $loading?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Label = styled.p`
  font-weight: 700;
  line-height: 1;
  color: ${({ theme }) => theme.colors.white};
`;

export const Container = styled.button<IContainerProps>`
  height: ${({ size }) => (size === 'sm' ? 30 : size === 'md' ? 40 : 50)}px;
  min-width: 120px;
  width: 100%;
  height: 67px;
  padding: 0px 12px;
  border-radius: 10px;
  font-weight: black;
  font-size: 18px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primary};
  user-select: none;
  transition: 0.2s ease all;
  text-transform: uppercase;

  &:hover {
    filter: ${({ theme }) => theme.filters.hover};
  }

  &:active {
    filter: ${({ theme }) => theme.filters.active};
  }

  ${({ theme, $outlined }) =>
    $outlined &&
    css`
      background-color: ${theme.colors.white};

      ${Label} {
        color: ${theme.colors.primary};
      }
    `}

  ${({ theme, $alt }) =>
    $alt &&
    css`
      background-color: ${theme.colors.warmGray};
      border: 2px solid ${theme.colors.warmGray};

      ${Label} {
        color: ${theme.colors.warmGrayMinus3};
      }
    `}

  ${({ theme, disabled, $loading }) =>
    (disabled || $loading) &&
    css`
      border: 2px solid ${theme.colors.warmGray};
      background-color: ${theme.colors.warmGray};
      filter: none !important;

      ${Label} {
        color: ${theme.colors.warmGrayBackground};
      }
    `}

      ${({ $loading }) => $loading && 'cursor: progress;'}
      ${({ disabled }) => disabled && 'cursor: not-allowed;'}

  ${Label} {
    font-size: ${({ size }) =>
      size === 'sm' ? 16 : size === 'md' ? 18 : 20}px;
  }
`;
