import { Route } from 'react-router-dom';

import { PrivatePathsEnum } from '@routes/privateRoutes/privatePaths';
import TestProgressLayout from '../layout';
import TestProgressGraph from '../pages/testProgressGraph';
import NewTestProgress from '../pages/newTestProgress';

const TestProgressRoutes = (
  <Route element={<TestProgressLayout />}>
    <Route
      path={PrivatePathsEnum.TEST_PROGRESS_GRAPH}
      element={<TestProgressGraph />}
    />
    <Route
      path={PrivatePathsEnum.NEW_TEST_PROGRESS}
      element={<NewTestProgress />}
    />
  </Route>
);

export default TestProgressRoutes;
