import React, { createContext, useContext } from 'react';
import { useMutation } from '@tanstack/react-query';

import { errorHandler } from '@errors/errorHandler';
import { UsersApiRoutes } from '@modules/users/api/paths.routes';
// eslint-disable-next-line import/no-unresolved
import { useToast } from '@hooks/Toast';
import { api } from '../../../../services/api';

interface PasswordContextData {
  SendForgotPasswordCode(email: string): Promise<void>;
  ResetPassword(userId: string): Promise<void>;
}

const PasswordContext = createContext<PasswordContextData>(
  {} as PasswordContextData
);

type PasswordProviderProps = {
  children: React.ReactNode;
};

const PasswordProvider: React.FC<PasswordProviderProps> = ({ children }) => {
  const { addToast } = useToast();

  const SendForgotPasswordCode = useMutation(
    async (email: string) => {
      await api.post(`${UsersApiRoutes.FORGOT_PASSWORD}`, { email });
    },
    {
      onSuccess: () => {
        addToast({
          title: 'E-mail enviado com sucesso',
          description:
            'Um E-mail foi enviado com instruções para criar nova senha',
          type: 'success',
        });
      },
      onError: (error) => {
        errorHandler({
          error,
          title: 'Falha ao enviar o email de recuperação de senha',
          addToast,
        });
      },
    }
  ).mutateAsync;

  const ResetPassword = useMutation(
    async (userId: string) => {
      await api.put(`${UsersApiRoutes.RESET_PASSWORD}/${userId}`, {
        reset_password: true,
      });
    },
    {
      onSuccess: () => {
        addToast({
          title: 'Reset password',
          description: 'The password has returned to default',
          type: 'success',
        });
      },
      onError: (error) => {
        errorHandler({
          error,
          title: 'Failed to reset password',
          addToast,
        });
      },
    }
  ).mutateAsync;

  return (
    <PasswordContext.Provider value={{ SendForgotPasswordCode, ResetPassword }}>
      {children}
    </PasswordContext.Provider>
  );
};

function usePassword(): PasswordContextData {
  const context = useContext(PasswordContext);

  if (!context) {
    throw new Error('usePassword must be used within a PasswordProvider');
  }

  return context;
}

export { PasswordProvider, usePassword };
