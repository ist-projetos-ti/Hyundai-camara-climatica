import React from 'react';
import { Outlet } from 'react-router-dom';
import { Heading } from '@chakra-ui/react';

import Header from '@components/Header';
import DrawerNavigation from '@components/DrawerNavigation';
import { Container } from './styles';

const HomeLayout: React.FC = () => (
  <>
    <Header />
    <DrawerNavigation />
    <Container>
      <Heading>Home layout</Heading>
      <Outlet />
    </Container>
  </>
);

export default HomeLayout;
