import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const TableHeader = styled.div`
  width: 100%;
  height: 42px;
  background-color: #efefef;
  border-radius: 10px;

  display: flex;
`;

export const HeaderItem = styled.h1<{ width: number }>`
  height: 100%;
  width: ${({ width }) => width}%;

  display: flex;
  align-items: center;
  margin-left: 2rem;

  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

export const TableBody = styled.div`
  width: 100%;
  height: 95%;

  overflow: auto;
`;

export const TableRow = styled.div`
  width: 100%;
  height: 48px;
  border: 2px solid #dedede;
  border-radius: 10px;
  margin-top: 8px;

  display: flex;
`;

export const TableItem = styled.div<{ width: number }>`
  height: 100%;
  width: ${({ width }) => width}%;

  display: flex;
  align-items: center;
  margin-left: 2rem;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    width: 18px;
    height: 18px;
  }
`;
