


const Discord = require("discord.js");

const bot = new Discord.Client({ disableEveryone: true })

var request = require('request');
var cheerio = require('cheerio');
var url = "https://store.enmasse.com/closers/items"

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity("Tokyo Ghoul:reeeeeeeee", { type: "WATCHING" });
    bot.user.setUsername("rize");
});




bot.on("message", async message => {
   
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    
     if (message.content == `%join` && message.channel.name == "lfg-log"){
    var voiceChannel = message.member.voiceChannel;
    voiceChannel.join()
    } else if (message.content == `%leave` && message.channel.name == "lfg-log") {
        var voiceChannel = message.member.voiceChannel;
        voiceChannel.leave()
    }
    
    var argsaybots = message.content.slice(1).trim().split(/ +/g);
    if(message.content.startsWith("%bots") && message.channel.name == "squires-tavern" && message.author.id == "376344592049766401") {
        let resultbots = argsaybots.slice(1).join(' ');
        if (!resultbots) return; 
        bot.channels.get("386494149114724353").send(resultbots);
    }
    
        var argsaywelc = message.content.slice(1).trim().split(/ +/g);
    if(message.content.startsWith("%welc") && message.channel.name == "squires-tavern" && message.author.id == "376344592049766401") {
        let resultwelc = argsaywelc.slice(1).join(' ');
        if (!resultwelc) return; 
        bot.channels.get("439353017960235018").send(resultwelc);
    }
    
    var argsaysay = message.content.slice(1).trim().split(/ +/g);
    if(message.content.startsWith("%s") && message.channel.name == "squires-tavern") {
        let resultt = argsaysay.slice(1).join(' ');
        if (!resultt) return; 
        bot.channels.get("381392359507623939").send(resultt);
    }

    var argsay1 = message.content.slice(1).trim().split(/ +/g);
    if(message.content.startsWith("%chWATCH") && message.channel.name == "squires-tavern") {
        let chname1 = argsay1.slice(1).join(' ');
        if (!chname1) return; 
        bot.user.setActivity(chname1, { type: "WATCHING" });
    }
    var argsay2 = message.content.slice(1).trim().split(/ +/g);
    if(message.content.startsWith("%chLISTEN") && message.channel.name == "squires-tavern") {
        let chname2 = argsay2.slice(1).join(' ');
        if (!chname2) return; 
        bot.user.setActivity(chname2, { type: "LISTENING" });
    }
    var argsay3 = message.content.slice(1).trim().split(/ +/g);
    if(message.content.startsWith("%chPLAY") && message.channel.name == "squires-tavern") {
        let chname3 = argsay3.slice(1).join(' ');
        if (!chname3) return; 
        bot.user.setActivity(chname3, { type: "PLAYING" });
    }
    var argsay4 = message.content.slice(1).trim().split(/ +/g);
    if(message.content.startsWith("%chSTREAM") && message.channel.name == "squires-tavern") {
        let chname4 = argsay4.slice(1).join(' ');
        if (!chname4) return; 
        bot.user.setActivity(chname4, { type: "STREAMING" });
    }

       if (message.content.startsWith("$##24") && message.author.id == "376344592049766401") { 
      bot.channels.get("425266854014222377").send("dailycodegen/24hr");

 setInterval(() => {
          
        try {
            request(url, (error, resp, html) => {
          
                if (error) {
                    console.log("Error: " + error);
                    bot.channels.get("425266854014222377").send("Error: " + error);
                }
            
                const $ = cheerio.load(html);

                var freeimg = $('.item img').first().attr('src');
                var str = $('p', '#free-code').first().text();
                var strdesc = $('p', '.description').first().text();
                var str2 = $('h3').first().text();
                var res = str.slice(0, 19);
                
                const embedfreecode = new Discord.RichEmbed()
                    .setTitle(res)
                    .setDescription(strdesc)
                    .setURL("https://store.enmasse.com/closers/items")
                    .setFooter("To claim: Copy the code then redeem it via EME launcher | CLOSERS Daily Deals", "https://imgur.com/N6mZgoz.png")
                    .setAuthor("Free - "+str2)
                    .setImage(freeimg)
                    bot.channels.get("383620796364488715").send(embedfreecode);
                   
            });


            if (message.channel.id == "383620796364488715" && message.author.id == "376344592049766401"){
                bot.users.get("427786502999638016").lastMessage.delete();
            }

          } catch (error) {
            bot.channels.get("425266854014222377").send("Error: " + error);
          }
        
      }, 86400000)
  }
    

     if (message.content.startsWith("##freecode") && message.channel.name == "squires-tavern") { 
      bot.channels.get("425266854014222377").send("Now scraping... *Please don't spam this command* \nPlease take note that, daily free code will reset every 01:00 GMT+8");
         
        try {
           
            request(url, (error, resp, html) => {
          
                if (error) {
                    console.log("Error: " + error);
                    bot.channels.get("425266854014222377").send("Error: " + error);
                }
            
                const $ = cheerio.load(html);

                var freeimg = $('.item img').first().attr('src');
                var str = $('p', '#free-code').first().text();
                var strdesc = $('p', '.description').first().text();
                var str2 = $('h3').first().text();
                var res = str.slice(0, 19);
                
                if(str.length == 19){
                const embedfreecode = new Discord.RichEmbed()
                    .setTitle(str)
                    .setDescription(strdesc)
                    .setURL("https://store.enmasse.com/closers/items")
                    .setFooter("To claim: Copy the code then redeem it via EME launcher | CLOSERS Daily Deals", "https://imgur.com/N6mZgoz.png")
                    .setAuthor("Free - "+str2)
                    .setImage(freeimg)
                    bot.channels.get("438689460016644097").send("Requested by: " + message.author);
                    bot.channels.get("438689460016644097").send(embedfreecode);
                }else {
                bot.channels.get("425266854014222377").send("EME hasn't updated their page yet, please try again later..");
                }   
            });

          } catch (error) {
            bot.channels.get("425266854014222377").send("Error: " + error);
          }
        
    
  }


try {
    if ((message.isMemberMentioned()) && (message.channel.name == "lfg1-main") && (message.content.length <= 5)) {
        bot.channels.get("381392359507623939").send(message.author + " heyhoe, nxt time attach **@here** on your LFG msg");
     }
     

     
   



    const kpg1 = ["pg"];
    const kpg2 = ["dr5"];
    const kpg3 = ["planar gate"];
    const kpg4 = ["pg5"];
   
    const ktia1 = ["tia"];
    const ktia2 = ["tiamat"];
    const ktia3 = ["sides"];

    const km1 = ["spec"];
    const km2 = ["dd"];
    const km3 = ["andras"];
    const km4 = ["mopups"];
    const km5 = ["ele"];
    const km6 = ["elevator"];

    const kc1 = ["crew"];
    const kc2 = ["weeklies"];

    const msgContent = message.content.toLowerCase();
    
    let kpgvar = ((msgContent.includes(kpg1)) || (msgContent.includes(kpg2)) || (msgContent.includes(kpg3)) || (msgContent.includes(kpg4)));
    let ktiavar = ((msgContent.includes(ktia1)) || (msgContent.includes(ktia2)) || (msgContent.includes(ktia3)));
    let kmvar = ((msgContent.includes(km1)) || (msgContent.includes(km2)) || (msgContent.includes(km3)) || (msgContent.includes(km4))|| (msgContent.includes(km5))|| (msgContent.includes(km6)));
    let kcvar = ((msgContent.includes(kc1)) || msgContent.includes(kc2));

    if ((message.isMemberMentioned()) && (kpgvar && !ktiavar && !kmvar && !kcvar) && (message.channel.name == "lfg1-main") && (message.content.length > 5)){
        let serverembed = new Discord.RichEmbed()
            .setDescription(message.author + " is looking for party/member!")
            .setThumbnail("https://i.imgur.com/IBtmbnZ.png")
            .setColor("#78866b")
            .addField(message.content, message.channel.parent)
        bot.channels.get("432775028757626890").send(serverembed);
        bot.channels.get("432774887032094726").send(serverembed);
    }

     if ((message.isMemberMentioned()) && (!kpgvar && ktiavar && !kmvar & !kcvar) && (message.channel.name == "lfg1-main") && (message.content.length > 5)) {
        let serverembed = new Discord.RichEmbed()
            .setDescription(message.author + " is looking for party/member!")
            .setThumbnail("https://imgur.com/g1VKEJE.png")
            .setColor("#78866b")
            .addField(message.content, message.channel.parent)
        bot.channels.get("432775028757626890").send(serverembed);
        bot.channels.get("432774887032094726").send(serverembed);
   }

   if ((message.isMemberMentioned()) && (!kcvar &&!kpgvar && !ktiavar && kmvar) && (message.channel.name == "lfg1-main") && (message.content.length > 5)) {
    let serverembed = new Discord.RichEmbed()
        .setDescription(message.author + " is looking for party/member!")
        .setThumbnail("https://imgur.com/pZyxS9Z.png")
        .setColor("#78866b")
        .addField(message.content, message.channel.parent)
    bot.channels.get("432775028757626890").send(serverembed);
    bot.channels.get("432774887032094726").send(serverembed);
}

if ((message.isMemberMentioned()) && (kcvar && !kpgvar && !ktiavar && !kmvar) && (message.channel.name == "lfg1-main") && (message.content.length > 5)) {
    let serverembed = new Discord.RichEmbed()
        .setDescription(message.author + " is looking for party/member!")
        .setThumbnail("https://media.discordapp.net/attachments/425266854014222377/432771380115931146/crewmish.gif")
        .setColor("#78866b")
        .addField(message.content, message.channel.parent)
    bot.channels.get("432775028757626890").send(serverembed);
    bot.channels.get("432774887032094726").send(serverembed);
}

    if ((message.isMemberMentioned()) && (kpgvar && ktiavar && !kmvar) && (message.channel.name == "lfg1-main") && (message.content.length > 5)) {
        let serverembed = new Discord.RichEmbed()
            .setDescription(message.author + " is looking for party/member!")
            .setThumbnail("https://imgur.com/tHwkGca.png")
            .setColor("#78866b")
            .addField(message.content, message.channel.parent)
        bot.channels.get("432775028757626890").send(serverembed);
        bot.channels.get("432774887032094726").send(serverembed);
    }

    if ((message.isMemberMentioned()) && (kpgvar && !ktiavar && kmvar) && (message.channel.name == "lfg1-main") && (message.content.length > 5)) {
        let serverembed = new Discord.RichEmbed()
            .setDescription(message.author + " is looking for party/member!")
            .setThumbnail("https://imgur.com/vAA8NkZ.png")
            .setColor("#78866b")
            .addField(message.content, message.channel.parent)
        bot.channels.get("432775028757626890").send(serverembed);
        bot.channels.get("432774887032094726").send(serverembed);
    }
    
     if ((message.isMemberMentioned()) && (!kpgvar && ktiavar && kmvar) && (message.channel.name == "lfg1-main") && (message.content.length > 5)) {
        let serverembed = new Discord.RichEmbed()
            .setDescription(message.author + " is looking for party/member!")
            .setThumbnail("https://imgur.com/KhlvG1n.png")
            .setColor("#78866b")
            .addField(message.content, message.channel.parent)
        bot.channels.get("432775028757626890").send(serverembed);
        bot.channels.get("432774887032094726").send(serverembed);
    }
   
   
    if ((message.isMemberMentioned()) && (kpgvar && ktiavar && kmvar) && (message.channel.name == "lfg1-main") && (message.content.length > 5)) {
        let serverembed = new Discord.RichEmbed()
            .setDescription(message.author + " is looking for party/member!")
            .setThumbnail("https://imgur.com/6JoyA8R.png")
            .setColor("#78866b")
            .addField(message.content, message.channel.parent)
        bot.channels.get("432775028757626890").send(serverembed);
        bot.channels.get("432774887032094726").send(serverembed);
    }
   
    if ((message.isMemberMentioned()) && (!kpgvar && !ktiavar && !kmvar && !kcvar) && (message.channel.name == "lfg1-main") && (message.content.length > 5)) {
        let serverembed = new Discord.RichEmbed()
            .setDescription(message.author + " is looking for party/member!")
            //.setThumbnail("https://imgur.com/KhlvG1n.png")
            .setColor("#78866b")
            .addField(message.content, message.channel.parent)
        bot.channels.get("432775028757626890").send(serverembed);
        bot.channels.get("432774887032094726").send(serverembed);
    }



} catch (error) {
    
}



});



bot.on('presenceUpdate', (oldMember, newMember) => {
    
    let guild = newMember.guild;
    let playRole = guild.roles.find("name", "ALFG-ON");
 
    if (!playRole) return;
    if (newMember.roles.has("432384823068459018") && newMember.user.presence.game && newMember.user.presence.game.name === "Closers Dimension Conflict") {
       newMember.addRole(playRole).catch(console.error);
       //bot.channels.get("425266854014222377").send(newMember + "added " + playRole.id);
    
    } else if (!newMember.user.presence.game && newMember.roles.has(playRole.id)) {
        newMember.removeRole(playRole).catch(console.error);
    }

    
  });

bot.on('guildMemberRemove', member => {
    let guild = member.guild;
  
bot.channels.get("425266854014222377").send(member.user + ` has committed seduko, sayonara! o7`)
  });  

bot.on('guildMemberAdd', member => {
  bot.channels.get("432774887032094726").send(member.user + ` Hi! if you're looking for a party, you can ping those desparate peeps here. \n~~spam mention if they wont respond~~`)
});


bot.login(process.env.BOT_TOKEN);
