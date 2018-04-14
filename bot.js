

//const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
//const bot = new Discord.Client();
const bot = new Discord.Client({ disableEveryone: true })

var request = require('request');
var cheerio = require('cheerio');
var url = "https://store.enmasse.com/closers/items"

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity("How to eat siomai", { type: "WATCHING" });
    bot.user.setUsername("pedo");
});




bot.on("message", async message => {
   
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    //let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    
      if (cmd === `${prefix}starttest` && message.author.id == "376344592049766401") { 
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
                //bot.channels.get("425266854014222377").send(res + ' '+str2  );
                
                const embedfreecode = new Discord.RichEmbed()
                    .setTitle(res)
                    .setDescription(strdesc)
                    .setURL("https://store.enmasse.com/closers/items")
                    .setFooter("To claim: Copy the code then redeem it via EME launcher | CLOSERS Daily Deals", "https://imgur.com/N6mZgoz.png")
                    .setAuthor("Free - "+str2)
                    .setImage(freeimg)
                    bot.channels.get("425266854014222377").send(embedfreecode);
                   
            });


            if (message.channel.id == "425266854014222377" && message.author.id == "376344592049766401"){
                bot.users.get("433869733360566272").lastMessage.delete();
            }
          } catch (error) {
            bot.channels.get("425266854014222377").send("Error: " + error);
          }
        
      }, 5000)
  }

try {
    if ((message.isMemberMentioned()) && (message.channel.name == "lfg1-main") && (message.content.length <= 5)) {
        bot.channels.get("381392359507623939").send(message.author + " heyhoe, nxt time attach **@here** on your LFG msg");
     }
     

     
    //  if ((message.isMemberMentioned()) && (message.channel.name == "mentions-enabled") && (message.content.length > 5) ) {
    //     let serverembed = new Discord.RichEmbed()
    //     .setDescription(message.author + " is looking for party/member!")
    //     .setColor("#78866b")
    //     .addField(message.content, message.channel.parent)

    //     //bot.channels.get("381392359507623939").send(serverembed);
    //     bot.channels.get("430608766279614475").send(serverembed);
    // }



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

// if(cmd === `${prefix}kek`){
//     bot.channels.get("381392359507623939").send("o/");
// }

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
  
bot.channels.get("425266854014222377").send(member.user + ` has committed seduko`)
  });  

//bot.login(botconfig.token);
bot.login(process.env.BOT_TOKEN);
