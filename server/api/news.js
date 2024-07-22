// /server/api/read.get.ts
import * as path from 'node:path'
import * as fs from 'node:fs'
export default eventHandler(async (event) => {
    const filePath = path.join(process.cwd(), 'public', 'db.json')
    const data = JSON.parse(await fs.promises.readFile(filePath, 'utf-8'))
    const { users, comments, groups } = data
    console.log(groups)
    const posts = data.posts.map((p) => {
        const usr = users.filter((u) => u.id === p.userId)
        const fm = {...p, user: {}, group: {}}
        if (usr.length) {
            fm.user = {
                avatar: usr[0].avatar,
                name: usr[0].name,
                spec: usr[0].spec, 
                skills: usr[0].skills, 
                city: usr[0].city,
            }
        }
        const grp = groups.filter((g) => g.id === p.groupId)
        if (grp.length) {
            fm.group = {
                name: grp[0].name,
                id: grp[0].id,
                isAdmin: grp[0].isAdmin === p.userId
            }
        }
        fm.comments = comments.filter((c) => c.postId === p.id)
        fm.like = users.filter((u) => p.like.includes(u.id)).map((u) => ({ avatar: u.avatar, id: u.id, name: u.name }))
        fm.repost = users.filter((u) => p.repost.includes(u.id)).map((u) => ({ avatar: u.avatar, id: u.id, name: u.name }))
        fm.views = users.filter((u) => p.views.includes(u.id)).map((u) => ({ avatar: u.avatar, id: u.id, name: u.name }))
        return fm
    })
    return {
        "posts":posts
        
    }
})