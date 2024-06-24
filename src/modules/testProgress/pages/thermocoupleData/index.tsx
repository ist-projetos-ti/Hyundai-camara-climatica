import React, { useEffect } from 'react';
import NavigationButtons from '@modules/testProgress/components/navigationButtons';
import GraphInformations from '@modules/testProgress/components/graphInformations';
import { PrivatePathsEnum } from '@routes/privateRoutes/privatePaths';
import { Container } from '../styles';

const ThermocoupleData: React.FC = () => {
  useEffect(() => {
    document.title = 'ThermocoupleData';
  }, []);

  return (
    <Container>
      <h2>
        <b>Test Name</b> • Description
      </h2>
      <NavigationButtons />
      <GraphInformations
        navigatePath={PrivatePathsEnum.TEST_PROGRESS_GRAPH}
        navigationLabel="Chamber Temp"
      />
    </Container>
  );
};

export default ThermocoupleData;
