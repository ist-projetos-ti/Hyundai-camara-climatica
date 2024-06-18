import styled from 'styled-components';

export const Form = styled.form`
  h3 {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;

    margin-left: 2rem;
    margin-top: 25px;

    @media (max-width: 768px) {
      margin-left: 0;
    }
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

    @media (max-width: 768px) {
      margin-left: 0;
    }
  }
`;
