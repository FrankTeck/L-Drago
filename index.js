const Discord = require('discord.js')
const bot = new Discord.Client()
var prefix = "l/"

bot.on('ready', function () {
    console.log("Je suis connecté !")
})

bot.on('ready', function () {
    bot.user.setGame('L-Drago [l/help]-> This is a dragon').catch(console.error)
})

bot.on('guildMemberAdd', function (member) {
  member.createDM().then(function (channel) {
    return channel.send('Bienvenue ' + member.displayName + ' sur le serveur de Lead, visite le discord, fait attention , il peut y avoir des dragons^^, amuses-toi bien sur le Discord :smile: ')
  }).catch(console.error)

  var channel = member.guild.channels.find('name', 'bienvenue_bye');
  if (!channel) return
  var bvn = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("Un nouveau Dragon rejoins le discord LEAD !")
  .setDescription(`\n Bienvenue **${member.user}** sur le Discord de LEAD :smile:`)
  .setFooter("Je t'invite à visiter le discord, et aussi d'aller voir les règles :smiley: ;)", member.user.displayAvatarURL)
  channel.sendEmbed(bvn)
});

bot.on('guildMemberRemove', function (member) {
  
    var channel = member.guild.channels.find('name', 'bienvenue_bye');
    if (!channel) return
    var bvn = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("Un Dragon quitte le discord LEAD !")
      .setDescription(`\n Au revoir**${member.user}**, reviens nous voir avec un meilleur dragon :smile:`)
      .setFooter("Au revoir :smiley: ;)", member.user.displayAvatarURL)
    channel.sendEmbed(bvn)
    });

bot.on('message', message => {

    if (message.content === prefix + "invite") {
        var help_embed = new Discord.RichEmbed()
            .setColor("#4FB448")
            .setThumbnail("https://minotar.net/helm/Watter_Fire_/300.png")
            .setTitle("Liens d'invitation")
            .setDescription("Voici le lien d'invitation pour inviter tes amis sur le Discord :smile:")
            .addField("Invitation:", "https://discord.gg/veuQK7M")
        message.channel.sendMessage(help_embed);
        console.log("Un Dragon veut inviter un pote sur le serveur en faisant la commande /invite")
    }




    if (message.content === "tg") {
        message.delete()
        message.reply("Evite les message comme sa, please !")
    }
    if (message.content === "fuck") {
        message.delete()
        message.reply("Evite les message comme sa, please !")
    }
    if (message.content === "nigg") {
        message.delete()
        message.reply("Evite les message comme sa, please !")
    }
    if (message.content === "fuk") {
        message.delete()
        message.reply("Evite les message comme sa, please !")
    }
    if (message.content === "cunt") {
        message.delete()
        message.reply("Evite les message comme sa, please !")
    }
    if (message.content === "cnut") {
        message.delete()
        message.reply("Evite les message comme sa, please !")
    }
    if (message.content === "bitch") {
        message.delete()
        message.reply("Evite les message comme sa, please !")
    }
    if (message.content === "dick") {
        message.delete()
        message.reply("Evite les message comme sa, please !")
    }
    if (message.content === "d1ck") {
        message.delete()
        message.reply("Evite les message comme sa, please !")
    }
    if (message.content === "pussy") {
        message.delete()
        message.reply("Evite les message comme sa, please !")
    }
    if (message.content === "asshole") {
        message.delete()
        message.reply("Evite les message comme sa, please !")
    }
    if (message.content === "b1tch") {
        message.delete()
        message.reply("Evite les message comme sa, please !")
    }
    if (message.content === "b!tch") {
        message.delete()
        message.reply("Evite les message comme sa, please !")
    }
    if (message.content === "blowjob") {
        message.delete()
        message.reply("Evite les message comme sa, please !")
    }
    if (message.content === "cock") {
        message.delete()
        message.reply("Evite les message comme sa, please !")
    }
    if (message.content === "c0ck") {
        message.delete()
        message.reply("Evite les message comme sa, please !")
    }
    if (message.content === "NTM") {
        message.delete()
        message.reply("Evite les message comme sa, please !")
    }
    if (message.content === "bite") {
        message.delete()
        message.reply("Evite les message comme sa, please !")
    }
    if (message.content === "putain") {
        message.delete()
        message.reply("Evite les message comme sa, please !")
    }
    if (message.content === "merde") {
        message.delete()
        message.reply("Evite les message comme sa, please !")
    }
    if (message.content === "mrde") {
        message.delete()
        message.reply("Evite les message comme sa, please !")






    }
})

bot.login(process.env.TOKEN)
