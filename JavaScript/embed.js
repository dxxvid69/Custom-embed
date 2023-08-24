const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', message => {
  if (message.content === '!embed') {
    const embed = new Discord.MessageEmbed()
      .setTitle('Embed Title')
      .setDescription('This is a sample embed in discord.js')
      .setColor('#3498db')
      .setAuthor(message.author.tag, message.author.avatarURL())
      .addField('Field 1', 'Value 1', false)
      .addField('Field 2', 'Value 2', false)
      .setFooter('Footer Text');
    message.channel.send(embed);
  }
});

// Replace 'YOUR_BOT_TOKEN' with your actual bot token
client.login('YOUR_BOT_TOKEN');
