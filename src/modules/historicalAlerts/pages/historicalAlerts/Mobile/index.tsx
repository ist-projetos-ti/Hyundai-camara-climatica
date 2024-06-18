/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import DrawerNavigation from '@components/DrawerNavigation';
import HeaderMobile from '@components/Header/Mobile/Header';
import MobileHistoricalAlertsTable from '@modules/historicalAlerts/components/Mobile/mobileHistoricalAlertsTable';
import { data } from '@utils/dummy-data';
import { Container, Grid } from './styles';

const HistoricalAlertsMobile: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Container>
      <DrawerNavigation
        closeNavigation={(value) => setOpen(value)}
        openNavigation={open}
      />
      <HeaderMobile
        activateNavigation={(value) => {
          setOpen(value);
        }}
        title="Historical Alets"
      />
      <Grid>
        <MobileHistoricalAlertsTable data={data} />
      </Grid>
    </Container>
  );
};

export default HistoricalAlertsMobile;
