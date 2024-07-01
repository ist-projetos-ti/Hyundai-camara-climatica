/* eslint-disable import/no-unresolved */
import React, { useMemo } from 'react';

import { useTestHistory } from '@modules/testHistory/hooks';
import {
  Container,
  LabelContainer,
  ValuesContainer,
  NumberContainer,
} from './styles';

const TotalHourMachineLabel: React.FC = () => {
  const { GetMachineSecondsTest } = useTestHistory();

  const { data } = GetMachineSecondsTest();

  const totalTime = useMemo(() => {
    const seconds = data?.total_seconds || 0;

    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    const formattedHrs = String(hrs).padStart(2, '0');
    const formattedMins = String(mins).padStart(2, '0');
    const formattedSecs = String(secs).padStart(2, '0');
    const formattedTime = `${formattedHrs}:${formattedMins}:${formattedSecs}`;

    return formattedTime.replace(/:/g, '').split('');
  }, [data]);

  return (
    <Container>
      <LabelContainer> Total Hora x Máquina: </LabelContainer>
      <ValuesContainer>
        <NumberContainer>{totalTime[0]}</NumberContainer>
        <NumberContainer>{totalTime[1]}</NumberContainer>
        <LabelContainer largeSpacing>
          <p>h </p> <p>:</p>
        </LabelContainer>

        <NumberContainer>{totalTime[2]}</NumberContainer>
        <NumberContainer>{totalTime[3]}</NumberContainer>
        <LabelContainer largeSpacing>
          <p>m </p> <p>:</p>
        </LabelContainer>
        <NumberContainer>{totalTime[4]}</NumberContainer>
        <NumberContainer>{totalTime[5]}</NumberContainer>
        <LabelContainer largeSpacing>s</LabelContainer>
      </ValuesContainer>
    </Container>
  );
};

export default TotalHourMachineLabel;
