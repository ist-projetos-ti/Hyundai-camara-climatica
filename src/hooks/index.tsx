import React from 'react';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';

import themeDefaults from '@style/themeDefaults';

import UsersModuleProviders from '@modules/users/hooks';
import { AuthProvider } from '@modules/auth/hooks/auth';
import TestHistoryProvider from '@modules/testHistory/hooks';
import { ChakraProvider } from './ChakraProvider';
// eslint-disable-next-line import/no-unresolved
import { ToastProvider } from './Toast';

type AppProviderProps = {
  children: React.ReactNode;
};

/**
 * @description Aqui são importados todos os hooks com contexto do projeto,
 * a estrutura pode ficar um pouco diferente para módulos com mais de um contexto,
 * como é o exemplo do módulo de usuários
 */
const AppProvider: React.FC<AppProviderProps> = ({ children }) => (
  <ThemeProvider theme={themeDefaults}>
    <ChakraProvider>
      <AnimatePresence>
        <ToastProvider>
          <AuthProvider>
            <TestHistoryProvider>
              <UsersModuleProviders>{children}</UsersModuleProviders>
            </TestHistoryProvider>
          </AuthProvider>
        </ToastProvider>
      </AnimatePresence>
    </ChakraProvider>
  </ThemeProvider>
);

export default AppProvider;
