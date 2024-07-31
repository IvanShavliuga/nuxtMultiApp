import type { UserShort } from "./socialStat";

export type Group = {
  name: string;
  desc: string;
  category: string;
  id: number;
  idAdmin: number;
  idNews: number[];
  followers: UserShort[];
  admin: {
    login: string;
    avatar: string;
    name: string;
    spec: string;
    skills: string[];
    city: string;
  };
};
