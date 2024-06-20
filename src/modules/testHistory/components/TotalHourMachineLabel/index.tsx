/* eslint-disable import/no-unresolved */
import React from 'react';

import {
  Container,
  LabelContainer,
  ValuesContainer,
  NumberContainer,
} from './styles';

const TotalHourMachineLabel: React.FC = () => {
  const label = '16:04:52';
  const timeArray = label.replace(/:/g, '').split('');

  return (
    <Container>
      <LabelContainer> Total Hora x Máquina: </LabelContainer>
      <ValuesContainer>
        <NumberContainer>{timeArray[0]}</NumberContainer>
        <NumberContainer>{timeArray[1]}</NumberContainer>
        <LabelContainer largeSpacing>
          <p>h </p> <p>:</p>
        </LabelContainer>

        <NumberContainer>{timeArray[2]}</NumberContainer>
        <NumberContainer>{timeArray[3]}</NumberContainer>
        <LabelContainer largeSpacing>
          <p>m </p> <p>:</p>
        </LabelContainer>
        <NumberContainer>{timeArray[4]}</NumberContainer>
        <NumberContainer>{timeArray[5]}</NumberContainer>
        <LabelContainer largeSpacing>s</LabelContainer>
      </ValuesContainer>
    </Container>
  );
};

export default TotalHourMachineLabel;
