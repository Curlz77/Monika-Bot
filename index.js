//variables
const Discord = require('discord.js');
const bot = new Discord.Client();
var config = require("./config.json");

//ready
bot.on('ready', () => {
  console.log('Logged in as ' + bot.user.username + "#" + bot.user.discriminator);
    var content = "Baking in " + bot.guilds.size + " guilds | " + config.prefix + "help";
  bot.user.setGame(content);
});

//start
bot.on("message", (message) => {
  if(message.author.bot) return;

    //help - credit to kaoala7577 (DotBot repository), modified
    if(message.content.startsWith(config.prefix + "help")) {
      message.channel.send("Ugh fine. **It's not because I like you or anything!!** *baka.*\n**Prefix:** `" + config.prefix + "`\n\n__Fun Stuff__\n\n`" + config.prefix + "becauseyou` - Natsuki is a better person because of you :)\n`" + config.prefix + "buffsuki` - Call Buffsuki\n`" + config.prefix + "cake` - Natsuki gives you some cake\n`" + config.prefix + "cookie` - Natsuki gives you a cookie\n`" + config.prefix + "cute` - Call Natsuki cute\n`" + config.prefix + "neko` - Displays a random neko\n`" + config.prefix + "poem` - Displays a random Natsuki poem\n`" + config.prefix + "wansumfuk` - Ask Natsuki for sum fuk\n\n__Helpful Stuff__\n\n`" + config.prefix + "help` - Displays this message\n`" + config.prefix + "info` - Displays the bot info message\n`" + config.prefix + "monika` - Get an invite link for Monika Bot\n`" + config.prefix + "ping` - Pings Natsuki\n`" + config.prefix + "support` - Sends an invite to the support guild\n\n__Bot Owner Only__\n\n`" + config.prefix + "game <game>` - sets Natsuki's game.");
      console.log(message.author.tag + " executed the help command in " + message.guild.name);
  }

    //ping - credit to kaoala7577 (DotBot repository), modified
  if(message.content.startsWith(config.prefix + "ping")) {
    message.channel.send("I don't want to play ping-pong, dummy!").then(rsp => {
      rsp.edit("I don't want to play ping-pong, dummy! Anyway, your ping is `" + (rsp.createdTimestamp - message.createdTimestamp) + " ms `");
      console.log(message.author.tag + " executed the ping command in " + message.guild.name);
    });
  }
  //cute
  if(message.content.startsWith(config.prefix + "cute")) {
    message.channel.send("I'm not cute! Baka...");
    console.log(message.author.tag + " executed the cute command in " + message.guild.name);
  }

  //info - credit to kaoala7577 (DotBot repository), modified
  if(message.content.startsWith(config.prefix + "info")) {
    let embed = new Discord.RichEmbed()
    .setDescription(bot.user.username + " is a tsundere bot created by Curlz#8184 with assistance from kaoala#7577. She was created in the [Javascript](https://www.javascript.com/) scripting language with the [Discord.js](https://discord.js.org/#/) library. Note that she's still in development so not everything I want is implemented.")
    .setColor(0xfa89c0)
    .setAuthor("Bot Info")
    .setThumbnail(bot.user.displayAvatarURL)
    .setFooter("It's not like I like you or anything... baka")
    .addField("Guilds", bot.guilds.size, true)
    .addField("Owner", config.ownerTag, true)
    .addField("Support Server", "[u g h . c o m](https://discord.gg/5qgHcxv)", true)
    .addField("Invite Link", "[Invite Me!](https://discordapp.com/api/oauth2/authorize?client_id=391933721546194944&permissions=8&scope=bot)", true)
    .setTimestamp();
    message.channel.send({embed});
    console.log(message.author.tag + " executed the info command in " + message.guild.name);
  }

  //poem
  if(message.content.startsWith(config.prefix + "poem")) {
    var numberArray = [
      "Ugh fine... you're not gonna like it though. ```markdown\n# Amy Likes Spiders\n\nYou know what I heard about Amy?\nAmy likes spiders.\nIcky, wriggly, hairy, ugly spiders!\nThat's why I'm not friends with her.\n\nAmy has a cute singing voice.\nI heard her singing my favorite love song.\nEvery time she sang the chorus, my heart would pound to the rhythm of the words.\nBut she likes spiders.\nThat's why I'm not friends with her.\n\nOne time, I hurt my leg really bad.\nAmy helped me up and took me to the nurse.\nI tried not to let her touch me.\nShe likes spiders, so her hands are probably gross.\nThat's why I'm not friends with her.\n\nAmy has a lot of friends.\nI always see her talking to people.\nShe probably talks about spiders.\nWhat if her friends start to like spiders too?\nThat's why I'm not friends with her.\n\nIt doesn't matter if she has other hobbies.\nIt doesn't matter if she keeps it private.\nIt doesn't matter if it doesn't hurt anyone.\n\nIt's gross.\nShe's gross.\nThe world is better off without spider lovers.\n\nAnd I'm gonna tell everyone.```",
      "I didn't write this for ***you***... God you're so self centred. ```markdown\n# Because You\n\nTomorrow will be brighter with me around\nBut when today is dim, I can only look down.\nMy looking is a little more forward\nBecause you look at me.\n\nWhen I want to say something, I say it with a shout!\nBut my truest feelings can never come out.\nMy words are a little less empty\nBecause you listen to me.\n\nWhen something is above me, I reach for the stars.\nBut when I feel small, I don't get very far.\nMy standing is a little bit taller\nBecause you sit with me.\n\nI believe in myself with all of my heart.\nBut what do I do when it's torn all apart?\nMy faith is a little bit stronger\nBecause you trusted me.\n\nMy pen always puts my feelings to the test.\nI'm not a good writer, but my best is my best.\nMy poems are a little bit dearer\nBecause you think of me.\n\nBecause you, because you, because you.```",
      "You'll hate this one... ```markdown\n# Eagles Can Fly\n\nMonkeys can climb\nCrickets can leap\nHorses can race\nOwls can seek\nCheetahs can run\nEagles can fly\nPeople can try\nBut that's about it.```", 
      "I don't write for anyone. Especially **not** you. ```markdown\n# I'll Be Your Beach\n\nYour mind is so full of troubles and fears\nThat diminished your wonder over the years\nBut today I have a special place\nA beach for us to go.\n\nA shore reaching beyond your sight\nA sea that sparkles with brilliant light\nThe walls in your mind will melt away\nBefore the sunny glow.\n\nI'll be the beach that washes your worries away\nI'll be the beach that you daydream about each day\nI'll be the beach that makes your heart leap\nIn a way you thought had left you long ago.\n\nLet's bury your heavy thoughts in a pile of sand\nBathe in sunbeams and hold my hand\nWash your insecurities in the salty sea\nAnd let me see you shine.\n\nLet's leave your memories in a footprint trail\nSet you free in my windy sail\nAnd remember the reasons you're wonderful\nWhen you press your lips to mine.\n\nI'll be the beach that washes your worries away\nI'll be the beach that you daydream about each day\nI'll be the beach that makes your heart leap\nIn a way you thought had left you long ago.\n\nBut if you let me by your side\nYour own beach, your own escape\nYou'll learn to love yourself again.```" 
    ];
    var randomNumber = Math.floor(Math.random()*numberArray.length);
    message.channel.send(`${numberArray[randomNumber]}`);
    console.log(message.author.tag + " executed the poem command in " + message.guild.name);
  }

  //cookie
  if(message.content.startsWith(config.prefix + "cookie")) {
    message.channel.send("**HIYA!** :cookie: There ya go!");
    console.log(message.author.tag + " executed the cookie command in " + message.guild.name);
  }
  
  //becauseyou
  if(message.content.startsWith(config.prefix + "becauseyou")) {
    var becauseYou = [
      "My looking is a little more forward,\nBecause you look at me",
      "My words are a little less empty,\nBecause you listen to me",
      "My standing is a little bit taller,\nBecause you sit with me", 
      "My faith is a little bit stronger,\nBecause you trusted me.",
      "My poems are a little bit dearer,\nBecause you think of me." 
    ];
    var randomNumber = Math.floor(Math.random()*becauseYou.length);
    message.channel.send(`${becauseYou[randomNumber]}`);
    console.log(message.author.tag + " executed the Because You command in " + message.guild.name);
  }

  //cake
  if(message.content.startsWith(config.prefix + "cake")) {
    message.channel.send("Look I baked some cakes, but if you only came for them I'll be pissed- wait this is a command just for cake, isn't it! Ugh ***fine***, take one. :cake:")
    console.log(message.author.tag + " executed the cake command in " + message.guild.name)
  }

  //wansumfuk
  if(message.content.startsWith(config.prefix + "wansumfuk")) {
    message.channel.send("What the hell. Consent dude.")
    console.log(message.author.tag + " asked Natsuki for sum fuk in " + message.guild.name)
  }

  //support
  if(message.content.startsWith(config.prefix + "support")) {
    let embed = new Discord.RichEmbed()
    .setDescription("You really need to speak to the owners? Fine... I'm only giving you the invite to be polite, ok?")
    .setColor(0xfa89c0)
    .setThumbnail(bot.user.displayAvatarURL)
    .setFooter("It's not like I like you or anything... baka")
    .addField("Support Server", "[u g h . c o m](https://discord.gg/5qgHcxv)", true)
    .setTimestamp();
    message.channel.send({embed});
    console.log(message.author.tag + " executed the info command in " + message.guild.name);
  }

  //buffsuki
  if(message.content.startsWith(config.prefix + "buffsuki" )) {
    message.channel.send("**You called?**", {
        file:"http://i0.kym-cdn.com/photos/images/newsfeed/001/310/724/709.png"
    });
    console.log(message.author.tag + " called Buffsuki in " + message.guild.name);
  }

  //neko
  if(message.content.startsWith(config.prefix + "neko")) {
    var imageArray = [
      //images not owned by me, credit to original artists
        "./images/neko1.jpg",
        "./images/neko2.jpg",
        "./images/neko3.jpg", 
        "./images/neko4.jpg",
        "./images/neko5.jpg"
    ]
    var randomImage = Math.floor(Math.random()*imageArray.length);
    var imagePost = imageArray[randomImage]
    message.channel.send("", {
      file:imagePost
    });
    console.log(message.author.tag + " executed the neko command in " + message.guild.name);
  }
  
  //gameset (owner only)
	if(message.content.startsWith(config.prefix + "game ")) {
		if(!message.author.id == config.ownerID) return message.channel.send("Bot owner only");
		content = message.content.substring(6);
		content = content.replace("{prefix}", config.prefix).replace("{count}", bot.guilds.size);
		message.channel.send("Game has been set to `" + content + "`");
		bot.user.setGame(content);
		console.log("'Game' has been executed in the guild '" + message.guild.name + "'. Game was set to '" + content + "'");
  }
  
  //monika
  if(message.content.startsWith(config.prefix + "monika")) {
    let embed = new Discord.RichEmbed()
    .setDescription("Ugh fine, I'll get Monika over here.")
    .setColor(0xfa89c0)
    .setThumbnail(bot.user.displayAvatarURL)
    .setFooter("It's not like I like you or anything... baka")
    .addField("Invite Link", "[Monika Bot](https://discordapp.com/api/oauth2/authorize?client_id=402160845515259924&permissions=8&scope=bot)")
    .setTimestamp();
    message.channel.send({embed});
    console.log(message.author.tag + " has executed the 'Monika' command in " + message.guild.name)
  }

  //baka
  const triggers = ["baka", "BAKA", "BAKa", "BAka", "Baka", "bAKA", "baKA", "bakA", "baKa", "bAka", "BakA", "bAKa", "BaKa", "bAkA"]
  if(triggers.some(word => message.content.includes(word)) ) {
    message.channel.send("What are you doing? That's **my** word! *Baka*");
    console.log("Natsuki responded to " + message.author.tag + " saying baka in " + message.guild.name);
  }
});

//kao can i just say you're amazing and ily
//seriously though ily thank you you're amazing 

//login
bot.login(config.token);