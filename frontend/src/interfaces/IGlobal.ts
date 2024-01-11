export interface ILogin {
  user: string;
  password: string;
}

export interface IUser {
  user_id?: number;
  user_name: string;
  user_email: string;
  user_status?: boolean;
  profile_id: number;
  user_password_status?: boolean;
  user_password?: string;
  user_first_access?: boolean;
  user_refresh_token?: null | string;
  profile?: IProfile;
}

export interface IUserTableRow {
  user_id?: number;
  user_name: string;
  user_email?: string;
  profile_name?: string;
  status: boolean;
}

export interface IProfile {
  profile_id: number;
  profile_name: string;
}
