import { Route } from 'react-router-dom';

import { PrivatePathsEnum } from '@routes/privateRoutes/privatePaths';
import HistoricalAlertsLayout from '../layout';
import HistoricalAlerts from '../pages/historicalAlerts';

const HistoricalAlertsRoutes = (
  <Route element={<HistoricalAlertsLayout />}>
    <Route
      path={PrivatePathsEnum.HISTORICAL_ALERTS}
      element={<HistoricalAlerts />}
    />
  </Route>
);

export default HistoricalAlertsRoutes;
