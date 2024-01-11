import { IProfile, IUser } from "../../interfaces/IGlobal";
import Api from "../Api";

export const fetchProfile = async () => {
  const { data } = await Api.get("users/profile");

  return data?.map((item: IProfile) => ({
    value: item.profile_name,
    id: item.profile_id,
  }));
};

export async function getUser(id: number | undefined) {
  const request = await Api.get(`users/${id}`);
  return request.data as IUser;
}
