const Discord = require('discord.js');
const bot = new Discord.Client();
const path = require('path');
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

bot.on('message', msg => {
    const voiceChannel = msg.member.voiceChannel;

    if (msg.content === '$leave') {
        console.log('leave');
        msg.delete();
        voiceChannel.leave();
    }

    if (msg.content === '$jazz') {
        console.log('request');
        msg.delete();

        if (!voiceChannel) return msg.reply('Please be in a voice channel first!');

        voiceChannel.join().then(connection => {
            music();
        }).catch(error => console.log(error));

        function music () {
              let stream = connection.playStream(ytdl(url, { filter: 'audioonly' }), streamOptions);
              stream.on("end", () => {
                  let stream = connection.playStream(ytdl(url2,  { filter: 'audioonly' }), streamOptions);
                  stream.on("end", () => {
                    music();
                  });
              });
        }
    }
});

bot.login(process.env.BOT_TOKEN);
