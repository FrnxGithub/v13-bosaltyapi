const { Client, Intents, Collection, MessageAttachment, MessageEmbed, Permissions, Constants, ApplicationCommandPermissionsManager } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING] });
const ayarlar = require("./ayarlar");
const db = require("orio.db")
const message = require("./events/message");
let prefix = ayarlar.prefix;
const moment = require("moment")
moment.locale("tr")
const Discord = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
let slashCommands = ayarlar.slashCommands;
if (slashCommands == true) {let sunucuID = ayarlar.sunucuID;if (sunucuID == "") {return console.log(`\n\n[${moment().format('LTS')}] Hata => Slash komutların çalışması için *AYARLAR.JS* dosyasındaki "sunucuID" kısmını doldurmalısın.\n\n`)}}



client.commands = new Collection();
client.aliases = new Collection();

["command"].forEach(handler => {
  require(`./komutcalistirici`)(client);
});

client.on("ready", () => {
  require("./events/eventLoader")(client);
  if(slashCommands == true) {
    let commands = client.guilds.cache.get(sunucuID).commands;
  }

});


client.login(ayarlar.token);
