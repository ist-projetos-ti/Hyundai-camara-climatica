import styled from 'styled-components';

export const Container = styled.div<{ color: string }>`
  max-width: 200px;
  height: 20px;

  display: flex;
  align-items: center;

  margin: 0 2rem 0 0;

  div {
    background-color: ${({ color }) => color};
    width: 14px;
    height: 14px;

    margin-right: 0.5rem;

    border-radius: 3px;
  }

  p {
    font-size: 14px;
  }
`;
