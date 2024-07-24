export type SocialStat = {
    avatar: string; 
    id:number;
    name: string; 
}
export type Comment = {
    id: number;
    userId: number;
    user: SocialStat;
    postId: number;
    text: number;
}
export type Post = {
    id: number;
    userId: number;
    groupId: number;
    date:string;
    time:string;
    title:string;
    desc:string;
    like:SocialStat[];
    repost: SocialStat[];
    comments: Comment[];
    views: SocialStat[];
    cat: string[];
    type: "post";
    likeclick: boolean;
    group?: {
        name: string;
        id: number;
        isAdmin: boolean
    };
    user?: {
        avatar: string;
        name: string;
        spec: string; 
        skills: string[];
        city: string;
    };
}
export type Posts = Post[]
