// import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Api from '../../services/Api';

import {
  setProfileLocalStorage,
  setRefreshTokenLocalStorage,
  setTokenLocalStorage,
  setEmailLocalStorage,
  setUserNameLocalStorage,
} from '../AuthProvider/utils';
import { CodeError } from '../../common/enums';
import { IAuthError } from '../AuthProvider/types';

export function useAuth(
  setMessageError: (value?: IAuthError) => void,
  setErrorEmail: (value: boolean) => void,
  setErrorPassword: (value: boolean) => void,
) {
  const navigate = useNavigate();
  async function handleLogin(email: string, password: string) {
    const body = {
      email: email,
      password: password,
    };

    await Api.post('auth/login', body)
      .then((response) => {
        setTokenLocalStorage(response.data.access_token);
        setRefreshTokenLocalStorage(response.data.refresh_token);
        setEmailLocalStorage(response.data.email);
        setProfileLocalStorage(response.data.profile_name);
        setUserNameLocalStorage(response.data.name);
        localStorage.setItem('is_logged_in', 'true');
        localStorage.removeItem('email');
        navigate('/home');

        setErrorEmail(false);
        setErrorPassword(false);
      })

      .catch(async (error) => {
        if (error.response.data.code == CodeError.EXTERNAL_LOGIN_ERROR) {
          setErrorEmail(true);
          setErrorPassword(true);
        }
        setMessageError(error.response.data);
      });
  }

  return { handleLogin };
}
