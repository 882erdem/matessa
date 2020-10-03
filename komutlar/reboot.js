const Discord = require("discord.js");
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json");

module.exports.run = async (bot, message, args) => {
  if (message.author.id !== ayarlar.sahip)
    return message.channel.send(
      "Geliştiricim Değilsin Bu Komutu kullanamazsın.!"
    );

  message.channel.sendMessage(` <a:matassa_tik:761507821258407956>  Bot yeniden başlatıldı...`);
  message.delete(60).then(msg => {
    console.log(`✅ | Bot Yeniden Başlatıldı...`);

    process.exit(0);
  });
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["r", "reboot", "yenile", "yeniden başlat"],
  permLevel: 0

};

module.exports.help = {
  name: "reboot",
  description: "",
  usage: "reboot"
  
};
