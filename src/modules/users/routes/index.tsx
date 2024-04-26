import { Route } from 'react-router-dom';

import { PrivatePathsEnum } from '@routes/privateRoutes/privatePaths';
import UsersLayout from '../layout';
import Users from '../pages/Users';

const UsersRoutes = (
  <Route element={<UsersLayout />}>
    <Route path={PrivatePathsEnum.USERS} element={<Users />} />
  </Route>
);

export default UsersRoutes;
