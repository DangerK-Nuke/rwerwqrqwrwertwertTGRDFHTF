const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

module.exports = client => {
 setInterval(function() {
}, 8000);
client.user.setPresence({
        game: {
            name: `☫ ⌭ Pendra ☫`,
            type: 'dnd'   //WATCHING - İZLİYOR LISTINING - DİNLİYOR
        },
        status: 'dnd'   //online - Çevrimiçi idle - Boşta 
    })
    console.log(` Bot Hazır, Komutlar Yüklendi, Hizmete Hazırım.`);
}