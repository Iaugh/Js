exports.run = (client, msg, args, config, bot, users) => {
  const Discord = require ('discord.js');
     console.log(user);
       if (msg.content.startsWith('xav')) {
       var user = msg.mentions.users.first() || msg.author;
       const av = new Discord.RichEmbed()
         .setImage(user.displayAvatarURL + '?size=512&f=.gif')
         .setColor("BLACK")
           msg.channel.send(av)
           msg.delete();
    }
  }