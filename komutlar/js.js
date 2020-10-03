exports.run = function(client, message) {
 
  var role = message.guild.roles.find(role => role.id === "761606912021102622"); // verilecek rol ismi (isterseniz "role.name" yerine "role.id" yapıp "ROL" yazan yere rol id de yazabilirsiniz.
  if (message.member.roles.has(role.id634479742678073354)) return message.channel.send(" <a:matessa_carpi:761507822415773696> **|◆ Zaten bu role sahipsin :/**")
  message.member.addRole(role);
  message.channel.send(` <a:matassa_tik:761507821258407956>  **|◆ JavaScript  rolü başarıyla verildi!!** 🎉`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['discord.js','javascript'],
  permLevel: 0
};

exports.help = {
  name: 'js',
  description: 'JavaScript kanallarına erişim sağlar.',
  usage: 'js'
}; 