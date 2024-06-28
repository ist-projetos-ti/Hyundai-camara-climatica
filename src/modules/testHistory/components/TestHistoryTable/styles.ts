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
  padding-right: 8px;
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

  padding-right: 4px;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 11.42px;
    background-color: '#eeeeee';
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #dedede;
  }
`;

export const TableRow = styled.button`
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
  max-width: ${({ width }) => width}%;

  display: flex;
  align-items: center;
  margin-left: 2rem;
  text-align: left;
  min-width: auto;
  max-width: 100%;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  svg {
    color: ${({ theme }) => theme.colors.primary};
    width: 18px;
    height: 18px;
  }

  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 14px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
