import { Route } from 'react-router-dom';

import UsersRoutes from '@modules/users/routes';
import HomeRoutes from '@modules/home/routes';
import DashboardRoutes from '@modules/dashboard/routes';
import HistoricalAlertsRoutes from '@modules/historicalAlerts/routes';
import TestProgressRoutes from '@modules/testProgress/routes';
import PrivateLayout from './layout';

const PrivateRoutes = (
  <Route element={<PrivateLayout />}>
    {HomeRoutes}
    {DashboardRoutes}
    {UsersRoutes}
    {HistoricalAlertsRoutes}
    {TestProgressRoutes}
  </Route>
);

export default PrivateRoutes;
