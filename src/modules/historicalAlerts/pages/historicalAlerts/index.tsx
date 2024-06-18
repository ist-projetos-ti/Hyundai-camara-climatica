import React, { useEffect, useMemo } from 'react';

// eslint-disable-next-line import/no-unresolved

import { BREAKPOINTS } from '@style/breakpoints';
import { Container } from './styles';
import HistoricalAlertsDesktop from './Desktop';
import HistoricalAlertsMobile from './Mobile';

const HistoricalAlert: React.FC = () => {
  useEffect(() => {
    document.title = 'HistoricalAlert';
  }, []);

  const isDesktop = useMemo(() => window.innerWidth > BREAKPOINTS.MOBILE, []);

  return (
    <Container>
      {isDesktop ? <HistoricalAlertsDesktop /> : <HistoricalAlertsMobile />}
    </Container>
  );
};

export default HistoricalAlert;
