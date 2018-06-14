const Discord = 'discord.js';
const bot = new Discord.Client();
const prefix = "$";
const fs = require('fs');
const ytdl = require('ytdl-core');

const url = 'https://youtube.com/watch?v=_sI_Ps7JSEk'

bot.on('ready', function() => {
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
}

client.on('message', message => {
  if (message.content.startsWith('$jazz')) {
   
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    
    if (!voiceChannel) {
      return message.reply('Please be in a voice channel first!');
    }
    voiceChannel.join()
      .then(connection => {
        while {
        const stream = ytdl(url, { filter: 'audioonly' });
        const dispatcher = connection.playStream(stream);
        }
        dispatcher.on('end', () => {
          voiceChannel.leave();
        
        });
      });
  }
});       
       
bot.login(process.env.BOT_TOKEN);
