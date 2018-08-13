const Discord = require('discord.js');
const bot = new Discord.Client();
const path = require('path');
const prefix = "$";
const fs = require('fs');
const ddiff = require('return-deep-diff');
const ytdl = require('ytdl-core');

const streamOptions = { seek: 0, volume: 0.2 };

var cli = new Discord.Client({autoReconnect:true});

bot.commands = new Discord.Collection();

const url = 'https://www.youtube.com/watch?v=eVrYbKBrI7o'
const url2 = 'https://www.youtube.com/watch?v=MUL5w91dzbo'
/* https://youtube.com/watch?v=_sI_Ps7JSEk */

bot.on('ready', () => {
    console.log('McJazz is ready');
});

bot.on('ready', () => {
    bot.user.setPresence(({ game: { name: " Jazz Lounge", type: 2}}));
});

bot.on("message", function (message) {
    if (message.author.equals(bot.user)) return;
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(prefix)) {
        message.delete(100)
    }
});

bot.on('message', message => {
    if (message.content.startsWith('$jazz')) {
        console.log('Got a song request!');
        const voiceChannel = message.member.voiceChannel;

        if (!voiceChannel) return message.reply('Please be in a voice channel first!');

        voiceChannel.join()

        .then (connection => {
            music();
        })

        function music() {
            const stream = message.guild.voiceConnection.playStream(ytdl(url, { filter: 'audioonly' }), streamOptions)
            .once('end', () => function url2() {
              const stream = message.guild.voiceConnection.playStream(ytdl(url2,  { filter: 'audioonly' }), streamOptions)
            }) .once('end', () => music ())
        }
    }
    if (message.content.startsWith('$stop')) {
        console.log('Stop');
        if (!message.guild.member(bot.user).permissions.has("ADMINISTRATOR")) {
            message.member.voiceChannel.end()
            message.delete(10000)
        }

        if (message.guild.member(bot.user).permissions.has("ADMINISTRATOR")) {
            message.member.voiceChannel.end()
            message.delete(10000)
        }}
    if (message.content.startsWith('$leave')) {
        console.log('leave');
        if (!message.guild.member(bot.user).permissions.has("ADMINISTRATOR")) {
            message.member.voiceChannel.leave()
            message.delete(10000)
        }

        if (message.guild.member(bot.user).permissions.has("ADMINISTRATOR")) {
            message.member.voiceChannel.leave()
            message.delete(10000)
        }


    }
});

bot.login(process.env.BOT_TOKEN);
