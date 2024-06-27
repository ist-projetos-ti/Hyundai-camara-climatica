/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import Header from '@components/Header';
import DrawerNavigation from '@components/DrawerNavigation';
import { Outlet } from 'react-router-dom';
import { Container, Content, Grid } from './styles';

const TestHistoryLayout: React.FC = () => (
  <Container>
    <div>
      <DrawerNavigation closeNavigation={() => {}} />
    </div>
    <Content>
      <Grid>
        <Header title="Test in Progress" />
        <Outlet />
      </Grid>
    </Content>
  </Container>
);

export default TestHistoryLayout;
