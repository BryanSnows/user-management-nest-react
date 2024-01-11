export interface ILogin {
  user: string;
  password: string;
}

export interface IUser {
  user_id?: number;
  user_name: string;
  user_email: string;
  profile_id: number;
  user_password?: string;
  user_refresh_token?: null | string;
  profile?: IProfile;
}

export interface IUserTableRow {
  user_id?: number;
  user_name: string;
  user_email?: string;
  profile_name?: string;
}

export interface IProfile {
  profile_id: number;
  profile_name: string;
}
