// /server/api/read.get.ts
import * as path from "node:path";
import * as fs from "node:fs";
export default eventHandler(async (event) => {
  const filePath = path.join(process.cwd(), "public", "db.json");
  const data = JSON.parse(await fs.promises.readFile(filePath, "utf-8"));
  const { users, comments, groups } = data;
  const posts = data.posts.map((p) => {
    const usr = users.filter((u) => u.id === p.userId);
    const fm = { ...p, user: {}, group: {} };
    const user = {
      login: usr[0].login,
      avatar: usr[0].avatar,
      name: usr[0].name,
      spec: usr[0].spec,
      skills: usr[0].skills,
      city: usr[0].city,
    };
    if (usr.length) {
      fm.user = user;
    }
    const grp = groups.filter((g) => g.id === p.groupId);
    if (grp.length) {
      fm.group = {
        name: grp[0].name,
        id: grp[0].id,
        isAdmin: grp[0].isAdmin === p.userId,
      };
    }
    fm.comments = comments
      .filter((c) => c.postId === p.id)
      .map((c) => ({ ...c, user }));
    fm.like = users
      .filter((u) => p.like.includes(u.id))
      .map((u) => ({
        avatar: u.avatar,
        id: u.id,
        name: u.name,
        login: u.login,
      }));
    fm.repost = users
      .filter((u) => p.repost.includes(u.id))
      .map((u) => ({
        avatar: u.avatar,
        id: u.id,
        name: u.name,
        login: u.login,
      }));
    fm.views = users
      .filter((u) => p.views.includes(u.id))
      .map((u) => ({
        avatar: u.avatar,
        id: u.id,
        name: u.name,
        login: u.login,
      }));

    return fm;
  });
  const { url } = event.node.req;
  const query = url.split("?");
  if (query.length === 2) {
    const parametrs = query[1].split("&").map((p) => {
      const pd = p.split("=");
      const po = {};
      po[pd[0]] = pd[1];
      return po;
    });
    const filterRes = [];
    const authorParametr = parametrs.filter((p) => "author" in p);
    if (authorParametr.length) {
      const grp = posts.filter((u) => u.userId === +authorParametr[0].author);
      filterRes.push(...grp);
    }
    return {
      posts: filterRes,
    };
  }
  return {
    posts: posts,
  };
});
