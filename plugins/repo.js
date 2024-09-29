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

let dec = `*𝐁𝐋𝐀𝐒𝐓-𝐌𝐃 REPO*


╭––––––––––––––––––––––––►
├──► *🎯Total Stars:* 2
┆
├──► *🎯Forks:* 2
┆
├──► *🎯github link:* https://github.com/DENZO-UCHIWA/BLAST-MD
┆
├──► *🎯support Group:* https://chat.whatsapp.com/IR8cZNst6cU85ih73fVrud
┆
├──► *🎯develeper num:* +244939457425
┆
├──► *🎯Tutoral video:*
┆
├──► 🎯𝐁𝐋𝐀𝐒𝐓-𝐌𝐃 𝐁𝐘  
╰––––––––––––––––––––––––►


*📡 REPO LINK*
🔗◦https://github.com/DENZO-UCHIWA/BLAST-MD.git

*📌 SUBSCRIBE MY YOUTUBE CHANNEL*
🔗◦ 

 BY DENZO-UCHIWA
`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/08f0eaf22ae3a2808b3a9.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
