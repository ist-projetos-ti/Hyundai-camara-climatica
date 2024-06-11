import React, { useEffect, useMemo } from 'react';

// eslint-disable-next-line import/no-unresolved

import { BREAKPOINTS } from '@style/breakpoints';
import { Container } from './styles';
import DesktopSetNewPassword from './Desktop';
import MobileSetNewPassword from './Mobile';

const SetNewPassword: React.FC = () => {
  useEffect(() => {
    document.title = 'SetNewPassword';
  }, []);
  const isDesktop = useMemo(() => window.innerWidth > BREAKPOINTS.MOBILE, []);
  return (
    <Container>
      {isDesktop ? <DesktopSetNewPassword /> : <MobileSetNewPassword />}
    </Container>
  );
};

export default SetNewPassword;
