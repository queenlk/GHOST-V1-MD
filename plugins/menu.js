const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "🪰",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `

╭───────────●
╎👻𝗴𝗼𝗼𝗱 𝗺𝗼𝗿𝗻𝗶𝗻𝗴👋
╰───────────●
╔══════════════❍
║➪.𝐁𝐎𝐓 𝐍𝐀𝐌𝐄: 𝐁𝐋𝐀𝐒𝐓-𝐌𝐃 
║➪.𝐃é𝐯𝐞𝐥𝐨𝐩𝐞𝐫 𝐍𝐔𝐌:+244956100349 
║➪.𝐁𝐎𝐓 𝐒𝐏𝐄𝐄𝐃: 000.23 
║➪.𝐌𝐄𝐌𝐎𝐑𝐘: 64GB
║➪.𝐁𝐎𝐓 𝐁𝐘: 𝐃𝐄𝐍𝐙𝐎 𝐔𝐂𝐇𝐈𝐖𝐀
╚══════════════❍
    ╭─────────●
    ╎📃𝙘𝙤𝙢𝙢𝙖𝙣𝙙 𝙡𝙞𝙨𝙩
    ╰─────────●
╭━❮ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁 ❯━╮
┃✰ .𝚂𝚝𝚒𝚌𝚔𝚎𝚛
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝙰𝙸 ❯━╮
┃✰ .𝙰𝚒
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 ❯━╮
┃✰ .𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚔
┃✰ .𝙼𝚎𝚍𝚒𝚊𝚏𝚒𝚛𝚎
┃✰ .𝙶𝚍𝚛𝚒𝚟𝚎
┃✰ .𝙸𝚖𝚐
┃✰ .𝙸𝚗𝚜𝚝𝚊
┃✰ .𝚂𝚘𝚗𝚐
┃✰ .𝚅𝚒𝚍𝚎𝚘
┃✰ .𝚈𝚝𝚖𝚙3𝚍𝚘𝚌
┃✰ .𝚈𝚝𝚖𝚙4𝚍𝚘𝚌
┃✰ .𝚃𝚒𝚔𝚝𝚘𝚔
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝙼𝙰𝙸𝙽 ❯━╮
┃✰ .𝙿𝚒𝚗𝚐
┃✰ .𝙰𝚕𝚒𝚟𝚎
┃✰ .𝚃𝚛𝚝
┃✰ .𝙾𝚠𝚗𝚎𝚛
┃✰ .𝙼𝚎𝚗𝚞
┃✰ .𝚁𝚎𝚙𝚘
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝙾𝚆𝙽𝙴𝚁 ❯━╮
┃✰ .𝐻𝑎𝑐𝑘
┃✰ .𝚁𝚊𝚜𝚝𝚊𝚛𝚝
╰━━━━━━━━━━━━━━━⪼
 ©*BLAST-MD BY DENZO-UCHIWA*
`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/016fbf2d66a8dd3504aa8.png`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
