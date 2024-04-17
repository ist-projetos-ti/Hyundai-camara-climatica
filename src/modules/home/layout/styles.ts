import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.breakpoints.md};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  animation: ${({ theme }) => theme.animations.appearFromBottom} 0.6s;
`;
