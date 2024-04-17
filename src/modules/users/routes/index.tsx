import { Route } from 'react-router-dom';

import { PrivatePathsEnum } from '@routes/privateRoutes/privatePaths';
import UsersLayout from '../layout';
import Me from '../pages/Me';

const UsersRoutes = (
  <Route element={<UsersLayout />}>
    <Route path={PrivatePathsEnum.ME} element={<Me />} />
  </Route>
);

export default UsersRoutes;
