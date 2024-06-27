import { Route } from 'react-router-dom';

import { PrivatePathsEnum } from '@routes/privateRoutes/privatePaths';
import NewTestProgressLayout from '../layout';
import NewTestProgress from '../pages/newTestProgress';

const NewTestProgressRoute = (
  <Route element={<NewTestProgressLayout />}>
    <Route
      path={PrivatePathsEnum.NEW_TEST_PROGRESS}
      element={<NewTestProgress />}
    />
  </Route>
);

export default NewTestProgressRoute;
