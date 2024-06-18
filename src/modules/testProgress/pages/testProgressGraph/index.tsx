import React, { useEffect } from 'react';
import NavigationButtons from '@modules/testProgress/components/navigationButtons';
import GraphInformations from '@modules/testProgress/components/graphInformations';
import { Container } from './styles';

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
      <GraphInformations />
    </Container>
  );
};

export default TestProgressGraph;
