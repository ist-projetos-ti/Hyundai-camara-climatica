/* eslint-disable no-nested-ternary */
import styled, { keyframes } from 'styled-components';

interface IContainerProps {
  size: 'sm' | 'md' | 'lg';
}

const spinner = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div<IContainerProps>`
  width: ${({ size }) =>
    size === 'sm' ? '20' : size === 'md' ? '40' : '50'}px;
  height: ${({ size }) =>
    size === 'sm' ? '20' : size === 'md' ? '40' : '50'}px;
`;

export const Arc = styled.div`
  width: 100%;
  height: 100%;
  border: 5px solid ${({ theme }) => theme.colors.spinnerPrimary};
  border-top: 5px solid ${({ theme }) => theme.colors.spinnerSecondary};
  border-radius: 50%;
  animation: ${spinner} 0.75s linear infinite;
`;
