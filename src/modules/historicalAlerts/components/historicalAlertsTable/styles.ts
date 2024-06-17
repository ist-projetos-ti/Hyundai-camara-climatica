import styled from 'styled-components';

export const TableRow = styled.div`
  width: 100%;
  height: 54px;
  border: 2px solid #dedede;
  border-radius: 20px;
  margin-top: 10px;
  display: flex;
`;

export const TableItem = styled.div<{ width: number }>`
  height: 100%;
  width: ${({ width }) => width}%;

  display: flex;
  align-items: center;
  margin-left: 2rem;

  p {
    font-size: 14px;

    @media (max-width: 1300px) {
      font-size: 12px;
    }

    @media (max-width: 1000px) {
      font-size: 8px;
    }
  }
`;
