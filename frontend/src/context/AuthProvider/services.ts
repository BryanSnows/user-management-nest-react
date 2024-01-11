import Api from '../../services/Api';
import { setTokenLocalStorage } from './utils';

export async function getRefreshToken() {
  const refreshToken = localStorage.getItem('refresh_token') || '';

  const response = await Api.post(
    `/auth/refresh_token`,
    {},
    {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    },
  );

  const newAccessToken = response.data.access_token;
  setTokenLocalStorage(newAccessToken);

  return newAccessToken;
}

export async function logoutAndRedirectToLogin() {
  try {
    await Api.post(`/auth/logout`);
  } catch (error) {
    console.log(`Erro ao fazer Logout`, error);
  } finally {
    localStorage.clear();
    window.location.href = '/login';
  }
}
