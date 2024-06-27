import React, { useEffect } from 'react';
import NavigationButtons from '@modules/testProgress/components/navigationButtons';
import GraphInformations from '@modules/testProgress/components/graphInformations';
import ChamberGraph from '@modules/testProgress/components/chamberGraph';
import { useDisclosure } from '@chakra-ui/react';
import TestStatusModal from '@modules/testProgress/components/testStatusModal';
import { Container } from './styles';

const TestProgressGraph: React.FC = () => {
  useEffect(() => {
    document.title = 'TestProgressGraph';
  }, []);

  const initialTest = new Date();

  const { onOpen, onClose, isOpen } = useDisclosure();
  useEffect(() => {
    // has test started?
    onOpen();
  }, [onOpen]);

  return (
    <Container>
      <TestStatusModal
        isOpen={isOpen}
        onClose={onClose}
        date={initialTest}
        variety="progress"
      />
      <h2>
        <b>Test Name</b> • Description
      </h2>
      <NavigationButtons />
      <GraphInformations />
      <ChamberGraph />
    </Container>
  );
};

export default TestProgressGraph;
