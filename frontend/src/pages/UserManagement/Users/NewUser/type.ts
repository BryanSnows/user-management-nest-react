export interface ITableData {
  user_id: number;
  user_name: string;
  user_surname: string;
  user_email: string;
  profile_id: number;
  profile: {
    profile_id: number;
    profile_name: string;
  };
}

export interface IProfileObject {
  id?: number;
  value?: string;
}
