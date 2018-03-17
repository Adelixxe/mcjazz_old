const Discord = require('discord.js');
const path = require('path');
const bot = new Discord.Client();
const ddiff = require('return-deep-diff');
const prefix = "/";
const fs = require("fs");

var cli = new Discord.Client({autoReconnect:true});

var servers = {};

bot.commands = new Discord.Collection();

bot.on("error", (e) => console.error(e));
bot.on("warn", (e) => console.warn(e));
bot.on("debug", (e) => console.info(e));

bot.on('ready', function() {
    console.log("jazz https://discordapp.com/api/oauth2/authorize?client_id=424361104005791746&permissions=3145728&scope=botpermissions=104324160")},

bot.on('ready',() => {
  bot.user.setPresence(({ game: { name: "Jazz Bar Lounge", type: 2}}));
})),

bot.on("message", function (message) {
  if (message.author.equals(bot.user)) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix)) {
     message.delete(100)
  }

  var args = message.content.substring(prefix.length).split(" ")

// Commandes
  switch (args[0]) {
  //toto
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
          if (!message.member.hasPermission("ADMINISTRATOR")) {message.channel.reply("You are not the administrator of this server.")}
          if (message.member.hasPermission("ADMINISTRATOR")) {
        message.member.voiceChannel.join()
        .then (connection => {
        const stream = message.guild.voiceConnection.playStream("Jazz Music/Jazz.mp3")
        .once('end', () => jazzmusic());

        if (message.content === "/jazz") {
          if (!message.member.hasPermission("ADMINISTRATOR")) {
          message.channel.reply("You are not the administrator of this server.")}
          if (message.member.hasPermission("ADMINISTRATOR")) {
          message.channel.reply("You can't do that again.")
        }}
        function jazzmusic() {
        const stream = connection.playStream("Jazz Music/Jazz.mp3")
        .once('end', () => jazzmusic());
        }
        })
      } else {
      return;
      }}
      break;

        //STOP
    case "stop":
        var server = servers[message.guild.id];
        if (!message.guild.member(bot.user).permissions.has("ADMINISTRATOR")) {
        message.delete(10000)
        }

        if (message.guild.member(bot.user).permissions.has("ADMINISTRATOR")) {
        message.delete(10000)
        }
        break;

    case "leave":
        var server = servers[message.guild.id];
        if (!message.guild.member(bot.user).permissions.has("ADMINISTRATOR")) {
        message.delete(10000)
        }

        if (message.guild.member(bot.user).permissions.has("ADMINISTRATOR")) {
        message.delete(10000)
        }
        break;

    }

    
})
annel.reply("You can't do that again.")
        }}
        function jazzmusic() {
        const stream = connection.playStream(" Jazz Music/Jazz.mp3 ")
        .once('end', () => jazzmusic());
        }
        })
      } else {
      return;
      }}
      break;

        //STOP
    case "stop":
        var server = servers[message.guild.id];
        if (!message.guild.member(bot.user).permissions.has("ADMINISTRATOR")) {
        message.delete(10000)
        }

        if (message.guild.member(bot.user).permissions.has("ADMINISTRATOR")) {
        message.delete(10000)
        }
        break;

    case "leave":
        var server = servers[message.guild.id];
        if (!message.guild.member(bot.user).permissions.has("ADMINISTRATOR")) {
        message.delete(10000)
        }

        if (message.guild.member(bot.user).permissions.has("ADMINISTRATOR")) {
        message.delete(10000)
        }
        break;

    }

    
});

bot.login(process.env.BOT_TOKEN);
