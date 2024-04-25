import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const TableContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 50px;
`;

export const Form = styled.form`
  h3 {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;

    margin-left: 2rem;
    margin-top: 25px;
  }

  input {
    width: 100%;
    height: 54px;
    background-color: #efefef;

    padding-left: 2rem;

    border-radius: 15px;
  }

  h2 {
    height: 54px;
    display: flex;
    align-items: center;
    margin-left: 2rem;
  }
`;
