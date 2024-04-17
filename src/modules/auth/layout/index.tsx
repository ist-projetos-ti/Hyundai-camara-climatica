import React from 'react';
import { Outlet } from 'react-router-dom';
import { Heading } from '@chakra-ui/react';

import { Container } from './styles';

const AuthenticationLayout: React.FC = () => (
  <Container>
    <Heading>Authentication layout</Heading>
    <Outlet />
  </Container>
);

export default AuthenticationLayout;
