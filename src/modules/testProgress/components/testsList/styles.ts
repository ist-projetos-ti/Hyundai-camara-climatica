import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  border: black 2px solid;

  margin-top: 1rem;

  display: flex;
  flex-direction: column;

  h2 {
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export const TitleArea = styled.div`
  width: 100%;
  height: auto;

  display: flex;

  h2 {
    width: 35%;
  }
`;

export const ListArea = styled.div`
  width: 100%;
  height: 95%;

  border: 2px red solid;

  display: flex;
`;

export const IRLampsColumn = styled.div`
  width: 33%;
  height: 100%;
`;

export const DividerArea = styled.div`
  width: 2rem;
  height: 100%;

  display: flex;
  justify-content: center;
`;

export const ThermocouplesColumn = styled.div`
  width: 66%;
  height: 100%;

  display: flex;
`;

export const Columns = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
`;
export const FirstColumn = styled.div`
  width: 50%;
`;
export const SecondColumn = styled.div`
  width: 50%;
`;
