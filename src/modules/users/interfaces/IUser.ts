export interface IUser {
  type: 'ADMIN' | 'DEFAULT';
  hcm_code: string;
  id: string;
  name: string;
  reset_password: boolean;
}

export interface IUpdateUser {
  type?: 'ADMIN' | 'DEFAULT';
  hcm_code?: string;
  id: string;
  name?: string;
  reset_password?: boolean;

  password?: string;
  password_confirmation?: string;
}
