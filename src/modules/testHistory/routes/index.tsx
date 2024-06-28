import { Route } from 'react-router-dom';

import { PrivatePathsEnum } from '@routes/privateRoutes/privatePaths';
import TestHistoryLayout from '../layout';
import TestHistory from '../pages/testHistory';

const TestHistoryRoutes = (
  <Route element={<TestHistoryLayout />}>
    <Route path={PrivatePathsEnum.HISTORICAL_TESTS} element={<TestHistory />} />
  </Route>
);

export default TestHistoryRoutes;
