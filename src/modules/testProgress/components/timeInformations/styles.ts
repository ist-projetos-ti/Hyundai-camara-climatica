import styled from 'styled-components';

export const Container = styled.div`
  max-width: 40%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-right: 0.5rem;

  h3 {
    margin-right: 0.5rem;
    font-size: 14px;
  }
`;

export const DateTimeInformation = styled.div`
  width: 140px;
  height: 100%;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  margin-right: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 14px;
  }
`;
