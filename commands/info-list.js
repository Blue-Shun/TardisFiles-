        exports.run = (client, message, args) => {
		message.channel.send({embed: {
          color: 15215,
          author: {
            name: "Info List",
            icon_url: client.user.avatarURL
          },
          description: "Name - Command\nCaptain Jack - captain-jack\nConfession Dial - cd\nOhilia - ohilia\nRiver Song/Melody pond - river\nThe TARDIS - tardis\nRory Williams - rory\n Cyanide - cyanide",
          timestamp: new Date(),
          footer: {
            icon_url: message.author.avatarURL,
            text: `${message.author.username} | TARDIS Files`
          }
        }
      });
		}
      
