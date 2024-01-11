import jwt_decode from 'jwt-decode';

export interface IAccessToken {
  email?: string;
  name?: string;
  profile_id?: number;
  transactions?: number[];
  profile_status?: boolean;
  iat: number;
  exp: number;
}

export interface IRefreshToken {
  email: string;
  iat: number;
  exp: number;
}

export function getDecodedToken(): IAccessToken | undefined {
  try {
    return jwt_decode(localStorage.getItem('acc_token') || '');
  } catch (error) {}
}

export function getDecodedRefreshToken(): IRefreshToken | undefined {
  try {
    return jwt_decode(localStorage.getItem('refresh_token') || '');
  } catch (error) {}
}

export function isUserLoggedIn() {
  const decoded_access_token = getDecodedToken();

  if (!decoded_access_token) {
    return false;
  }

  return true;
}
