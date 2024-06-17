import React, { useEffect, useState } from 'react';

import { useUser } from '@modules/users/hooks/Users';
import { IUser } from '@modules/users/interfaces';
import UserTable from '@modules/users/components/UserTable';
import CreateUserModal from '@modules/users/components/CreateUserModal';
import { Container, TableContainer } from './styles';

const DesktopUsersPage: React.FC = () => {
  const [usersData, setUsersData] = useState<IUser[]>([]);

  const { GetUsers } = useUser();
  const { data } = GetUsers();

  useEffect(() => {
    if (data) {
      setUsersData(data);
    }
  }, [data]);

  useEffect(() => {
    document.title = 'Users';
  }, []);

  return (
    <Container>
      <CreateUserModal />
      <TableContainer>
        <UserTable data={usersData} />
      </TableContainer>
    </Container>
  );
};

export default DesktopUsersPage;
