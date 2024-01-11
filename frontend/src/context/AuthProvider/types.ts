export interface IAuthContext {
  transactions?: number[];
  userName?: string;
  errorEmail?: boolean;
  errorPassword?: boolean;
  setErrorEmail: (value: boolean) => void;
  setErrorPassword: (value: boolean) => void;
  profile?: string;
  messageAttempts?: string;
  setMessageError?: (value?: IAuthError) => void;
  setMessageAttempts?: (value: string) => void;
  messageError?: IAuthError;
  Logout?: () => void;
  handleLogin: (email: string, password: string) => void;
  newPassword?: boolean;
  firstPassword?: string;
  setNewPassword?: (value: boolean) => void;
  userValidation?: boolean;
}

export interface IAuthProvider {
  children: JSX.Element;
}

export interface IUserToken {
  email: string;
  profile: string;
  exp: number;
  name: string;
  iat: number;
}

export interface IAuthError {
  code: number;
  message: string;
}
