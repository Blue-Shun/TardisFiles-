		exports.run = (client, message, args) => {
		message.channel.send({embed: {
          color: 15215,
          author: {
            name: "About",
            icon_url: client.user.avatarURL
          },
          description: `Name: ${client.user.tag}\nServer count: ${client.guilds.size}\nOwners: Blue Shun #7167 & Fubbo #0487\nPing: ${Math.floor(client.ping * 0.001)}s\nUptime: ${Math.floor(client.uptime * 1.66667e-5)}mins or ${Math.floor(client.uptime * 2.77778e-7)}hours`,
          timestamp: new Date(),
          footer: {
            icon_url: message.author.avatarURL,
            text: `${message.author.username} | TARDIS Files ${process.env.version}`
          }
        }
      });
		}
     
