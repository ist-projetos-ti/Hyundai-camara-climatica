import React, { useEffect } from 'react';
import { Heading } from '@chakra-ui/react';

import { Container, Content } from './styles';
import EditUser from './components/EditUser';

const Me: React.FC = () => {
  useEffect(() => {
    document.title = 'Minha conta';
  }, []);

  return (
    <Container>
      <Content>
        <Heading>Editar usuário</Heading>
        <EditUser />
      </Content>
    </Container>
  );
};

export default Me;
