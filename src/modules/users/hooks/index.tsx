import React from 'react';

import { PasswordProvider } from './Password';
import { UserProvider } from './Users';

type UsersModuleProvidersProps = {
  children: React.ReactNode;
};

const UsersModuleProviders: React.FC<UsersModuleProvidersProps> = ({
  children,
}) => (
  <PasswordProvider>
    <UserProvider>{children}</UserProvider>
  </PasswordProvider>
);

export default UsersModuleProviders;
