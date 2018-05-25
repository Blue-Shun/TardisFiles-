exports.run = (client, message, args) => {
    message.channel.send({embed: {
        color: 15215,
        author: {
          name: "TARDIS Files invite link",
          icon_url: client.user.avatarURL
        },
        description: `[Server Link](https://discord.gg/2X97BxG) \n[Bot Link](https://discordapp.com/api/oauth2/authorize?client_id=444747925008941056&permissions=67584&scope=bot)`,
        timestamp: new Date(),
        footer: {
          icon_url: message.author.avatarURL,
          text: `${message.author.username} | TARDIS Files`
        }
      }
    });
}