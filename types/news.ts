import type { UserShort } from "./socialStat";
export type Comment = {
  id: number;
  userId: number;
  user: UserShort;
  postId: number;
  text: number;
};
export type Post = {
  id: number;
  userId: number;
  groupId: number;
  date: string;
  time: string;
  title: string;
  desc: string;
  like: UserShort[];
  repost: UserShort[];
  comments: Comment[];
  views: UserShort[];
  cat: string[];
  type: "post";
  likeclick: boolean;
  group?: {
    name: string;
    id: number;
    isAdmin: boolean;
  };
  user?: {
    login: string;
    avatar: string;
    name: string;
    spec: string;
    skills: string[];
    city: string;
  };
};
export type Posts = Post[];
