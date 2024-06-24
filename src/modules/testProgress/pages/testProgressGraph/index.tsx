import React, { useEffect } from 'react';
import NavigationButtons from '@modules/testProgress/components/navigationButtons';
import GraphInformations from '@modules/testProgress/components/graphInformations';
import ChamberGraph from '@modules/testProgress/components/chamberGraph';
import { PrivatePathsEnum } from '@routes/privateRoutes/privatePaths';
import { Container } from '../styles';

const TestProgressGraph: React.FC = () => {
  useEffect(() => {
    document.title = 'TestProgressGraph';
  }, []);

  return (
    <Container>
      <h2>
        <b>Test Name</b> • Description
      </h2>
      <NavigationButtons />
      <GraphInformations
        navigatePath={PrivatePathsEnum.TERMOCOUPLE_DATA}
        navigationLabel="Thermocouple Data"
      />
      <ChamberGraph />
    </Container>
  );
};

export default TestProgressGraph;
