import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  overflow: auto;

  overflow: auto;

  padding-right: 4px;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 11.42px;
    background-color: '#eeeeee';
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: white;
  }
`;

export const TableContainer = styled.div`
  width: 100%;
  height: 85%;
`;

export const SettingsSection = styled.div`
  display: flex;

  width: 100%;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  align-items: flex-start;
  gap: 20px;
  padding-bottom: 16px;
`;

export const Button = styled.button`
  text-transform: uppercase;
  width: 220px;
  height: 52px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: 14px;
  border-radius: 12px;

  svg {
    color: ${({ theme }) => theme.colors.white};
    margin-right: 8px;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 2%;
  right: 48px;
`;
