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

  svg {
    color: ${({ theme }) => theme.colors.primary};
    margin-left: 4px;
  }
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

  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 14px;
`;

export const DateLabel = styled.p``;
export const InitialTimeLabel = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 28px;
`;
export const FinalTimeLabel = styled.p`
  color: ${({ theme }) => theme.colors.danger};
  margin-right: 28px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  font-weight: bold;
`;
