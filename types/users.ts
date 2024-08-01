import type { UserShort } from "./socialStat";
export type UserRang = "Admin" | "User" | "Moderator";
export type UserGender = "men" | "women";
export type UserMessager = "phone" | "email" | "telegram";
export type UserContact = {
  messager: UserMessager;
  contact: string;
};
export type User = {
  id: number;
  rang: UserRang;
  link: string;
  login: string;
  gender: UserGender;
  age: number;
  avatar: string;
  friends: UserShort[];
  name: string;
  spec: string;
  skills: string[];
  city: string;
  contacts: UserContact[];
};
