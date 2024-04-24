import styled, { css } from 'styled-components';

interface IContainerProps {
  $outlined?: boolean;
  $alt?: boolean;
  disabled?: boolean;
  $loading?: boolean;
  size?: 'sm' | 'md' | 'lg';
  height?: string;
  color?: string;
  borderRadius?: number;
  secondary?: boolean;
}

interface ILabelContainerProps {
  isCentered?: boolean;
}

interface ILabelProps {
  color?: string;
}

export const Label = styled.p<ILabelProps>`
  font-weight: 700;
  line-height: 1;
  color: ${({ theme, color }) => color || theme.colors.white};
  margin-left: 12px;
  display: flex;
  align-items: center;
`;

export const LabelContainer = styled.span<ILabelContainerProps>`
  color: ${({ theme }) => theme.colors.white};
  svg {
    size: 28;
    margin-left: 12px;
    margin: 0;
  }
  display: flex;
  justify-content: center;

  svg {
    height: 20px;
  }
`;

export const Container = styled.button<IContainerProps>`
  height: ${({ size }) => (size === 'sm' ? 30 : size === 'md' ? 40 : 50)}px;
  min-width: 120px;
  width: 100%;
  height: ${({ height }) => height || '3.5em'};
  padding: 0px 12px;
  border-radius: ${({ borderRadius }) => `${borderRadius || '10'}px`};
  font-weight: black;
  font-size: 18px;
  border: 2px solid ${({ theme, color }) => color || theme.colors.primary};
  background-color: ${({ theme, color }) => color || theme.colors.primary};
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

  ${({ secondary }) =>
    secondary &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.primary};
      background-color: ${({ theme }) => theme.colors.white};
      p {
        color: ${({ theme }) => theme.colors.primary};
      }

      svg {
        color: ${({ theme }) => theme.colors.primary};
        width: 20px;
        height: 20px;
        margin: 0px;
      }

      p {
        margin-left: 4px;
      }
    `}
`;
