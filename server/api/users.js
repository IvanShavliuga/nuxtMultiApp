// /server/api/read.get.ts
import * as path from 'node:path'
import * as fs from 'node:fs'
export default eventHandler(async (event) => {
    const filePath = path.join(process.cwd(), 'public', 'db.json')
    const data = JSON.parse(await fs.promises.readFile(filePath, 'utf-8'))
    const { users } = data
    const usersRes = users.map((u) => {
        const r = {
            ...u
        }
        r.friends = users
            .filter((f) => f.friends.includes(u.id) && u.id !== f.id)
            .map((f) => ({ avatar: f.avatar, id: f.id, name: f.name, login: f.login }))
        delete r.password
        return r
    })
    return {
        "users":usersRes
        
    }
})