import React from 'react';
import { Outlet } from 'react-router-dom';
import { Heading } from '@chakra-ui/react';

import Header from '@components/Header';
import { Container } from './styles';

const DashboardLayout: React.FC = () => (
  <>
    <Header />
    <Container>
      <Heading>Dashboard layout</Heading>
      <Outlet />
    </Container>
  </>
);

export default DashboardLayout;
