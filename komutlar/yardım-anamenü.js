const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async(client, message, args) => {

//if (!message.author.hasPermission("KULLANA BILECEK YETKI İSMİ")) return message.channel.send("⚠ Bu Komutu Kullana Bilmek için `KULLANA BILECEK YETKI İSMİ` Yetkisine Sahip Olmalısın!")

const embed = new Discord.RichEmbed()

.setColor("RANDOM") //RANDOM yazarsanız rastgele renk atar
.setTitle("matessa | yardım menüsü 1/3")
.addField(' <a:B_HypeSquad:761343455238291467> m!yetkili','Yetkili komutlarını listeler.')
.addField(' <a:B_HypeSquad:761343455238291467> Yakında m!kullanıcı','Kullanıcı komutlarını listeler.')
.addField(' <a:B_HypeSquad:761343455238291467> Yakında m!eğlence','Eğlence komutlarını listeler')
.setFooter("mattessa | m!davet")


message.channel.send(embed)

}//.addField('','')

exports.conf = {
enabled: true, //Komutun Aktif Olup Olmamasını Ayarlarsınız! true: Aktif | false: Kapalı
guildOnly: false, //Komutun Sunucu Dışında Aktif Olup Olmamasını Ayarlarsınız! true: Aktif | false: Kapalı
aliases: ['help','yardim'], //Ekstra Komut Anahtarları Gire Bilirsiniz! ["Anahtar-ismi"] Gibi
permLevel: 0 //Kullanım Seviyelerini Ayarlarsınız 0 Herkes Kullana Bilir Demektir!
};

exports.help = {
name: 'yardım',
description: 'Komutun Açıklaması',
usage: 'm!yardım'
}


//erdem 15
//erdem 15
//erdem 15
//erdem 15
//bunurdaki yazıları kopyalayıp başka komutlar yapabilirsin