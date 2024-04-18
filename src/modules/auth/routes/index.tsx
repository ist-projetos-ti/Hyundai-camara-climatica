import { Route } from 'react-router-dom';

import { PublicPathsEnum } from '@routes/publicRoutes/publicPaths';
import EnsureLoggedOutRoute from '@routes/publicRoutes/EnsureLoggedOutRoute';
import { PrivatePathsEnum } from '@routes/privateRoutes/privatePaths';

import AuthenticationLayout from '../layout';
import Login from '../pages/Login';
import NewPassword from '../pages/SetNewPassword';

const AuthenticationRoutes = (
  <Route element={<AuthenticationLayout />}>
    <Route
      path={PublicPathsEnum.LOGIN}
      element={
        <EnsureLoggedOutRoute redirectTo={PrivatePathsEnum.HOME}>
          <Login />
        </EnsureLoggedOutRoute>
      }
    />
    <Route
      path={PublicPathsEnum.FORGOT_PASSWORD}
      element={
        <EnsureLoggedOutRoute redirectTo={PrivatePathsEnum.HOME}>
          <NewPassword />
        </EnsureLoggedOutRoute>
      }
    />
  </Route>
);

export default AuthenticationRoutes;
