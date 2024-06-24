import { Route } from 'react-router-dom';

import { PrivatePathsEnum } from '@routes/privateRoutes/privatePaths';
import TestProgressLayout from '../layout';
import TestProgressGraph from '../pages/testProgressGraph';

const TestProgressRoutes = (
  <Route element={<TestProgressLayout />}>
    <Route
      path={PrivatePathsEnum.TEST_PROGRESS_GRAPH}
      element={<TestProgressGraph />}
    />
  </Route>
);

export default TestProgressRoutes;
