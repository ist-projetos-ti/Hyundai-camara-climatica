import React, { useEffect } from 'react';
import NavigationButtons from '@modules/testProgress/components/navigationButtons';
import GraphInformations from '@modules/testProgress/components/graphInformations';
import ChamberGraph from '@modules/testProgress/components/chamberGraph';
import { PrivatePathsEnum } from '@routes/privateRoutes/privatePaths';
import { useDisclosure } from '@chakra-ui/react';
import TestStatusModal from '@modules/testProgress/components/testStatusModal';
import { useLocation } from 'react-router-dom';
import { Container } from '../styles';

const TestProgressGraph: React.FC = () => {
  useEffect(() => {
    document.title = 'TestProgressGraph';
  }, []);

  const initialTest = new Date();

  const { onOpen: modalTestOpen, onClose, isOpen } = useDisclosure();
  const { state } = useLocation();

  useEffect(() => {
    // has the test started?
    if (state === null || !state.throughModule) modalTestOpen();
  }, [modalTestOpen, state]);

  return (
    <Container>
      <TestStatusModal
        isOpen={isOpen}
        onClose={onClose}
        date={initialTest}
        variety="finished"
      />
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
