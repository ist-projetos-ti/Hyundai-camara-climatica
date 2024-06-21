/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { Divider, Input } from '@chakra-ui/react';
import themeDefaults from '@style/themeDefaults';
import {
  TemperatureInformation,
  Container,
  TestsListComponentInformations,
  LabelContent,
} from './styles';

interface ITestsListComponentProps {
  temperature?: number;
  label: string;
}

const TestsListComponent: React.FC<ITestsListComponentProps> = ({
  temperature,
  label,
}) => (
  <Container>
    <TestsListComponentInformations>
      <LabelContent>
        <p>{label}</p>
      </LabelContent>
      <Input placeholder="editar nome" />
      <TemperatureInformation
        color={
          temperature
            ? themeDefaults.colors.primary
            : themeDefaults.colors.danger
        }
      >
        {temperature ? <p>{temperature}ºC</p> : <p>NDA</p>}
      </TemperatureInformation>
    </TestsListComponentInformations>
    <Divider borderColor="white" borderWidth={2} />
  </Container>
);

export default TestsListComponent;
