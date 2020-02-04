'use strict';
const Discord = require('discord.js');
const token = 'NTk3NDE4ODE4Nzg4MTMwODU1.XSHz4g.3pYlBwWLq0vFi9yMZWuLmfribcQ';
const fs = require('fs');
const client = new Discord.Client();

const rawdata = fs.readFileSync('supreme-data.json');  
const data = JSON.parse(rawdata); 

client.on('ready', () => {
    console.log('I am now connected');
    //client.channels.find(x => x.name === 'dev-work').send('Saying hi in #dev-work');
    //  let rawdata = fs.readFileSync('supreme-data.json');  
    //  let data = JSON.parse(rawdata); 
    // console.log(data.Accessories[0].name);  
  });

client.on('message', msg => {
    if (msg.content === 'calicos') {
      msg.channel.send('https://twitter.com/calicosio?lang=en');
      const embed = new Discord.RichEmbed()
        //.setAuthor('some thing', 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-1/p160x160/11226559_10153351803422980_5095261185894120077_n.jpg?_nc_cat=109&_nc_ht=scontent-dfw5-1.xx&oh=2368eb2c0f78f1df41962741df62e0a7&oe=5CD94B38')
        //.setColor('#f50057')
      //msg.channel.send(embed);
    }

    if (msg.content === '!supreme-Running Waist Bag') {
        const embed = new Discord.RichEmbed()
        .setTitle(`Supreme SS/19 ${data.Accessories[0].name}`)
        .setDescription(`${data.Accessories[0].description}`)
        .addField('Category Name', `${data.Accessories[0].category_name}`, true)
        .addField('Image', `${data.Accessories[0].image_url_hi}`, true)
        .addField('Price', `$${data.Accessories[0].price/100}`, true)
        .addField('Colors', `${data.Accessories[0].colors}`, true)
        .setColor('#f50057')
        msg.channel.send(embed);
    }

    if (msg.content === '!supreme-Supreme®/Cressi Snorkel Set') {
        const embed = new Discord.RichEmbed()
        .setTitle(`Supreme SS/19 ${data.Accessories[1].name}`)
        .setDescription(`${data.Accessories[1].description}`)
        .addField('Category Name', `${data.Accessories[1].category_name}`, true)
        .addField('Image', `${data.Accessories[1].image_url_hi}`, true)
        .addField('Price', `$${data.Accessories[1].price}`, true)
        .addField('Colors', `${data.Accessories[1].colors}`, true)
        .setColor('#f50057')
        msg.channel.send(embed);
    }
    
    if (msg.content === '!supreme-Supreme®/mophie® powerstation wireless XL') {
        const embed = new Discord.RichEmbed()
        .setTitle(`Supreme SS/19 ${data.Accessories[2].name}`)
        .setDescription(`${data.Accessories[2].description}`)
        .addField('Category Name', `${data.Accessories[2].category_name}`, true)
        .addField('Image', `${data.Accessories[2].image_url_hi}`, true)
        .addField('Price', `$${data.Accessories[2].price}`, true)
        .addField('Colors', `${data.Accessories[2].colors}`, true)
        .setColor('#f50057')
        msg.channel.send(embed);
    }
  
  });
  
  client.login(token);

 
  