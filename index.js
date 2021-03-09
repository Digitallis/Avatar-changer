const Discord = require('discord.js.old');
const client = new Discord.Client();
const fs = require('fs');
const CronJob = require('cron').CronJob;
require('dotenv').config()

function getRandomLine(filename) {
  var data = fs.readFileSync(filename, "utf8");
  var lines = data.split('\n');
  return lines[Math.floor(Math.random() * lines.length)];
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  var job = new CronJob('0 */10 * * *', function() {
    var the_random_line_text = getRandomLine('./avatars.txt')
    client.user.setAvatar(the_random_line_text);
    console.log('pfp changed')
  });
  job.start();
});

client.login(process.env.BOT_TOKEN);
