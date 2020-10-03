const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

module.exports = client => {

  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Konsol: Aktif Komutlarım Yüklendi! `);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Konsol: ${client.user.username} İsmi İle Discorda Bağlandım`);
  client.user.setStatus("dnd");
   var oyun = [

        "m!davet",
        "m!help",
        "m!invite",
        
     
     

       
 
   ];
  setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "dnd"); 
        }, 2 * 1000); //Değişim süresini buradan ayarlayabilirsiniz şuan 2 saniyede bir değişiyor
}
