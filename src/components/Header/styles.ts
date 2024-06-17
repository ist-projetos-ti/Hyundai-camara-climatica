import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 92px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  h1 {
    font-size: 24px;
    color: #0b99a4;
    font-weight: bold;
  }
`;

export const Content = styled.div`
  width: 23%;
  height: auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonStyle = styled.div`
  display: flex;

  button {
    width: 50px;
    height: 50px;
    background-color: #dedede;
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 15px;
    transition: 500ms;

    &:hover {
      transform: scale(1.1);
    }

    svg {
      color: #0b99a4;
    }
  }
`;

export const UserInformation = styled.div`
  color: #0b99a4;
  text-align: right;

  h2 {
    font-size: 20px;
  }
`;
