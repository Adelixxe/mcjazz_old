const Discord = require('discord.js');
const path = require('path');
const bot = new Discord.Client();
const ddiff = require('return-deep-diff');
const prefix = "*";
const fs = require("fs");
//___________________________________________________________________________________________________________________________________________________
var cli = new Discord.Client({autoReconnect:true});

var servers = {};

bot.commands = new Discord.Collection();

bot.on("error", (e) => console.error(e));
bot.on("warn", (e) => console.warn(e));
bot.on("debug", (e) => console.info(e));

bot.on('ready', function() {
    console.log(" Mc Jazz, the Jazzing Jazzer https://discordapp.com/oauth2/authorize?client_id=424392305663803393&scope=bot&permissions=104324160")},

bot.on('ready',() => {
  bot.user.setPresence(({ game: { name: " Jazz Lounge", type: 2}}));
}));

bot.on("message", function (message) {
  if (message.author.equals(bot.user)) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix)) {
     message.delete(100)
  }

  var args = message.content.substring(prefix.length).split(" ")
//___________________________________________________________________________________________________________________________________________________
// Commandes
  switch (args[0]) {
  //jazz
      case "jazz":
        if (!message.member.voiceChannel) {
        return;
        }

        if (!message.member.hasPermission("ADMINISTRATOR")) {
        return false;
        }
               
        if (message.guild.voiceConnection) {return;}

        if (message.member.voiceChannel) 
        { 
        const streamOptions = { seek: 0, volume: 1 };
        var voiceChannel = message.member.voiceChannel;
        voiceChannel.join().then(connection => {
             console.log("joined channel");
             const stream = ytdl('https://www.youtube.com/watch?v=_sI_Ps7JSEk', { filter : 'audioonly' });
             const dispatcher = connection.playStream(stream, streamOptions);
              dispatcher.on("end", end => {
                    console.log("left channel");
              voiceChannel.leave();
            });
        }).catch(err => console.log(err));

        if (message.content === "*jazz") {
          if (!message.member.hasPermission("ADMINISTRATOR")) {
          message.channel.reply("You are not the administrator of this server.")}
          if (message.member.hasPermission("ADMINISTRATOR")) {
          message.channel.reply("You can't do that again.")
        }}
        function jazz() {
        const stream = ytdl('https://www.youtube.com/watch?v=_sI_Ps7JSEk', { filter : 'audioonly' });
        }
      } else {
      return;
      }}
      break;
//___________________________________________________________________________________________________________________________________________________
        //STOP
    case "stop":
        var server = servers[message.guild.id];
        if (!message.guild.member(bot.user).permissions.has("ADMINISTRATOR")) {
        //Arrêter Bot
        message.delete(10000)
        
        }

        if (message.guild.member(bot.user).permissions.has("ADMINISTRATOR")) {
        message.delete(10000)
        }
        break;          
//___________________________________________________________________________________________________________________________________________________        
     //RESUME
    case "resume"
        var server = servers[message.guild.id];
        if (!message.guild.member(bot.user).permissions.has("ADMINISTRATOR")) {
        //Faire reprendre le bot()
        message.delete(10000) 
        }

        if (message.guild.member(bot.user).permissions.has("ADMINISTRATOR"))  {
        message.delete(10000)
        }
        break;
//___________________________________________________________________________________________________________________________________________________          
        //LEAVE
    case "leave":
        var server = servers[message.guild.id];
        if (!message.guild.member(bot.user).permissions.has("ADMINISTRATOR")) {
            message.member.voiceChannel.leave()
            message.delete(10000)
        }

        if (message.guild.member(bot.user).permissions.has("ADMINISTRATOR")) {
            message.member.voiceChannel.leave()
            message.delete(10000)
        }
        break;

    }

    
});

bot.login(process.env.BOT_TOKEN);
