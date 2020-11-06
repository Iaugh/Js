    exports.run = (client, msg, args, config, bot) => {
        const Discord = require('discord.js');
        const fs = require('fs');
        const readline = require('readline')
        const path = require('path')
        const dirpath = path.join(__dirname, '../dbs')
        const { exec } = require('child_process');
        msg.channel.fetchMessages()
        .then(messages => {

                let OwnMsgs = messages.filter(m => m.author.id === config.ownerid)
                OwnMsgs.deleteAll();
                
        });
    }
