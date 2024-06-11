import styled, { css } from 'styled-components';

interface IDateSelectorProps {
  selected?: boolean;
}

interface IDateInputContainerProps {
  selected?: boolean;
}

interface InputProps {
  variety?: 'year' | 'default';
  isInvalid?: boolean;
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

  :nth-child(2n-1) {
    margin-right: 0;
  }

  ${({ selected }) =>
    selected &&
    css`
      background-color: #0d9f64;
      color: white;
    `};

  svg {
    margin-right: 8px;
  }
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

export const SubmitButton = styled.button`
  background-color: #0d9f64;
  color: white;
  padding: 10px;
  border-radius: 9px;
  width: 68px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  margin-top: 3%;
`;

export const InputLabel = styled.p`
  color: #c1c1c1;
  font-size: 14px;
  text-align: center;
  width: 100%;
  margin: 0;
`;

export const InputGroup = styled.div<InputProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 86px;

  input {
    border: 1px solid #dedede;
    ${({ isInvalid }) =>
      isInvalid
        ? css`
            border-color: red;
          `
        : css`
            border-color: #dedede;
          `}
    border-radius: 10px;

    text-align: center;
    height: 43px;
    font-size: 14px;
    padding: 8px;
    width: 72px;

    ${({ variety }) =>
      variety === 'year' &&
      css`
        width: 86px;
      `}
  }
`;

export const DateDivider = styled.span`
  display: flex;
  align-items: end;
  height: 45%;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5px;
  width: 100%;
  height: 100%;
`;
