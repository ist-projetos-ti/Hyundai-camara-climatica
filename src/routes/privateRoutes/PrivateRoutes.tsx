import { Route } from 'react-router-dom';

import UsersRoutes from '@modules/users/routes';
import HomeRoutes from '@modules/home/routes';
import DashboardRoutes from '@modules/dashboard/routes';
import PrivateLayout from './layout';

const PrivateRoutes = (
  <Route element={<PrivateLayout />}>
    {HomeRoutes}
    {DashboardRoutes}
    {UsersRoutes}
  </Route>
);

export default PrivateRoutes;
