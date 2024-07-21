
export type Post = {
    id: number;
    userId: number;
    groupId: number;
    date:string;
    time:string;
    title:string;
    desc:string;
    like:[number];
    repost: [number];
    comments: [number];
    views: [number];
    cat: [string];
    type: "post";
    likeclick: boolean;
}
export type Posts = Post[]
