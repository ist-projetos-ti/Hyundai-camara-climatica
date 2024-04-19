import { Link } from '@chakra-ui/react';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100px;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: 999;
  position: absolute;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  transition: 200ms;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    width: 300px;

    div {
      width: 300px;
    }

    p {
      width: 150px;
      font-size: 16px;
      display: block;
      margin-left: 10px;
      color: white;
    }
  }
`;

export const TopContainerOptions = styled.div`
  width: auto;
  height: 30vh;
  margin-top: 30px;

  svg {
    margin-left: 25px;
    color: #fff;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LinkStyled = styled(Link)`
  width: auto;
  height: 50px;
  padding-left: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    width: 0px;
    display: none;
    font-size: 0px;
  }

  &:hover {
    p {
      color: #01555b;
    }

    svg {
      color: #01555b;
    }
  }
`;

export const BottomContainerOptions = styled.div`
  width: auto;
  height: 10vh;
  margin-top: 30px;

  svg {
    margin-left: 25px;
    color: #fff;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
