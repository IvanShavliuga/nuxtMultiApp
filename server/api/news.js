// /server/api/read.get.ts
import * as path from 'node:path'
import * as fs from 'node:fs'
export default eventHandler(async (event) => {
    const filePath = path.join(process.cwd(), 'public', 'db.json')
    const data = JSON.parse(await fs.promises.readFile(filePath, 'utf-8'))
    const { users, comments } = data
    console.log(users)
    const posts = data.posts.map((p) => {
        const usr = users.filter((u) => u.id === p.userId)
        const fm = {...p, user: {}}
        if (usr.length) {
            fm.user = {
                avatar: usr[0].avatar,
                name: usr[0].name,
                spec: usr[0].spec, 
                skills: usr[0].skills, 
                city: usr[0].city,
            }
        }
        return fm
    })
    return {
        "posts":posts
        
    }
})