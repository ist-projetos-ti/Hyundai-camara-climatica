/* eslint-disable react/no-array-index-key */
import React from 'react';
import { PrivatePathsEnum } from '@routes/privateRoutes/privatePaths';
import { useNavigate } from 'react-router-dom';
import { ButtonContent, Container } from './styles';

const buttons = [
  {
    title: 'VIN',
  },
  {
    title: 'MODEL',
  },
  {
    title: 'ENGINE',
  },
  {
    title: 'COLOR',
  },
  {
    title: 'MILEAGE',
  },
  {
    title: 'PROD.DATE',
  },
];

const NavigationButtons: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      {buttons.map((value, index) => (
        <ButtonContent
          onClick={() => {
            navigate(PrivatePathsEnum.NEW_TEST_PROGRESS);
          }}
          key={index}
        >
          <h1>{value.title}</h1>
        </ButtonContent>
      ))}
    </Container>
  );
};

export default NavigationButtons;
