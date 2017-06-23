//comment

'use strict';
console.log('The bot is starting...');

const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = '!';

var authorisation = require('./config/authorisation').authorisation;
var eightBall = require('./exports/8ball').eightBall;

authorisation();
eightBall ();

bot.on('ready', () => {
  console.log('The bot is ready!');
});

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});


bot.on('guildMemberAdd', member => {
  member.guild.defaultChannel.send(`Welcome to Cardboard Haus, ${member}!`);

  const channel = member.guild.channels.find('name', 'member-log');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});

bot.on('mesasge', msg => {

  if (!msg.content.startsWith(PREFIX)) return;
  var args = msg.content.substring(PREFIX.length).split('');

  switch (args[0].toLowerCase()) {
    case 'ping':
      msg.reply('Pong!');
      break;
    case 'info':
      msg.reply('placeholder for info command');
      break;
    case 'help':
      msg.reply('placeholder for help command');
      break;
    case 'music':
      msg.reply('placeholder for music command');
      break;
    case 'twitter':
      msg.reply('placeholder for twitter command');
      break;
    case 'dice':
      msg.reply('placeholder for dice command');
      break;
    case '8ball':
      if (args[1]) {
        msg.reply(eightBallAnswers[Math.floor(Math.random() * eightBallAnswers.length)]);
      } else {
        msg.reply('You can\'t have an answer without a question!');
      }
      break;

    default:
      msg.reply('Invaild Command! Please use !help for more info.');
  }
});
