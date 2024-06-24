/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@components/Header';
import { Container, Content, Grid } from './styles';

const NewTestProgressLayout: React.FC = () => (
  <Container>
    <Content>
      <Grid>
        <Header title="Test in Progress" />
        <Outlet />
      </Grid>
    </Content>
  </Container>
);

export default NewTestProgressLayout;
