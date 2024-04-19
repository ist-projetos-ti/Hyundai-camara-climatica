/* eslint-disable no-alert */
import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import { AxiosError } from 'axios';

import { IUpdateUser, IUser } from '@modules/users/interfaces/index';
import { AuthApiRoutes } from '@modules/auth/api/paths.routes';
import { api } from '@services/api';
// eslint-disable-next-line import/no-unresolved
import { useToast } from '@hooks/Toast';

interface AuthState {
  user: IUser;
}

interface SignInCredentials {
  hcm_code: string;
  password: string;
}

interface AuthContextData {
  user: IUser;
  isLoading: boolean;
  updateUser(user: IUpdateUser): Promise<void>;
  signIn(credentials: SignInCredentials): Promise<IUser>;
  signOut(message?: string): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const storageVariables = {
  token: '@App:token',
  user: '@App:user',
};

interface IAuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const { addToast } = useToast();

  const [data, setData] = useState<AuthState>({} as AuthState);
  const [isLoading, setLoading] = useState<boolean>(true);

  const signOut = useCallback(
    (message?: string) => {
      localStorage.removeItem(storageVariables.token);
      localStorage.removeItem(storageVariables.user);
      if (message && typeof message === 'string') {
        addToast({
          title: 'Erro de autenticação',
          type: 'error',
          description: message,
        });
      }

      setData({} as AuthState);
    },
    [addToast]
  );

  const configureAxios = useCallback(
    (token: string) => {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      api.interceptors.response.use(
        (response) => response,
        (error: unknown) => {
          if (error instanceof AxiosError) {
            if (error.response?.data.message === 'Invalid JWT token.') {
              addToast({
                title: 'Sua sessão expirou',
                description: 'Faça login novamente!',
                type: 'warning',
              });

              signOut();
            }
          }
          return Promise.reject(error);
        }
      );
    },
    [signOut, addToast]
  );

  const signIn = useCallback(
    async ({ hcm_code: hcmCode, password }: SignInCredentials) => {
      setLoading(true);

      const response = await api.post(AuthApiRoutes.SESSIONS, {
        hcm_code: hcmCode,
        password,
      });

      const { token, user } = response.data;

      // if(reset_password)
      localStorage.setItem(storageVariables.token, token);
      localStorage.setItem(storageVariables.user, JSON.stringify(user));

      configureAxios(token);

      setData({ user });
      setLoading(false);
      return user;
    },
    [configureAxios]
  );

  const updateUser = useCallback(async (user: IUpdateUser) => {
    const { id, ...rest } = user;
    const response = await api.put<IUser>(`${AuthApiRoutes.USERS}/${id}`, {
      ...rest,
    });
    localStorage.setItem(storageVariables.user, JSON.stringify(response));
    // setData(response);
  }, []);

  useEffect(() => {
    function loadStorageData() {
      setLoading(true);

      const user = localStorage.getItem(storageVariables.user);
      const token = localStorage.getItem(storageVariables.token);

      if (user && token) {
        const parsedUser: IUser = JSON.parse(user);

        configureAxios(token);
        setData({ user: parsedUser });
      }

      setLoading(false);
    }

    loadStorageData();
  }, [configureAxios]);

  return (
    <AuthContext.Provider
      value={{ user: data.user, isLoading, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
