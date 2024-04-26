import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
`;

export const TableContent = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
`;

export const TableItem = styled.div`
  width: 100%;
  height: auto;

  margin-top: 2rem;
`;

export const ItemTop = styled.div`
  width: 100%;
  height: 2rem;

  display: flex;
  align-items: center;

  h2 {
    font-size: 16px;
    font-weight: bold;

    color: ${({ theme }) => theme.colors.primary};
    margin-left: 1rem;
  }
`;

export const ButtonStyled = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  background-color: #efefef;
  border-radius: 5px;

  svg {
    margin: auto;
  }
`;

export const ItemContent = styled.div`
  width: 100%;
  height: 3.5rem;
`;

export const OpenItemContent = styled.div``;
