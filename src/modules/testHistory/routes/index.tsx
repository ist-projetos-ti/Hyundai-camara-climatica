import { Route } from 'react-router-dom';

import { PrivatePathsEnum } from '@routes/privateRoutes/privatePaths';
import TestHistoryLayout from '../layout';
import TestHistory from '../pages/testHistory';
import TestHistoryGraph from '../pages/testHistoryGraph';

const TestHistoryRoutes = (
  <Route element={<TestHistoryLayout />}>
    <Route path={PrivatePathsEnum.HISTORICAL_TESTS} element={<TestHistory />} />
    <Route
      path={PrivatePathsEnum.HISTORICAL_TESTS_GRAPH}
      element={<TestHistoryGraph />}
    />
  </Route>
);

export default TestHistoryRoutes;
