const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async(client, message, args) => {

;//if (!message.author.hasPermission("KULLANA BILECEK YETKI İSMİ")) return message.channel.send("⚠ Bu Komutu Kullana Bilmek için `KULLANA BILECEK YETKI İSMİ` Yetkisine Sahip Olmalısın!")

const embed = new Discord.RichEmbed()

.setColor("RANDOM") //RANDOM yazarsanız rastgele renk atar
.setTitle("Matessa | davet menüsü")
.addField(' <a:B_HypeSquad:761343455238291467> Davet linkim <a:B_HypeSquad:761343455238291467> ','http://bit.ly/matessadavet')
.addField(' <a:B_HypeSquad:761343455238291467> Destek sunucum <a:B_HypeSquad:761343455238291467> ','http://bit.ly/matessa')
.addField(' <a:B_HypeSquad:761343455238291467> Kod sunucum <a:B_HypeSquad:761343455238291467> ','http://bit.ly/matessa')
.setFooter("Mattesa 02.10.2020 de yapılmaya başlandı.")


message.channel.send(embed)

}

exports.conf = {
enabled: true, //Komutun Aktif Olup Olmamasını Ayarlarsınız! true: Aktif | false: Kapalı
guildOnly: false, //Komutun Sunucu Dışında Aktif Olup Olmamasını Ayarlarsınız! true: Aktif | false: Kapalı
aliases: ["invite"], //Ekstra Komut Anahtarları Gire Bilirsiniz! ["Anahtar-ismi"] Gibi
permLevel: 0 //Kullanım Seviyelerini Ayarlarsınız 0 Herkes Kullana Bilir Demektir!
};

exports.help = {
name: 'davet',
description: 'Komutun Açıklaması',
usage: 'm!davet'
}