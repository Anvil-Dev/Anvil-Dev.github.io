import * as fs from "node:fs";

interface Member {
    name: string,
    avatar?: string,
    links: {
        icon: "github" | "bilibili",
        link: string
    }[],
    title: string
}

async function downloadGithubAvatar(username: string, name: string) {
    try {
        const url = `https://gh-proxy.top/https://api.github.com/users/${username}`
        const res = await fetch(url)
        if (!res.ok) return undefined
        const json = await res.json()
        const savePath = `src/public/avatars/${name}.png`
        if (!json.avatar_url) return undefined
        const avatarResponse = await fetch(json.avatar_url)
        const buffer = await avatarResponse.arrayBuffer()
        fs.writeFileSync(savePath, Buffer.from(buffer))
        return `/avatars/${name}.png`
    } catch (e) {
        return undefined
    }
}

async function downloadBiliBiliAvatar(uid: string, name: string) {
    try {
        const url = `https://space.bilibili.com/${uid}`
        const res = await fetch(url)
        if (!res.ok) return undefined
        const text = await res.text()
        const match = text.match(/<link rel="apple-touch-icon" href="(.*?)">/)
        if (!match || !match[1]) return undefined
        const avatarUrl = "https:" + match[1]
        const avatarResponse = await fetch(avatarUrl)
        if (!avatarResponse.ok) return undefined
        const buffer = await avatarResponse.arrayBuffer()
        const savePath = `src/public/avatars/${name}.png`
        fs.writeFileSync(savePath, Buffer.from(buffer))
        return `/avatars/${name}.png`
    } catch (e) {
        return undefined
    }
}

const memberData = fs.readFileSync('member.txt', 'utf8')
const memberDatas = memberData.split('\n')
const contributors: Member[] = []
const supporters: Member[] = []
const promises: Promise<void>[] = []
let count = 0;

for (let member of memberDatas) {
    const memberSplited = member.split(',')
    const name = memberSplited[0]
    const ghid = memberSplited[1]
    const bilibili = memberSplited[3]
    const developer = memberSplited[5]
    const scholar = memberSplited[6]
    const bugHunter = memberSplited[7]
    const linguist = memberSplited[8]
    const supporter = memberSplited[9]
    const craftsman = memberSplited[10]
    const addon = memberSplited[11]
    const hasOther = developer === 'true'
        || scholar === 'true'
        || bugHunter === 'true'
        || linguist === 'true'
        || craftsman === 'true'
        || addon === 'true'
    const member1: Member = {
        name,
        links: [],
        title: ""
    }
    const thisPromises: Promise<void>[] = []
    if (ghid) {
        const avatarPromise = downloadGithubAvatar(ghid, name).then(avatar => {
            if (avatar) {
                member1.avatar = avatar
                member1.links.push({
                    icon: "github",
                    link: `https://github.com/${ghid}`
                })
            }
        })
        promises.push(avatarPromise)
        thisPromises.push(avatarPromise)
    }
    if (bilibili) {
        const avatarPromise = downloadBiliBiliAvatar(bilibili, name).then(avatar => {
            if (avatar) {
                member1.avatar = avatar
                member1.links.push({
                    icon: "bilibili",
                    link: `https://space.bilibili.com/${bilibili}`
                })
            }
        })
        promises.push(avatarPromise)
        thisPromises.push(avatarPromise)
    }
    if (developer === 'true') {
        if (member1.title) member1.title += " "
        member1.title += "代码民工💻"
    }
    if (scholar === 'true') {
        if (member1.title) member1.title += " "
        member1.title += "智识学者📚"
    }
    if (bugHunter === 'true') {
        if (member1.title) member1.title += " "
        member1.title += "捉虫达人🐞"
    }
    if (linguist === 'true') {
        if (member1.title) member1.title += " "
        member1.title += "语言学家🌏"
    }
    if (craftsman === 'true') {
        if (member1.title) member1.title += " "
        member1.title += "像素工匠👾"
    }
    if (addon === 'true') {
        if (member1.title) member1.title += " "
        member1.title += "砧艺添材➕"
    }
    const thisPromise = Promise.all(thisPromises).then(() => {
        if(!member1.avatar) {
            member1.avatar = `/avatars/${name}.png`
        }
        if (supporter === 'true') {
            const member2 = {
                ...member1
            }
            member2.title = "实力富哥💵"
            supporters.push(member2)
        }
        if (hasOther) {
            contributors.push(member1)
        }
        console.log(`${++count}/${memberDatas.length} ${member1.name} successed!`)
    });
    promises.push(thisPromise)
}

Promise.all(promises).then(() => {
    console.log("done")

    fs.writeFileSync('contributors.json', JSON.stringify(contributors, null, 2))
    fs.writeFileSync('supporters.json', JSON.stringify(supporters, null, 2))
})
