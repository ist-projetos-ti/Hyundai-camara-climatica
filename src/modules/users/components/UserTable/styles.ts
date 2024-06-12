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

  margin-bottom: 30px;
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
  height: 83px;
  border: 2px solid #dedede;
  border-radius: 20px;
  margin-top: 20px;

  display: flex;
`;

export const TableItem = styled.div<{ width: number }>`
  height: 100%;
  width: ${({ width }) => width}%;

  display: flex;
  align-items: center;
  margin-left: 2rem;
`;
