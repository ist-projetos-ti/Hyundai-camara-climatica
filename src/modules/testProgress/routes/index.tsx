import { Route } from 'react-router-dom';

import { PrivatePathsEnum } from '@routes/privateRoutes/privatePaths';
import TestProgressLayout from '../layout';
import TestProgressGraph from '../pages/testProgressGraph';
import ThermocoupleData from '../pages/thermocoupleData';

const TestProgressRoutes = (
  <Route element={<TestProgressLayout />}>
    <Route
      path={PrivatePathsEnum.TEST_PROGRESS_GRAPH}
      element={<TestProgressGraph />}
    />
    <Route
      path={PrivatePathsEnum.TERMOCOUPLE_DATA}
      element={<ThermocoupleData />}
    />
  </Route>
);

export default TestProgressRoutes;
