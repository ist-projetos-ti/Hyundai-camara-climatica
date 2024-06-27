import styled, { css } from 'styled-components';

interface ILabelContainerProp {
  largeSpacing?: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20px;
  }
`;

export const LabelContainer = styled.div<ILabelContainerProp>`
  color: ${({ theme }) => theme.colors.warmGrayMinus1};
  font-weight: bold;
  font-size: 14px;
  display: flex;
  align-items: center;
  padding: 5px;

  ${({ largeSpacing }) =>
    largeSpacing &&
    css`
      width: 40px;
      justify-content: space-between;
      margin-right: 7px;

      @media (max-width: 767px) {
        font-size: 10px;
      }
    `};
`;
export const ValuesContainer = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
`;

export const NumberContainer = styled.span`
  border: 1px solid #dedede;
  border-radius: 10px;
  width: 32.56px;
  height: 34.24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;

  :nth-child(3n - 2) {
    margin-right: 3px;
  }
`;
