export type UserShort = {
  avatar: string;
  id: number;
  name: string;
  login: string;
};
export type userBox = {
  login: string;
  avatar: string;
  name: string;
  spec: string;
  skills: string[];
  city: string;
};
export type SocialStatField = "like" | "repost" | "comments" | "views";

export type SocialStatList = {
  field: SocialStatField;
  hint: string;
  value: number;
  icon: string;
}[];
