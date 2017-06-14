console.log("The bot is starting...");

const Discord = require("discord.js");
const bot = new Discord.Client();
const TOKEN = "MzI0MDY0OTY4MTk2NDg5MjE4.DCEQpA._J1hSi3ysIoSPHmBWVh_Klk2uoQ";
const PREFIX = "!"

bot.on("ready", function() {
  console.log("The bot is ready!");
});

bot.on("message", function(message) {
  if (message.author.equals(bot.user)) return;

  if (!message.content.startsWith(PREFIX)) return;
  var args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0].toLowerCase()) {
    case "ping":
      message.channel.send("#placeholder for the ping command");
      break;
    case "info":
      message.channel.send("#placeholder for info command");
      break;
    case "help":
      message.channel.send("#placeholder for help command");
      break;
    case "music":
      message.channel.send("#placeholder for music command");
      break;
    case "twitter":
      message.channel.send("#placeholder for twiiter command");
      break;
    case "dice"
      message.channel.send("#placeholder for dice roll command");
      break;

  }
});



bot.login(TOKEN);
