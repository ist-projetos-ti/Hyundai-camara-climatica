/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { PrivatePathsEnum } from '@routes/privateRoutes/privatePaths';
import NewTestProgressForm from '../../components/newTestProgressForm';
import TestsList from '../../components/testsList';
import { ButtonContainer, Container } from './styles';

const NewTestProgress: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'NewTestProgress';
  }, []);

  return (
    <Container>
      <NewTestProgressForm />
      <TestsList />
      <ButtonContainer>
        <Button
          onClick={() => {
            navigate(PrivatePathsEnum.TEST_PROGRESS_GRAPH);
          }}
          colorScheme="black"
          variant="outline"
        >
          Return
        </Button>
        <Button
          onClick={() => {
            navigate(PrivatePathsEnum.TEST_PROGRESS_GRAPH);
          }}
          colorScheme="teal"
          variant="outline"
        >
          Save
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default NewTestProgress;
