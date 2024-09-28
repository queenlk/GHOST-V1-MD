const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')

cmd({
    pattern: "song",
    desc: "download songs",
    category: "download",
    react: "🎵",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*WAIT PLEASE*")
const search = await yts(q)
const data = search.videos[0]
const url = data.url

let desc = `*◆ BLAST-MD SONG DOWNLOADING..... ◆*

| ➤ TITLE - ${data.title}

| ➤ VIEWS - ${data.views}

| ➤ DESCRIPTION - ${data.description}

| ➤ TIME - ${data.timestamp}

|➤ AGO - ${data.ago}

 ªBY DENZO-UCHIWA
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.yta(url)  
let downloadUrl = down.dl_url

//send audio
await conn.sendMessage(from,{audio:{url: downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document:{url: downloadUrl},mimetype:"audio/mpeg",fileName:data.title + "mp3",caption:"©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢʜᴏꜱᴛ-ᴍᴅ"},{quoted:mek})
}catch(e){
reply(`${e}`)
}
})

//===========video-dl===========

cmd({
    pattern: "video",
    desc: "download video",
    category: "download",
    react: "🎥",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("WAIT PLEASR...*")
const search = await yts(q)
const data = search.videos[0]
const url = data.url

let des = `*◆ BLAST-MD VIDEO DOWNLOADING.....◆*

| ➤ TITLE - ${data.title}

| ➤ VIEWS - ${data.views}

| ➤ DESCRIPTION - ${data.description}

| ➤ TIME - ${data.timestamp}

| ➤ AGO - ${data.ago}

ªBY DENZO-UCHIWA
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:des},{quoted:mek});

//download video

let down = await fg.ytv(url)  
let downloadUrl = down.dl_url

//send video
await conn.sendMessage(from,{video:{url: downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document:{url: downloadUrl},mimetype:"video/mp4",fileName:data.title + "mp4",caption:"ªBY DENZO-UCHIWA"},{quoted:mek})
    
}catch(a){
reply(`${a}`)
}
})
//===========video-dl===========
 
cmd({
            pattern: "play",
            desc: "Sends info about the query(of youtube video/audio).",
            category: "downloader",
            filename: __filename,
            use: '<faded-Alan walker.>',
        },
        async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{ 
          if(!q) return reply("WAIT PLEASR...*")
const search = await yts(q);
            let anu = search.videos[0];
           const url = data.url
  let des= `*◆ BLAST-MD VIDEO DOWNLOADING.....◆*

                
╭––––––––––––––––––►
├──►🎯 ${tlang().title} 
├──►🎯 *Youtube Player* 
├──►🎯 *Title:* ${anu.title}
├──►🎯 *Duration:* ${anu.timestamp}
├──►🎯 *Viewers:* ${anu.views}
├──►🎯 *Uploaded:* ${anu.ago}
├──►🎯 *Author:* ${anu.author.name}
├──►🎯
├──►🎯 📍𝐁𝐋𝐀𝐒𝐓-𝐌𝐃 
╰–––––––––––––––––––►
⦿ *Url* : ${anu.url}
`,
                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
	    }
         let urlYt = text;
            if(!text){ text=citel.quoted.text; }

            if (!urlYt.startsWith("http")) 
            {
                let yts = require("secktor-pack");
                let search = await yts(text);
                let anu = search.videos[0];
                urlYt = anu.url; 
            }
            let infoYt = await ytdl.getInfo(urlYt);
            if (infoYt.videoDetails.lengthSeconds >= 1200) return citel.reply(`*song not Found, Try Differ Name*`);
            let titleYt = infoYt.videoDetails.title;   
	    citel.reply(`_Downloading ${infoYt.videoDetails.title}?_`);
            let randomName = getRandom(".mp3");
            const stream = ytdl(urlYt, {
                 filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128, })
                 .pipe(fs.createWriteStream(`./${randomName}`));
                
	   await new Promise((resolve, reject) => { stream.on("error", reject);  stream.on("finish", resolve);  });
            
            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            if (fileSizeInMegabytes <= dlsize) 
            {
                let yts = require("secktor-pack");
                let search = await yts(text);
                let buttonMessage = 
				{
				    audio: fs.readFileSync(`./${randomName}`),
				    mimetype: 'audio/mpeg',
				    fileName: titleYt + ".mp3",
				    headerType: 4,
				 }
                 
                await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                return fs.unlinkSync(`./${randomName}`);
            } 
            else {   citel.reply(`❌ File size bigger than 100mb.`);    }
             return fs.unlinkSync(`./${randomName}`);
   
   }catch (e) { return citel.reply(`Error While Downloading Your Song`);  }
})
//---------------------------------------------------------------------------
cmd({
            pattern: "mp4",
            desc: "Downloads video from yt.",
            category: "downloader",
            filename: __filename,
            use: '<808-juice wrld >',
        },
        async(Void, citel, text) => {
            let yts = require("secktor-pack");
            let search = await yts(text);
            let anu = search.videos[0];
            let urlYt = anu.url
            const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`;
            };
                let infoYt = await ytdl.getInfo(urlYt);
                if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`😔 Video file too big!`);
                let titleYt = infoYt.videoDetails.title;
                let randomName = getRandom(".mp4");
                citel.reply('*Downloading:* '+titleYt)
                const stream = ytdl(urlYt, {
                        filter: (info) => info.itag == 22 || info.itag == 18,
                    })
                    .pipe(fs.createWriteStream(`./${randomName}`));
                await new Promise((resolve, reject) => {
                    stream.on("error", reject);
                    stream.on("finish", resolve);
                });
                let stats = fs.statSync(`./${randomName}`);
                let fileSizeInBytes = stats.size;
                let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
                if (fileSizeInMegabytes <= dlsize) {
                    let buttonMessage = {
                        video: fs.readFileSync(`./${randomName}`),
                        jpegThumbnail: log0,
                        mimetype: 'video/mp4',
                        fileName: `${titleYt}.mp4`,
                        caption: ` ► *Title* : ${titleYt}\n ► *Duration* :  ${anu.timestamp}\n ► *Vue*  ${anu.views}\n ► 🎯𝐁𝐋𝐀𝐒𝐓-𝐌𝐃`,
                        headerType: 4,
                        contextInfo: {
                            externalAdReply: {
                                title: titleYt,
                                body: citel.pushName,
                                thumbnail: await getBuffer(search.all[0].thumbnail),
                                renderLargerThumbnail: true,
                                mediaType: 2,
                                mediaUrl: search.all[0].thumbnail,
                                sourceUrl: search.all[0].thumbnail
                            }
                        }
                    }
                 Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                 return fs.unlinkSync(`./${randomName}`);
                } else {
                    citel.reply(`😔 File size bigger than 100mb.`);
                }
                return fs.unlinkSync(`./${randomName}`);      


        }
    )
