/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import ThermocoupleDataGraph from '@modules/testProgress/components/thermocoupleDataGraph';
import ChamberInformations from '@components/chamberInformations';
import themeDefaults from '@style/themeDefaults';
import { ChamberInformationsContent, Container, GraphContent } from './styles';

const data = [
  {
    color: themeDefaults.colors.graphTemp1,
    label: 'Chamber Temp 1',
    value: '20',
    temp: true,
  },
  {
    color: themeDefaults.colors.graphTemp2,
    label: 'Chamber Temp 2',
    value: '20',
    temp: true,
  },
  {
    color: themeDefaults.colors.graphHumity1,
    label: 'Chamber Humity 1',
    value: '20',
    temp: false,
  },
  {
    color: themeDefaults.colors.graphHumity2,
    label: 'Chamber Humity 2',
    value: '20',
    temp: false,
  },
];

const TestHistoryGraph: React.FC = () => {
  useEffect(() => {
    document.title = 'TestHistoryGraph';
  }, []);

  return (
    <Container>
      <h2>
        <b>Test Name</b> • Description
      </h2>
      <ChamberInformationsContent>
        {data.map(({ color, label, temp, value }, index) => (
          <ChamberInformations
            key={index}
            color={color}
            label={label}
            value={value}
            temp={temp}
          />
        ))}
      </ChamberInformationsContent>
      <GraphContent>
        <ThermocoupleDataGraph isHistory />
      </GraphContent>
    </Container>
  );
};

export default TestHistoryGraph;
