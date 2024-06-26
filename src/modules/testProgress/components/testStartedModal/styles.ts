import styled from 'styled-components';

export const ButtonContainer = styled.span<{
  variety: 'finished' | 'progress';
}>`
  color: ${({ variety, theme }) =>
    variety === 'progress' ? theme.colors.primary : theme.colors.white};

  &:hover {
    svg {
      color: ${({ variety, theme }) =>
        variety === 'progress' ? theme.colors.white : '#8B8B8B'};
    }
  }
`;
