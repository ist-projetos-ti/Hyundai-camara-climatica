import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@components/Header';
import DrawerNavigation from '@components/DrawerNavigation';
import { Container, Content, Grid } from './styles';

const UserLayout: React.FC = () => (
  <Container>
    <div>
      <DrawerNavigation />
    </div>
    <Content>
      <Grid>
        <Header title="User Registration List" />
        <Outlet />
      </Grid>
    </Content>
  </Container>
);

export default UserLayout;
