/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import DrawerNavigation from '@components/DrawerNavigation';
import HeaderMobile from '@components/Header/Mobile/Header';
import TotalHourMachineLabel from '@modules/testHistory/components/TotalHourMachineLabel';
import ListItem from '@modules/testHistory/components/mobile/ListItem';
import { Container, Grid, List } from '../styles';

const MobileTestHistoryPage: React.FC = () => {
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
        title="Test History"
      />

      <TotalHourMachineLabel />
      <List>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </List>

      <Grid />
    </Container>
  );
};

export default MobileTestHistoryPage;
