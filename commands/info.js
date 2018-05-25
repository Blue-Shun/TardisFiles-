const fs = require("fs");
const Discord = require("discord.js");
const strutils = require(__dirname + "/../Utilities/StringUtils.js");
const testFolder = './commands/information/';

exports.run = (client, message, args) => {
    console.log(Object.values(fs.readdirSync(testFolder)).toString());
    var DocFiles = Object.values(fs.readdirSync(testFolder)).toString().split(",");
    DocFiles.forEach(a => {
        console.log(a);
    })
    var docs = 0;
    fs.readdirSync(testFolder).forEach(a => {
        docs = docs + 1;
    });

    if(!args.length) {
        if(docs < 1) {
            message.channel.send({embed: {
                color: 15215,
                author: {
                  name: "No information found!",
                  icon_url: client.user.avatarURL
                },
                description: "This is probably an issue on the host's end.\nNo information was found in the `information` directory!",
                timestamp: new Date(),
                footer: {
                  icon_url: message.author.avatarURL,
                  text: `${message.author.username} | TARDIS Files`
                }
              }
            });
            return;
        }
    var doc = require("./information/" + DocFiles[Math.floor(docs* Math.random())].toString());
        const embed = new Discord.RichEmbed()
        .setTitle(doc.title)
        .setDescription(doc.description)
        .setColor(15215)
        .setThumbnail(doc.thumbnail)
        .setFooter(`${message.author.username} | TARDIS Files`);
        message.channel.send({embed});

        return;
    }
    else
    {
        try {
            var doc = require("./information/" + args[0] + ".json");
            const embed = new Discord.RichEmbed()
                .setTitle(doc.title)
                .setDescription(doc.description)
                .setColor(15215)
                .setThumbnail(doc.thumbnail)
                .setFooter(`${message.author.username} | TARDIS Files`);
            message.channel.send({embed});
          } catch (err) {
            message.channel.send({embed: {
                color: 15215,
                author: {
                  name: "Incorrect argument",
                  icon_url: client.user.avatarURL
                },
                description: "One of two things has happened\n```diff\n- Someone's misspelt a file name\n- The file you're looking for doesn't exist\n```",          timestamp: new Date(),
                footer: {
                  icon_url: message.author.avatarURL,
                  text: `${message.author.username} | TARDIS Files`
                }
              }
            });
        }
    }
  }