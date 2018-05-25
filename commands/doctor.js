const fs = require("fs");
const Discord = require("discord.js");
const strutils = require(__dirname + "/../Utilities/StringUtils.js");
const testFolder = './commands/doctors/';

exports.run = (client, message, args) => {
    var DocFiles = Object.values(fs.readdirSync(testFolder)).toString().split(",");
    var docs = 0;
    fs.readdirSync(testFolder).forEach(a => {
        docs = docs + 1;
    });

    if(!args.length) {
        if(docs < 0) {
            message.channel.send({embed: {
                color: 15215,
                author: {
                  name: "No doctors found!",
                  icon_url: client.user.avatarURL
                },
                description: "This is probably an issue on the host's end.\nNo doctors we're found in the `Doctors` directory!",
                timestamp: new Date(),
                footer: {
                  icon_url: message.author.avatarURL,
                  text: `${message.author.username} | TARDIS Files`
                }
              }
            });
            return;
        }
    var doc = require("./doctors/" + DocFiles[Math.floor(docs* Math.random())].toString());
        const embed = new Discord.RichEmbed()
        .setTitle(doc.title)
        .setDescription(doc.description)
        .setColor(3495809)
        .setThumbnail(doc.thumbnail)
        .setFooter("TARDIS Files | https://www.axius.design/");
        message.channel.send({embed});

        return;
    }
    else
    {
      if(docs < 0) {
        message.channel.send({embed: {
            color: 15215,
            author: {
              name: "No doctors found!",
              icon_url: client.user.avatarURL
            },
            description: "This is probably an issue on the host's end.\nNo doctors we're found in the `Doctors` directory!",
            timestamp: new Date(),
            footer: {
              icon_url: message.author.avatarURL,
              text: `${message.author.username} | TARDIS Files`
            }
          }
        });

      if(isNaN(args[0])) {
        message.channel.send({embed: {
          color: 15215,
          author: {
            name: "Incorrect argument",
            icon_url: client.user.avatarURL
          },
          description: args[0] + " isn't a number!",
          timestamp: new Date(),
          footer: {
            icon_url: message.author.avatarURL,
            text: `${message.author.username} | TARDIS Files`
          }
        }
      });
      }
    }
    else
    {
      var dn = parseInt(args[0]);
      if(dn < 0 || dn > docs) {
        message.channel.send({embed: {
          color: 15215,
          author: {
            name: "Incorrect argument",
            icon_url: client.user.avatarURL
          },
          description: "One of two things has happened\n```diff\n- The number you entered is below 1\n-The number you entered is above " + docs + "\n```",
          timestamp: new Date(),
          footer: {
            icon_url: message.author.avatarURL,
            text: `${message.author.username} | TARDIS Files`
          }
        }
      });
      }
      else
      {
        var doc = require("./doctors/" + DocFiles[dn].toString());
        const embed = new Discord.RichEmbed()
        .setTitle(doc.title)
        .setDescription(doc.description)
        .setColor(15215)
        .setThumbnail(doc.thumbnail)
        .setFooter(`${message.author.username} | TARDIS Files`);
        message.channel.send({embed});
      }
    }
  }
}