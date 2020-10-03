const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async(client, message, args) => {

//if (!message.author.hasPermission("ADMİNSTATOR")) return message.channel.send("yetkili değilsin malesef bu komutu kullanamazsın")
//ADMİNSTATOR
const embed = new Discord.RichEmbed()
//knk yetki ismi kalsın ya
.setColor("RANDOM") //RANDOM yazarsanız rastgele renk atar
.setTitle("Matessa | yardım menüsü 2/3")
.addField(' <a:B_HypeSquad:761343455238291467> m!otorol-ayar','kanal,rol,aç,kapat')
.addField(' <a:B_HypeSquad:761343455238291467> m!ban','kişi banlar ama ilk önce size sorar.')
.addField(' <a:B_HypeSquad:761343455238291467> m!küfür-engel','aç,kapat')
.addField(' <a:B_HypeSquad:761343455238291467> m!kanal','aç,kapat')
.setFooter("Matessa telefondan yapılan tek bottur!")
//iyi
message.channel.send(embed)

}

exports.conf = {
enabled: true, //Komutun Aktif Olup Olmamasını Ayarlarsınız! true: Aktif | false: Kapalı
guildOnly: false, //Komutun Sunucu Dışında Aktif Olup Olmamasını Ayarlarsınız! true: Aktif | false: Kapalı
aliases: [], //Ekstra Komut Anahtarları Gire Bilirsiniz! ["Anahtar-ismi"] Gibi
permLevel: 0 //Kullanım Seviyelerini Ayarlarsınız 0 Herkes Kullana Bilir Demektir!
};

exports.help = {
name: 'yetkili',
description: 'Komutun Açıklaması',
usage: 'm!yetkili'
}