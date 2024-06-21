/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import NewTestProgressForm from '@modules/testProgress/components/newTestProgressForm';
import TestsList from '@modules/testProgress/components/testsList';
import { Container } from './styles';

const NewTestProgress: React.FC = () => {
  useEffect(() => {
    document.title = 'NewTestProgress';
  }, []);

  return (
    <Container>
      <NewTestProgressForm />
      <TestsList />
    </Container>
  );
};

export default NewTestProgress;
