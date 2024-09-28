const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "📡",
    filename: __filename
},
async(Void, citel) => {
        let { data } = await axios.get('https://api.github.com/repos/DENZO-UCHIWA/BLAST-MD')
        let cap = `Hey *BLAST-MD*


╭––––––––––––––––––––––––►
├──► *🎯Total Stars:* ${data.stargazers_count} stars
┆
├──► *🎯Forks:* ${data.forks_count} forks
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
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/397000a07a1deb7fad9c2.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
