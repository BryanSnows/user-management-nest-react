import axios, { AxiosError, AxiosResponse } from 'axios';
import { getRefreshToken, logoutAndRedirectToLogin } from '../context/AuthProvider/services';
import { getDecodedRefreshToken } from '../common/utils/auth';

const Api = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}/v1`,
});

Api.interceptors.request.use((request: any) => {
  const token = localStorage.getItem('acc_token') || localStorage.getItem('first_acc') || '';

  if (token) {
    request.headers.common.Authorization = `Bearer ${token.toString()}`;
  }

  return request;
});

Api.interceptors.response.use(
  async (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const pathsToExclude = ['auth/login', 'auth/first_access'];
    if (
      error.response?.status === 401 &&
      !pathsToExclude.includes(error.response.config.url || '')
    ) {
      const originalRequest: any = error.config;
      const refreshTokenDecoded = getDecodedRefreshToken();

      if (refreshTokenDecoded && refreshTokenDecoded.exp * 1000 > Date.now()) {
        try {
          const newAccessToken = await getRefreshToken();
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return Api(originalRequest);
        } catch (refreshError) {
          console.error('Erro ao renovar o token:', refreshError);
          logoutAndRedirectToLogin();
        }
      } else {
        console.error('Refresh token não encontrado ou expirado');
        logoutAndRedirectToLogin();
      }
    }

    return Promise.reject(error);
  },
);

export default Api;
