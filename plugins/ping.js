const config = require('../config')
const { cmd, commands } = require('../command')

cmd({
    pattern: "ping",
    desc: "To check ping bro",
    category: "main",
    reacta: "⚡",
    filename: __filename,
},
    async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    async (Void, citel) => {
    var initial = new Date().getTime();
    const { key } = await Void.sendMessage(citel.chat, { text: 'PING BLAST-MD BY DENZO-UCHIWA' });
    var final = new Date().getTime();

    // Calculate the ping value in milliseconds
    const pingValue = final - initial;

    // Create a loading bar
    const loadingBarLength = 1 ;
    const loadedBlocks = loadingBarLength;
    const loadingBar = '𝐁𝐋𝐀𝐒𝐓-𝐌𝐃 PING BY 𝐃𝐄𝐍𝐙𝐎 𝐔𝐂𝐇𝐈𝐖𝐀'.repeat(loadedBlocks);

    // Send the loading bar first
    await Void.sendMessage(citel.chat, { text: `*Pong*\n ${loadingBar} `, edit: key });

    // Wait for a brief moment (you can customize this delay)
    await Secktor.sleep(1000);

    // Send the final ping message
    return await Void.sendMessage(citel.chat, { text: *Ping: ${pingValue} ms* });
});
