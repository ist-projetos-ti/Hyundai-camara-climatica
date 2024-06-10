/* eslint-disable import/no-unresolved */
import React from 'react';

import {
  Container,
  LabelContainer,
  ValuesContainer,
  NumberContainer,
} from './styles';

const TotalHourMachineLabel: React.FC = () => (
  <Container>
    <LabelContainer> Total Hora x Máquina: </LabelContainer>
    <ValuesContainer>
      <NumberContainer>1</NumberContainer>
      <NumberContainer>6</NumberContainer>
      <LabelContainer largeSpacing>
        <p>h </p> <p>:</p>
      </LabelContainer>

      <NumberContainer>0</NumberContainer>
      <NumberContainer>4</NumberContainer>
      <LabelContainer largeSpacing>
        <p>m </p> <p>:</p>
      </LabelContainer>
      <NumberContainer>5</NumberContainer>
      <NumberContainer>2</NumberContainer>
      <LabelContainer largeSpacing>s</LabelContainer>
    </ValuesContainer>
  </Container>
);

export default TotalHourMachineLabel;
