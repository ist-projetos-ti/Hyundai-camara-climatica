import styled, { css } from 'styled-components';

interface IDateSelectorProps {
  selected?: boolean;
}

interface IDateInputContainerProps {
  selected?: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #efefef;
  width: 190px;
  border-radius: 9px;
`;

export const DateSelector = styled.span<IDateSelectorProps>`
  background-color: transparent;
  width: 100%;
  display: flex;
  border-radius: 9px;
  margin: 5px;
  padding: 5px;
  height: 31px;
  transition: 200ms;
  align-items: center;
  justify-content: center;

  position: relative;
  p {
    margin-left: 6px;
  }

  :nth-child(2n-1) {
    margin-right: 0;
  }

  ${({ selected }) =>
    selected &&
    css`
      background-color: #0d9f64;
      color: white;
    `};

  /* &:hover {
    cursor: pointer;
  } */
`;

export const DateInputBox = styled.div<IDateInputContainerProps>`
  width: 440px;
  height: 105px;
  position: absolute;
  top: 40px;
  left: 0;
  border-radius: 18px;

  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
  ${({ selected }) =>
    !selected &&
    css`
      display: none;
    `};

  color: black;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #757575;
  padding: 5px;
`;

export const Input = styled.input`
  width: 50%;
  border: 1px solid #dedede;
  border-radius: 10px;

  text-align: center;
  height: 43px;
`;

export const SubmitButton = styled.button`
  background-color: #0d9f64;
  color: white;
  padding: 10px;
  border-radius: 9px;
  width: 168px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

export const InputLabel = styled.p`
  text-align: center;
  color: #c1c1c1;
  font-size: 14px;
`;
export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
