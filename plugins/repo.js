const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "📡",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*BLAST-MD REPO*

*| ɴᴀᴍᴇ*: BLAST-MD
*| ᴏᴡɴᴇʀ*: DENZO-UCHIWA ( BLAST-MD )
*| ɴᴜᴍʙᴇʀ*: +244956100349
*| ᴠᴇʀꜱɪᴏɴ*: 1.0.0


*📡 REPO LINK*
🔗◦https://github.com/DENZO-UCHIWA/BLAST-MD.git

*📌 SUBSCRIBE MY YOUTUBE CHANNEL*
🔗◦ 

©ᴘᴏᴡᴇʀᴇᴅ BY DENZO-UCHIWA
`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/397000a07a1deb7fad9c2.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
