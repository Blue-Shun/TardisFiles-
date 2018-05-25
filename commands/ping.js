		exports.run = (client, message, args) => {
		message.channel.send({embed: {
          color: 15215,
          author: {
            name: "Ping, Pong",
            icon_url: client.user.avatarURL
          },
          description: `Pong! Time: ${Math.floor(client.ping * 0.001)}s`,
          timestamp: new Date(),
          footer: {
            icon_url: message.author.avatarURL,
            text: `${message.author.username} | TARDIS Files`
          }
        }
      });
		}
      