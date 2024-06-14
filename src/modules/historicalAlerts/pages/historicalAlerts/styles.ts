import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 87%;
`;

export const TableHeader = styled.div`
  width: 100%;
  height: 42px;
  background-color: #efefef;
  border-radius: 10px;
  display: flex;
  margin-top: 30px;
`;

export const HeaderItem = styled.h1<{ width: number }>`
  height: 100%;
  width: ${({ width }) => width}%;

  display: flex;
  align-items: center;
  margin-left: 2rem;

  p {
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};

    @media (max-width: 1300px) {
      font-size: 14px;
    }

    @media (max-width: 1000px) {
      font-size: 12px;
    }
  }

  button {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
      color: #bfbfbf;
      p {
        color: #bfbfbf;
      }
    }
  }
`;

export const TableBody = styled.div`
  width: 100%;
  height: 90%;

  overflow: auto;
`;
