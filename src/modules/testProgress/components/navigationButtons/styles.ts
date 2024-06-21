import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;

  margin-top: 1rem;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ButtonContent = styled.button`
  width: 250px;
  height: 43px;
  margin: 1rem 0rem;

  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  transition: 300ms;
  &:hover {
    transform: scale(1.1);
  }
`;
