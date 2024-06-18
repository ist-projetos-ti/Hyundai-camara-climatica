import React from 'react';
import { Container } from './styles';

interface IContentTimeStyled {
  label: string;
  time1: number;
  time2: number;
}

const ContentTimeStyled: React.FC<IContentTimeStyled> = ({
  label,
  time1,
  time2,
}) => (
  <Container>
    <h4>{label}</h4>
    <div>
      <p>{time1}</p>
      <p>{time2}</p>
    </div>
  </Container>
);

export default ContentTimeStyled;
