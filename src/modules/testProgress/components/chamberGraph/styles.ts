import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80%;
`;

export const ChamberInformationContent = styled.div`
  width: 100%;
  display: flex;
`;

export const ChamberGraphContent = styled.div`
  width: 100%;
  height: 85%;

  margin-top: 2rem;
`;

export const GraphContent = styled.div`
  width: 100%;
  height: 90%;
  overflow-x: scroll;
`;

export const SliderContent = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const SliderInformations = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    justify-content: space-around;

    width: 2.7%;

    p {
      font-size: 10px;
    }
  }
`;
