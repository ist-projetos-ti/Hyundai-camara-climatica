/* eslint-disable camelcase */
import React, { createContext, useContext } from 'react';
import {
  useMutation,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
  QueryKey,
} from '@tanstack/react-query';

import { errorHandler } from '@errors/errorHandler';
import { UsersApiRoutes } from '@modules/users/api/paths.routes';
import { api } from '@services/api';
import { QueryKeys, queryClient } from '@services/queryClient';
// eslint-disable-next-line import/no-unresolved
import { useToast } from '@hooks/Toast';
import { IUser } from '../../interfaces';

interface IUpdateCurrentUserData {
  old_password?: string;
  password?: string;
  password_confirmation?: string;
  name?: string;
  hcm_code?: string;
  type?: string;
}

interface IUpdateUserData extends IUpdateCurrentUserData {
  id: string;
}

interface ICreateUserData {
  name: string;
  hcm_code: string;
  type: 'administrator' | 'user';
}

interface useUserParams {
  options?: UseQueryOptions<IUser[]>;
}

interface UserContextData {
  GetUsers(options?: useUserParams): UseQueryResult<IUser[]>;
  DeleteUser(user_id: string): Promise<IUser>;
  UpdateUser(user_data: IUpdateUserData): Promise<IUser>;
  UpdateCurrentUser(user_data: IUpdateCurrentUserData): Promise<IUser>;
  CreateUser(user_data: ICreateUserData): Promise<IUser>;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

interface IUserProviderProps {
  children: React.ReactNode;
}

const UserProvider: React.FC<IUserProviderProps> = ({ children }) => {
  const { addToast } = useToast();

  const GetUsers = (
    { options } = {} as useUserParams
  ): UseQueryResult<IUser[]> =>
    useQuery(
      [QueryKeys.USERS] as QueryKey,
      async () => {
        const { data } = await api.get<IUser[]>(UsersApiRoutes.USERS);

        return data;
      },
      {
        // change the key so data can update
        staleTime: 1000 * 60 * 10, // 10min
        ...options,
      }
    );

  const DeleteUser = useMutation(
    async (userId: string) => {
      const { data } = await api.delete(`${UsersApiRoutes.USERS}/${userId}`);

      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QueryKeys.USERS]);
        addToast({
          title: 'Usuário deletado!',
          description: 'O usuário foi deletado com sucesso',
          type: 'success',
        });
      },
      onError: (error) => {
        errorHandler({
          error,
          title: 'Falha ao deletar o usuário',
          addToast,
        });
      },
    }
  ).mutateAsync;

  const UpdateUser = useMutation(
    async (userData: IUpdateUserData) => {
      const { id, ...dataToSend } = userData;

      const { data } = await api.put(
        `${UsersApiRoutes.USERS}/${id}`,
        dataToSend
      );

      return data;
    },
    {
      onSuccess: () => {
        addToast({
          title: 'Usuário atualizado!',
          description: 'O usuário foi atualizado com sucesso',
          type: 'success',
        });
      },
      onError: (error) => {
        errorHandler({
          error,
          title: 'Falha ao atualizar o usuário',
          addToast,
        });
      },
    }
  ).mutateAsync;

  const UpdateCurrentUser = useMutation(
    async (userData: IUpdateCurrentUserData) => {
      const { ...dataToSend } = userData;

      const { data } = await api.put(`${UsersApiRoutes.USERS}`, dataToSend);

      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QueryKeys.USERS]);
        addToast({
          title: 'Usuário atualizado!',
          description: 'O usuário foi atualizado com sucesso',
          type: 'success',
        });
      },
      onError: (error) => {
        errorHandler({
          error,
          title: 'Falha ao atualizar o usuário',
          addToast,
        });
      },
    }
  ).mutateAsync;

  const CreateUser = useMutation(
    async ({ name, type, hcm_code }: ICreateUserData) => {
      const { data } = await api.post(`${UsersApiRoutes.USERS}`, {
        name,
        type,
        hcm_code,
      });

      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QueryKeys.USERS]);
        addToast({
          title: 'Usuário Criado!',
          description: 'O usuário foi criado!',
          type: 'success',
        });
      },
      onError: (error) => {
        errorHandler({
          error,
          title: 'Falha ao criar o usuário',
          addToast,
        });
      },
    }
  ).mutateAsync;

  return (
    <UserContext.Provider
      value={{
        GetUsers,
        DeleteUser,
        UpdateUser,
        UpdateCurrentUser,
        CreateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

function useUser(): UserContextData {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
}

export { UserProvider, useUser };
