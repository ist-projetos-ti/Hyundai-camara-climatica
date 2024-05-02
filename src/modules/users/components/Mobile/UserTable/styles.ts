import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
`;

export const TableContent = styled.div`
  width: 100%;
  height: 75vh;
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

  h1 {
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
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const OpenItemContent = styled.div<{ height: number }>`
  height: ${({ height }) => height}rem;
  width: 100%;

  transition: 1s;
  overflow: hidden;
`;

export const ButtonContent = styled.div`
  margin-top: 2rem;

  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  button {
    width: 40vw;
  }
`;
