import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 20vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    margin-top: 3rem;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bolder;
  }
`;

export const Grid = styled.div`
  width: 90%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TopHeaderContent = styled.div`
  width: 100%;
  height: 2.5rem;

  display: flex;
  justify-content: space-between;

  div {
    display: flex;
  }
`;

export const HeaderButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
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
`;

export const NavigationButton = styled.button`
  background-color: transparent;
`;
