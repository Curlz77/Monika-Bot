//variables
const Discord = require('discord.js');
const bot = new Discord.Client();
var config = require("./config.json");

//ready
bot.on('ready', () => {
  console.log('Logged in as ' + bot.user.username + "#" + bot.user.discriminator);
  	var content = "piano in " + bot.guilds.size + " guilds | " + config.prefix + "help";
    bot.user.setGame(content);
    bot.user.setUsername("Monika Bot");
});

//start
bot.on("message", (message) => {
  if(message.author.bot) return;

  //ping - credit to kaoala7577 (DotBot repository), modified
  if(message.content.startsWith(config.prefix + "ping")) {
    message.channel.send("Here's your ping, " + message.author.username + "!").then(rsp => {
      rsp.edit("Here's your ping, " + message.author.username + "! It's `" + (rsp.createdTimestamp - message.createdTimestamp) + " ms`");
      console.log(message.author.tag + " executed the ping command in " + message.guild.name);
    });
  }

  //info
  if(message.content.startsWith(config.prefix + "info")) {
    let embed = new Discord.RichEmbed()
    .setDescription(bot.user.username + " is a moderation/fun bot created by Curlz#8184. She was created in the [Javascript](https://www.javascript.com/) scripting language with the [Discord.js](https://discord.js.org/#/) library. Note that she's still in development so not everything I want is implemented.")
    .setColor(0xd48975)
    .setAuthor("Bot Info")
    .setThumbnail(bot.user.displayAvatarURL)
    .setFooter("Welcome to the Literature Club!")
    .addField("Guilds", bot.guilds.size, true)
    .addField("Owner", config.ownerTag, true)
    .addField("Support Server", "[u g h . c o m](https://discord.gg/5qgHcxv)", true)
    .addField("Invite Link", "[Invite Me!](https://discordapp.com/api/oauth2/authorize?client_id=402160845515259924&permissions=8&scope=bot)", true)
    .setTimestamp();
    message.channel.send({embed});
    console.log(message.author.tag + " executed the info command in " + message.guild.name);
  }
  
  //natsuki
  if(message.content.startsWith(config.prefix + "natsuki")) {
    let embed = new Discord.RichEmbed()
    .setDescription("Oh sure I can get Natsuki over here for you!")
    .setColor(0xd48975)
    .setThumbnail(bot.user.displayAvatarURL)
    .setFooter("Welcome to the Literature Club!")
    .addField("Invite Link", "[Natsuki Bot](https://discordapp.com/api/oauth2/authorize?client_id=402160845515259924&permissions=8&scope=bot)")
    .setTimestamp();
    message.channel.send({embed});
  }
});

//login
bot.login(config.token);