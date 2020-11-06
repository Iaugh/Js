const prefix = "x";
const axios = require('axios').default;

const config = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client;
const fs = require('fs');
const whitelist = config.whitelist;


client.on('ready', () => {
    console.log("[INFO] Starting up...");
});
client.on('message', msg => {
	if(!msg.content.startsWith(prefix)) return;
	if(!(whitelist.indexOf(msg.author.id) !== -1)) return;
    let args = msg.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift();
    try {
        let cmdFile = require(`./commands/${cmd}.js`);
        cmdFile.run(client, msg, args, config);
    } catch (e) {
    	console.log(e);
}});


//Nitro Sniper
client.on('message', message => {
    if(message.content.includes('discord.gift') || message.content.includes('discordapp.com/gifts/')) {

        var Nitro = /(discord\.(gift)|discordapp\.com\/gift)\/.+[a-z]/

        var NitroUrl = Nitro.exec(message.content);
        var NitroCode = NitroUrl[0].split('/')[1];

        console.log(`\x1b[34mA Nitro was found in ${message.guild.name}`);

        axios({
            method: 'POST',
            url: `https://discordapp.com/api/v6/entitlements/gift-codes/${NitroCode}/redeem`,
            headers:
            {
                'Authorization': client.account_token
            }
        }).then(
            () => console.log(`Successfully redeemed a nitro that was found in ${message.guild.name}`)

        ).catch(ex => console.log(`Couldn't claim Nitro. Link is expired or it's already claimed!`))

    }
})





client.login(config.token);
