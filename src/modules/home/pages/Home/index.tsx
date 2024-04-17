import React, { useEffect } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink, Heading } from '@chakra-ui/react';

import { PrivatePathsEnum } from '@routes/privateRoutes/privatePaths';
import { Container, Content } from './styles';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <Container>
      <Content>
        <Heading>HomePage</Heading>

        <ChakraLink
          color="teal.500"
          as={ReactRouterLink}
          to={PrivatePathsEnum.DASHBOARD}
        >
          Ir para a Dashboard
        </ChakraLink>
      </Content>
    </Container>
  );
};

export default Home;
