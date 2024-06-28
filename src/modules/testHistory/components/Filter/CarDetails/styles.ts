import styled, { css } from 'styled-components';

interface IDateSelectorProps {
  selected?: boolean;
  filledDate?: boolean;
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
  width: fit-content;
  height: 43px;
  min-height: 43px;
  justify-content: space-around;
  background-color: #efefef;
  border-radius: 9px;
  position: relative;
  flex-wrap: nowrap;
  outline: none;
  transition: 200ms;

  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  z-index: 10;
`;

export const Selector = styled.span<IDateSelectorProps>`
  background-color: transparent;
  min-width: fit-content;

  display: flex;
  border-radius: 9px;
  margin: 5px;
  padding: 5px;
  height: 31px;
  transition: 200ms;
  align-items: center;
  justify-content: center;

  position: static;
  :first-child() {
    margin-left: 0px;
  }

  :nth-child(2n-1) {
    margin-right: 0;
  }
  svg {
    color: ${({ theme }) => theme.colors.warmGrayMinus1};
    margin-right: 8px;
  }

  ${({ selected, filledDate }) =>
    selected &&
    !filledDate &&
    css`
      background-color: #0d9f64;
      color: ${({ theme }) => theme.colors.white};

      svg {
        color: ${({ theme }) => theme.colors.white};
      }
    `};
`;

export const DateInputBox = styled.div<IDateInputContainerProps>`
  width: 333px;
  height: 72px;
  position: absolute;

  top: calc(100% + 10px);
  left: 0;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
  ${({ selected }) =>
    !selected &&
    css`
      display: none;
    `};

  color: black;
  align-items: center;
  justify-content: space-around;
  color: #757575;
  padding: 5px;
`;

export const SubmitButton = styled.button`
  background-color: #0d9f64;
  color: ${({ theme }) => theme.colors.white};
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
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const DateDivider = styled.span`
  display: flex;
  align-items: end;
  height: 45%;
  color: #757575;
  font-weight: 500;
  font-size: 14px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5px;
  width: 100%;
  height: 100%;
`;

export const Button = styled.button`
  background-color: transparent;
  width: fit-content;
  display: flex;
  border-radius: 9px;
  margin: 5px;
  padding: 5px;
  height: 31px;
  transition: 200ms;
  align-items: center;
  justify-content: center;
  width: fit-content;
  flex-wrap: nowrap;
  size: 14px;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 10px;
  position: absolute;
  bottom: 1%;
  right: 4%;
`;
