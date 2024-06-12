/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import HeaderMobile from '@modules/users/components/Mobile/Header';
import UserTableMobile from '@modules/users/components/Mobile/UserTable';
import { useUser } from '@modules/users/hooks/Users';
import { IUser } from '@modules/users/interfaces';
import CreateUserModal from '@modules/users/components/CreateUserModal';
import DrawerNavigation from '@components/DrawerNavigation';
import { Container, Grid } from '../styles';

const MobileUsersPage: React.FC = () => {
  const [usersData, setUsersData] = useState<IUser[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const { GetUsers } = useUser();
  const { data } = GetUsers();

  useEffect(() => {
    if (data) {
      setUsersData(data);
    }
  }, [data]);

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
      />
      <Grid>
        <CreateUserModal />
        <UserTableMobile data={usersData} />
      </Grid>
    </Container>
  );
};

export default MobileUsersPage;
