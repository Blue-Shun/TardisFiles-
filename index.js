const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

const config = require("./config.json");
const strutils = require("./Utilities/StringUtils.js");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', () => {
  console.log(`Currently in ${client.guilds.size} server(s)!`);
});


client.on('ready', () => {
var list = client.guilds.array().sort();
		console.log("Server names: " + list);
});

client.on("ready", () => {
   client.user.setActivity(`tf!help | watching ${client.guilds.size} servers`);
});

setInterval(function() {
client.user.setActivity(`tf!help | watching ${client.guilds.size} servers`);    
}, 3000);

client.on("ready", i => {
  client.guilds.get(process.env.server_id).channels.get(process.env.log_id).send({embed: {
      color: 15215,
      author: {
        name: "I'm Awake!",
        icon_url: client.user.avatarURL
      },
      description: `Im online and ready to go. \nThank you for rebooting/booting me up. \nIm currently in __**${process.env.version}**__\nCurrently in ${client.guilds.size} servers`,
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: `${client.user.tag}`
      }
    }
  });
});

client.on("message", message => {
    if (message.author.bot) return;
    if(message.content.indexOf(config.prefix) !== 0) return;
  
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
  
    try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(client, message, args);
      message.delete();
    } catch (err) {
        console.log(err);
        strutils.log(`${message.author.username} (${message.guild.id} / ${message.guild.name}) > The command "${config.prefix}${command}" couldn't be found!`);
    }
  });
client.login(process.env.token);
