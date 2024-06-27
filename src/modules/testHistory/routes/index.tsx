import { Route } from 'react-router-dom';

import { PrivatePathsEnum } from '@routes/privateRoutes/privatePaths';
import TestHistoryLayout from '../layout';
import TestHistoryPage from '../pages/testHistoryPage';

const TestHistoryRoutes = (
  <Route element={<TestHistoryLayout />}>
    <Route path={PrivatePathsEnum.TEST_HISTORY} element={<TestHistoryPage />} />
  </Route>
);

export default TestHistoryRoutes;
