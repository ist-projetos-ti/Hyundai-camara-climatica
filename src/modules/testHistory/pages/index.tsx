import React, { useEffect, useMemo } from 'react';

// eslint-disable-next-line import/no-unresolved

import { BREAKPOINTS } from '@style/breakpoints';
import { Container } from './styles';
import DesktopTestHistoryPage from './Desktop';
import MobileTestHistoryPage from './Mobile';

const TestHistory: React.FC = () => {
  useEffect(() => {
    document.title = 'Users';
  }, []);

  const isDesktop = useMemo(() => window.innerWidth > BREAKPOINTS.MOBILE, []);

  return (
    <Container>
      {isDesktop ? <DesktopTestHistoryPage /> : <MobileTestHistoryPage />}
    </Container>
  );
};

export default TestHistory;
