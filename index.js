const Discord = require('discord.js');
const bot = new Discord.Client();
const path = require('path');
/*const prefix = "$";
Inutile car on vérifie que le message commence par "$jazz", etc.
*/
const fs = require('fs');
const ddiff = require('return-deep-diff');
const ytdl = require('ytdl-core');

const streamOptions = { seek: 0, volume: 0.2 };

var cli = new Discord.Client({autoReconnect:true});

bot.commands = new Discord.Collection();

const url = 'https://www.youtube.com/watch?v=eVrYbKBrI7o'
const url2 = 'https://www.youtube.com/watch?v=G5DA1tkan94'
//https://youtube.com/watch?v=_sI_Ps7JSEk

bot.on('ready', () => {
    console.log('McJazz is ready');
    bot.user.setPresence(({ game: { name: " Jazz Lounge", type: 2}}));
});

/*bot.on("message", function (message) {
    if (message.author.equals(bot.user)) return;
    if (!message.content.startsWith(prefix)) return;
    if (message.content.startsWith(prefix)) message.delete(100);
});
Un simple message.delete() suffit por supprimer la commande.
*/

bot.on('message', message => {
    if (message.content === '$leave') {
        console.log('leave');
        message.delete();
        voiceChannel.leave();
    }

    if (message.content === '$jazz') {
        console.log('request');
        message.delete();

        const voiceChannel = message.member.voiceChannel;

        if (!voiceChannel) return message.reply('Please be in a voice channel first!');

        voiceChannel.join().then(connection => {
            let stream = connection.playStream(ytdl(url, { filter: 'audioonly' }), streamOptions);
            stream.on("end", () => {
                let stream = connection.playStream(ytdl(url2,  { filter: 'audioonly' }), streamOptions);
            });
        }).catch(error => console.log(error));
    }
});

bot.login(process.env.BOT_TOKEN);
