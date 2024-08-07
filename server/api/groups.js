// /server/api/read.get.ts
import * as path from "node:path";
import * as fs from "node:fs";
export default eventHandler(async (event) => {
  //event
  const filePath = path.join(process.cwd(), "public", "db.json");
  const data = JSON.parse(await fs.promises.readFile(filePath, "utf-8"));
  const { groups, users, posts } = data;
  const res = groups.map((g) => {
    const usr = users.filter((u) => u.id === g.idAdmin);
    const user = {
      login: usr[0].login,
      avatar: usr[0].avatar,
      name: usr[0].name,
      spec: usr[0].spec,
      skills: usr[0].skills,
      city: usr[0].city,
    };
    const r = {
      ...g,
      admin: user,
    };
    r.followers = users
      .filter((u) => g.followers.includes(u.id))
      .map((f) => ({
        avatar: f.avatar,
        id: f.id,
        name: f.name,
        login: f.login,
      }));
    r.posts = posts.filter((p) => g.idNews.includes(p.groupId));
    return r;
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
    const adminParametr = parametrs.filter((p) => "admin" in p);
    if (adminParametr.length) {
      const grp = res.filter((u) => u.idAdmin === +adminParametr[0].admin);
      filterRes.push(...grp);
    }
    const followParametr = parametrs.filter((p) => "follow" in p);
    if (followParametr.length) {
      const grp = res.filter(
        (u) =>
          u.followers.findIndex((f) => f.id === +followParametr[0].follow) > -1,
      );
      filterRes.push(...grp);
    }
    return {
      groups: filterRes,
    };
  }
  return {
    groups: res,
  };
});
