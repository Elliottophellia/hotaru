const {Client, MessageEmbed} = require('discord.js');
const cron = require('cron');
const config = require('./botconfig/config.json');
const client = new Client({disableMentions: 'everyone'});


client.once("ready", () => {
    console.log(`Online as ${client.user.tag}`);

    let scheduledMessage = new cron.CronJob('30 4 * * *', () => {
        // This runs every day at 04:30 AM, you can do anything you want
        // Specifing your guild (server) and your channel
        const guild = client.guilds.cache.get('813007247914303498'); // your guild id
        const channel = guild.channels.cache.get('826209599211307029'); // your guild channel id
        const DailyLogin = new MessageEmbed()
        .setColor(config.color)
        .addField(`Good Morning!`, `Good morning and don't forget to daily check-in guys!!!\r\n\r\nLink: [English](https://webstatic-sea.mihoyo.com/ys/event/signin-sea/index.html?act_id=e202102251931481&lang=en-us) [Indonesia](https://webstatic-sea.mihoyo.com/ys/event/signin-sea/index.html?act_id=e202102251931481&lang=id-ID)\r\n\r\nTag: <@&875670582421770270>`)
        .setImage('https://i.ibb.co/vcPgPgC/Lumine-Login-Reminder.png')
        channel.send(DailyLogin);
    });

    scheduledMessage.start()
});

client.login(config.token);
