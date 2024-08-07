// /server/api/read.get.ts
import * as path from "node:path";
import * as fs from "node:fs";
export default eventHandler(async (event) => {
  const filePath = path.join(process.cwd(), "public", "db.json");
  const data = JSON.parse(await fs.promises.readFile(filePath, "utf-8"));
  const { users } = data;
  const usersRes = users.map((u) => {
    const r = {
      ...u,
    };
    r.friends = users
      .filter((f) => f.friends.includes(u.id) && u.id !== f.id)
      .map((f) => ({
        avatar: f.avatar,
        id: f.id,
        name: f.name,
        login: f.login,
      }));
    delete r.password;
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
    const loginParamter = parametrs.filter((p) => "login" in p);
    if (loginParamter.length) {
      const usrLogin = usersRes.filter(
        (u) => u.login === loginParamter[0].login,
      );
      return {
        user: usrLogin[0],
      };
    }
  }
  return {
    users: usersRes,
  };
});
