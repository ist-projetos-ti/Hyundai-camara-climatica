/* eslint-disable react/no-array-index-key */
import React from 'react';
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

const NavigationButtons: React.FC = () => (
  <Container>
    {buttons.map((value, index) => (
      <ButtonContent key={index}>
        <h1>{value.title}</h1>
      </ButtonContent>
    ))}
  </Container>
);

export default NavigationButtons;
