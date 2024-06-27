import { Route } from 'react-router-dom';

import UsersRoutes from '@modules/users/routes';
import HomeRoutes from '@modules/home/routes';
import DashboardRoutes from '@modules/dashboard/routes';
import HistoricalAlertsRoutes from '@modules/historicalAlerts/routes';
import TestHistoryRoutes from '@modules/testHistory/routes';
import TestProgressRoutes from '@modules/testProgress/routes';
import NewTestProgressRoute from '@modules/newTestProgress/routes';
import PrivateLayout from './layout';

const PrivateRoutes = (
  <Route element={<PrivateLayout />}>
    {HomeRoutes}
    {DashboardRoutes}
    {UsersRoutes}
    {HistoricalAlertsRoutes}
    {TestHistoryRoutes}
    {TestProgressRoutes}
    {NewTestProgressRoute}
  </Route>
);

export default PrivateRoutes;
