const Discord = 'discord.js';
const bot = new Discord.Client();
const prefix = "$";
const fs = require('fs');
const ytdl = require('ytdl-core');

bot.on('ready', function() => {
  console.log('McJazz is ready");   
    });
 
bot.on('ready', () => {
  bot.user.setPresence(({ game: { name: " Jazz Lounge", type: 2}}));
}));
 
 bot.on("message", function (message) {
  if (message.author.equals(bot.user)) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix)) {
     message.delete(100)
  }








bot.login(process.env.BOT_TOKEN);
