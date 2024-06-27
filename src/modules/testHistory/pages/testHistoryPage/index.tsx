import React from 'react';
import GraphInformations from '@modules/testProgress/components/graphInformations';
import { PrivatePathsEnum } from '@routes/privateRoutes/privatePaths';
import ThermocoupleDataGraph from '@modules/testProgress/components/thermocoupleDataGraph';
import { Container, TestHistoryGraphContent } from './styles';

const TestHistoryPage: React.FC = () => (
  <Container>
    <h2>
      <b>Test Name</b> • Description
    </h2>
    <GraphInformations
      navigatePath={PrivatePathsEnum.TERMOCOUPLE_DATA}
      navigationLabel="Test History"
    />
    <TestHistoryGraphContent>
      <ThermocoupleDataGraph isTestHistory />
    </TestHistoryGraphContent>
  </Container>
);

export default TestHistoryPage;
