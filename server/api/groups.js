// /server/api/read.get.ts
import * as path from 'node:path'
import * as fs from 'node:fs'
export default eventHandler(async (event) => {
    const filePath = path.join(process.cwd(), 'public', 'db.json')
    const data = JSON.parse(await fs.promises.readFile(filePath, 'utf-8'))
    const { groups, users, posts } = data
    const res = groups.map((g) => {
        const usr = users.filter((u) => u.id === g.idAdmin)
        const user = {
            login: usr[0].login,
            avatar: usr[0].avatar,
            name: usr[0].name,
            spec: usr[0].spec, 
            skills: usr[0].skills, 
            city: usr[0].city,
        }
        const r = {
            ...g,
            admin: user
        }
        r.followers = users
            .filter((u) => g.followers.includes(u.id))
            .map((f) => ({ avatar: f.avatar, id: f.id, name: f.name, login: f.login }))
        r.posts = posts.filter((p) => g.idNews.includes(p.groupId))
        return r
    })
    return {
        "groups":res
        
    }
})