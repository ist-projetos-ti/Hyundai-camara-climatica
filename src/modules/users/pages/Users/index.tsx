import React, { useEffect, useMemo } from 'react';

// eslint-disable-next-line import/no-unresolved

import { BREAKPOINTS } from '@style/breakpoints';
import { Container } from './styles';
import DesktopUsersPage from './Desktop';
import MobileUsersPage from './Mobile';

const Users: React.FC = () => {
  useEffect(() => {
    document.title = 'Users';
  }, []);

  const isDesktop = useMemo(() => window.innerWidth > BREAKPOINTS.MOBILE, []);

  return (
    <Container>
      {isDesktop ? <DesktopUsersPage /> : <MobileUsersPage />}
    </Container>
  );
};

export default Users;
