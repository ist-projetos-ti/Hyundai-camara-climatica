import { Route } from 'react-router-dom';

import { PublicPathsEnum } from '@routes/publicRoutes/publicPaths';
import EnsureLoggedOutRoute from '@routes/publicRoutes/EnsureLoggedOutRoute';
import { PrivatePathsEnum } from '@routes/privateRoutes/privatePaths';

import EnsureLoggedInRoute from '@routes/privateRoutes/EnsureLoggedInRoute';
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
      path={PrivatePathsEnum.NEW_PASSWORD}
      element={
        <EnsureLoggedInRoute redirectTo={PrivatePathsEnum.NEW_PASSWORD}>
          <NewPassword />
        </EnsureLoggedInRoute>
      }
    />
  </Route>
);

export default AuthenticationRoutes;
