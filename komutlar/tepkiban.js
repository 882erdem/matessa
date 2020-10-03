const Discord = require('discord.js');
const db = require('quick.db');


exports.run = (client,message,args) => {

if(!message.member.hasPermissions("ADMINISTRATOR")) return message.channel.send('Yetkin yok :x:')

let user = message.mentions.users.first()
if(!user) return message.channel.send('Birisini etiketle!')


message.channel.send('Bu kişiyi banlamak istediğinden eminmisin? \nEminsen :white_check_mark: tepkisine tıkla. Değilsen :x: tepkisine tıkla.').then(async m  => {
await m.react('✅').then(r =>{ 

   const tamam = (reaction,user) => reaction.emoji.name == '✅' && user.id == message.author.id;
      const tamam2 = m.createReactionCollector(tamam)

   tamam2.on('collect', async (r)=>{
  message.guild.members.get(user.id).ban()
   })

    })

 await m.react('❌').then(r =>{ 

   const tamam = (reaction,user) => reaction.emoji.name == '❌' && user.id == message.author.id;
      const tamam2 = m.createReactionCollector(tamam)

   tamam2.on('collect', async (r)=>{
message.channel.send('İptal edildi.')
   })

    })


})


}
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: []
}

exports.help = {
name: "ban"
}