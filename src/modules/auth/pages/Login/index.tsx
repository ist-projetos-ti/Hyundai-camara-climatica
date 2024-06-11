import React, { useEffect, useMemo } from 'react';

// eslint-disable-next-line import/no-unresolved

import { BREAKPOINTS } from '@style/breakpoints';
import { Container } from './styles';
import DesktopLoginPage from './Desktop';
import MobileLoginPage from './Mobile';

const Login: React.FC = () => {
  useEffect(() => {
    document.title = 'Login';
  }, []);
  const isDesktop = useMemo(() => window.innerWidth > BREAKPOINTS.MOBILE, []);

  return (
    <Container>
      {isDesktop ? <DesktopLoginPage /> : <MobileLoginPage />}
    </Container>
  );
};

export default Login;
