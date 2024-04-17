import { Route } from 'react-router-dom';

import { PrivatePathsEnum } from '@routes/privateRoutes/privatePaths';
import DashboardLayout from '../layout';
import Dashboard from '../pages/Dashboard';

const DashboardRoutes = (
  <Route element={<DashboardLayout />}>
    <Route path={PrivatePathsEnum.DASHBOARD} element={<Dashboard />} />
  </Route>
);

export default DashboardRoutes;
