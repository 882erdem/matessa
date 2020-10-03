const Discord = require('discord.js');


exports.run = (client,message,args) => {
  
  //if (!message.author.hasPermission("MANAGE_MESSAGES")) return message.channel.send(" <a:matessa_carpi:761507822415773696> bu komutu sadece **kod payaşma** yetkisi olan kişiler kullanabilir <a:bizcooluz:761509574682345502> ")
  
    const kanal = args.slice(0).join(' ')
    if(!kanal) return message.channel.send(
        new Discord.RichEmbed()
        .setColor('BLUE')
        .setTitle('Hata ❌')
        .setDescription('Kanal adını yazsana lan!')
    )

message.guild.createChannel(`📂 ${kanal}`, "text").then(endlesscode => {
let rol = message.guild.roles.find("name", "@everyone")
let rol2 = message.guild.roles.find("id", "761606912021102622")

endlesscode.overwritePermissions(rol,  {

    READ_MESSAGES: false,
    SEND_MESSAGES: false

})

endlesscode.overwritePermissions(rol2,  {

    READ_MESSAGES: true,
    SEND_MESSAGES: false

})
endlesscode.setParent("761592290329624588") 
})
   
}
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: []
}


exports.help = {
name: 'kod-paylaş'    
}
 