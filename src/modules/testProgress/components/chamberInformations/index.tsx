import React from 'react';
import { Container } from './styles';

interface IChamberInformations {
  color: string;
  label: string;
  value: string;
  temp: boolean;
}

const ChamberInformations: React.FC<IChamberInformations> = ({
  color,
  label,
  value,
  temp,
}) => (
  <Container color={color}>
    <div />
    {temp ? (
      <p>
        {label}: <b>{value}ºC</b>
      </p>
    ) : (
      <p>
        {label}: <b>{value}%</b>
      </p>
    )}
  </Container>
);

export default ChamberInformations;
