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
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.warmGrayBackground};
  width: fit-content;
  border-radius: 9px;
  position: relative;
`;

export const DateSelector = styled.span<IDateSelectorProps>`
  background-color: transparent;
  width: fit-content;
  min-width: 86px;
  display: flex;
  border-radius: 9px;
  margin: 5px;
  padding: 5px;
  height: 31px;
  transition: 200ms;
  align-items: center;
  justify-content: center;

  :nth-child(2n-1) {
    margin-right: 0;
  }

  ${({ selected, filledDate }) =>
    selected &&
    !filledDate &&
    css`
      background-color: ${({ theme }) => theme.colors.petroleumGreen};
      color: ${({ theme }) => theme.colors.white};
    `};

  ${({ selected }) =>
    !selected &&
    css`
      svg {
        color: ${({ theme }) => theme.colors.warmGrayMinus1};
      }
    `};

  svg {
    margin-right: 8px;
  }
`;

export const DateInputBox = styled.div<IDateInputContainerProps>`
  width: 350px;
  height: 105px;
  position: absolute;
  top: 50px;
  left: -81.5px;
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
  color: ${({ theme }) => theme.colors.warmGrayMinus1};
  padding: 5px;

  z-index: 100;
`;

export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.petroleumGreen};
  color: ${({ theme }) => theme.colors.white};
  padding: 10px;
  border-radius: 9px;
  width: 68px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  margin-top: 5%;
  margin-left: 2%;
`;

export const InputLabel = styled.p`
  color: ${({ theme }) => theme.colors.warmGrayMinus2};
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
`;

export const DateDivider = styled.span`
  display: flex;
  align-items: end;
  height: 45%;
  color: ${({ theme }) => theme.colors.warmGrayMinus1};
  font-weight: 500;
  font-size: 14px;
  width: fit-content;
  margin: 1px;
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
  width: 100%;
  display: flex;
  border-radius: 9px;
  margin: 5px;
  padding: 5px;
  height: 31px;
  transition: 200ms;
  align-items: center;
  justify-content: center;
`;

export const DateLabel = styled.p`
  color: ${({ theme }) => theme.colors.petroleumGreen};
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  padding: 2px;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 10px;
  position: absolute;
  bottom: 1%;
  right: 4%;
`;

export const InputBundle = styled.div`
  gap: 2px;
  display: flex;
`;
