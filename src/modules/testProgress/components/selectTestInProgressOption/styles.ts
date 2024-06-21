import styled from 'styled-components';

export const Container = styled.button<{ show: boolean }>`
  width: 48%;
  height: 25%;
  background-color: white;

  display: ${({ show }) => (!show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;

  border-radius: 12px;

  p {
    text-transform: uppercase;
    font-size: 14px;
  }

  svg {
    margin-right: 8px;
  }
`;
