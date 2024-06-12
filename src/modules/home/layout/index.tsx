/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@components/Header';
import DrawerNavigation from '@components/DrawerNavigation';
import { Container, Content, Grid } from './styles';

const HomeLayout: React.FC = () => (
  <Container>
    <div>
      <DrawerNavigation closeNavigation={() => {}} />
    </div>
    <Content>
      <Grid>
        <Header title="User Registration List" />
        <Outlet />
      </Grid>
    </Content>
  </Container>
);

export default HomeLayout;
