/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import DrawerNavigation from '@components/DrawerNavigation';
import Header from '@components/Header';
import { BREAKPOINTS } from '@style/breakpoints';
import { Container, ContainerMobile, Content, Grid } from './styles';

const HistoricalAlertsLayout: React.FC = () => {
  const isDesktop = useMemo(() => window.innerWidth > BREAKPOINTS.MOBILE, []);

  const DesktopLayout = (
    <Container>
      <div>
        <DrawerNavigation closeNavigation={() => {}} />
      </div>
      <Content>
        <Grid>
          <Header title="Historical Alerts" />
          <Outlet />
        </Grid>
      </Content>
    </Container>
  );

  const MobileLayout = (
    <ContainerMobile>
      <Outlet />
    </ContainerMobile>
  );

  return isDesktop ? DesktopLayout : MobileLayout;
};

export default HistoricalAlertsLayout;
