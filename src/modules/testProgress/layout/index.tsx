/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@components/Header';
import DrawerNavigation from '@components/DrawerNavigation';
import { Container, Content, Grid } from './styles';

const TestProgressLayout: React.FC = () => {
  const [showNavigation, setShowNavigation] = useState('');

  useEffect(() => {
    setShowNavigation(document.title);
  }, []);

  return (
    <Container>
      {showNavigation !== 'NewTestProgress' ? (
        <div>
          <DrawerNavigation closeNavigation={() => {}} />
        </div>
      ) : (
        <></>
      )}

      <Content>
        <Grid>
          <Header title="Test in Progress" />
          <Outlet />
        </Grid>
      </Content>
    </Container>
  );
};

export default TestProgressLayout;
