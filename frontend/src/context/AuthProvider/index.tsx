import { createContext, useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { IAuthContext, IAuthProvider } from './types';
import { getProfileLocalStorage, getTokenLocalStorage, getUserNameLocalStorage } from './utils';
import { useNavigate } from 'react-router-dom';
import Api from '../../services/Api';
// import { useTranslation } from 'react-i18next';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function AuthProvider({ children }: IAuthProvider) {
  const [userName, setUserName] = useState<string>('');
  const [profile, setProfile] = useState<string>('');
  const [userValidation, setUserValidation] = useState(false);
  const [messageError, setMessageError] = useState<
    | {
        code: number;
        message: string;
      }
    | undefined
  >();
  const [errorEmail, setErrorEmail] = useState<boolean>(false);
  const [errorPassword, setErrorPassword] = useState<boolean>(false);

  const { handleLogin } = useAuth(setMessageError, setErrorEmail, setErrorPassword);

  const tokenByLocalStorage = getTokenLocalStorage();

  const navigate = useNavigate();

  useEffect(() => {
    if (tokenByLocalStorage) {
      const userNameLocalStorage = getUserNameLocalStorage();
      if (userNameLocalStorage !== null) {
        setUserName(userNameLocalStorage);
      }

      const profileNameLocalStorage = getProfileLocalStorage();
      if (profileNameLocalStorage !== null) {
        setProfile(profileNameLocalStorage);
      }
    }

    setUserValidation(true);
  }, [tokenByLocalStorage]);

  async function Logout() {
    try {
      await Api.post('auth/logout');
      localStorage.clear();
      localStorage.setItem('is_logged_in', 'false');
      navigate('/login');
    } catch {}
  }

  return (
    <AuthContext.Provider
      value={{
        messageError,
        handleLogin,
        setMessageError,
        userName,
        profile,
        errorEmail,
        errorPassword,
        setErrorEmail,
        setErrorPassword,
        Logout,
        userValidation,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
