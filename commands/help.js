exports.run = (client, message, args) => {
    message.author.send({embed: {
        color: 15215,
        author: {
          name: "TARDIS Files Help",
          icon_url: client.user.avatarURL
        },
        description: "__**Commands:**__\n**Help** - This command\n**About** - shows infomation on the bot\n**Ping** - Gets api latency\n**Doctor** - Shows information on the doctors. Add a number on the end for a certain doctor\n**Info** - Shows information on characters and special objects. Say a certain object/charcater to see info on them.\n**Invite** - Show bot support server and bot OAuth2 link to invite bot to your server.\n**Info-list** - Shows a list of charcters/objects available.\n",
        timestamp: new Date(),
        footer: {
          icon_url: message.author.avatarURL,
          text: `${message.author.username} | TARDIS Files`
        }
      }
    });
}