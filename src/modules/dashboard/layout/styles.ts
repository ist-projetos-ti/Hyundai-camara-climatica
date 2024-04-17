import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 1rem;
  flex: 1;
  animation: ${({ theme }) => theme.animations.appearFromBottom} 0.6s;
  width: 100%;
  overflow: auto;
`;
