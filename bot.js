


const Discord = require("discord.js");

const bot = new Discord.Client({ disableEveryone: true })

var request = require('request');
var cheerio = require('cheerio');
var url = "https://store.enmasse.com/closers/items"
var schedule = require('node-schedule');

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
	//bot.channels.get("425266854014222377").send("reset " + bot.users.get("376344592049766401"));
    bot.user.setActivity("Closers Dimension Conflict", { type: "PLAYING" });
    bot.user.setUsername("Siomai Vending Machine");
    
    EMEDailycode();
    //clsDD1();
    //clsPHR();
    clsCAR();
    clsDDmon1();
    clsDDmon2();
    clsDDtue1();
    clsDDtue2();
    clsDDwed1();
    clsDDwed2();
    clsDDthu1();
    clsDDthu2();
    clsDDfri1();
    clsDDfri2();  
    clsDDsat1();
    clsDDsat2();
    clsDDsun1();
    clsDDsun2();

    mont();
    tuet();
    wedt();
    thut();
    frit();
    satt();
    sunt();
    
});


function EMEDailycode() {
    let scheduledailyc = require('node-schedule');
    let ruledailyc = new schedule.RecurrenceRule();
    ruledailyc.hour = 17;
    ruledailyc.minute = 5;
    let jdailyc = scheduledailyc.scheduleJob(ruledailyc, function () {
        
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
                var numberchildren1 = $('#items').children().length;
                var numberchildren = numberchildren1 - 1;

                const items = [];
                const itemsdescrip = [];
                const itemsrpice = [];
                var itemsno = items.length;
                var testhtml = $('h3').each(function (i, elem) {
                    items[i] = $(this).text();
                });
                var testhtml1 = $('p', '.description').each(function (i, elem) {
                    itemsdescrip[i] = $(this).text();
                });
                var testhtml2 = $('.price').each(function (i, elem) {
                    itemsrpice[i] = $(this).text();
                });
                const textt = items.join(', ');
               
		//var freefinder = $('div').eq(26).text();

                //if (freefinder == "FREE" || null){

                const embedfreecode = new Discord.RichEmbed()
                .setTitle(str)
                .setDescription(strdesc)
                .setURL("https://store.enmasse.com/closers/items")
                .setFooter("To claim: Copy the code then redeem it via EME launcher | CLOSERS Daily Deals", "https://imgur.com/N6mZgoz.png")
                .setAuthor("Free - "+str2)
                .setImage(freeimg)
                bot.channels.get("438689460016644097").send(embedfreecode);

                if (numberchildren >= 1) {
                    const embedfreecode1 = new Discord.RichEmbed()
                        .setTitle(items[1])
                        .setDescription(itemsdescrip[1])
                        .setFooter(itemsrpice[0], "https://static.enmasse.com/images/Gifting/emp-icon.png")
                        .setURL("https://store.enmasse.com/closers/items")
                    bot.channels.get("440724107458379777").send(embedfreecode1);
                }
                if (numberchildren >= 2) {
                    const embedfreecode2 = new Discord.RichEmbed()

                        .setTitle(items[2])
                        .setDescription(itemsdescrip[2])
                        .setFooter(itemsrpice[1], "https://static.enmasse.com/images/Gifting/emp-icon.png")
                        .setURL("https://store.enmasse.com/closers/items")
                    bot.channels.get("440724107458379777").send(embedfreecode2);
                }
                if (numberchildren >= 3) {
                    const embedfreecode3 = new Discord.RichEmbed()

                        .setTitle(items[3])
                        .setDescription(itemsdescrip[3])
                        .setFooter(itemsrpice[2], "https://static.enmasse.com/images/Gifting/emp-icon.png")
                        .setURL("https://store.enmasse.com/closers/items")
                    bot.channels.get("440724107458379777").send(embedfreecode3);
                }
                if (numberchildren >= 4) {
                    const embedfreecode4 = new Discord.RichEmbed()

                        .setTitle(items[4])
                        .setDescription(itemsdescrip[4])
                        .setFooter(itemsrpice[3], "https://static.enmasse.com/images/Gifting/emp-icon.png")
                        .setURL("https://store.enmasse.com/closers/items")
                    bot.channels.get("440724107458379777").send(embedfreecode4);
                }
                if (numberchildren >= 5) {
                    const embedfreecode5 = new Discord.RichEmbed()

                        .setTitle(items[5])
                        .setDescription(itemsdescrip[5])
                        .setFooter(itemsrpice[4], "https://static.enmasse.com/images/Gifting/emp-icon.png")
                        .setURL("https://store.enmasse.com/closers/items")
                    bot.channels.get("440724107458379777").send(embedfreecode5);
                }
                if (numberchildren >= 6) {
                    const embedfreecode6 = new Discord.RichEmbed()

                        .setTitle(items[6])
                        .setDescription(itemsdescrip[6])
                        .setFooter(itemsrpice[5], "https://static.enmasse.com/images/Gifting/emp-icon.png")
                        .setURL("https://store.enmasse.com/closers/items")
                    bot.channels.get("440724107458379777").send(embedfreecode6);
                }
                if (numberchildren >= 7) {
                    const embedfreecode7 = new Discord.RichEmbed()

                        .setTitle(items[7])
                        .setDescription(itemsdescrip[7])
                        .setFooter(itemsrpice[6], "https://static.enmasse.com/images/Gifting/emp-icon.png")
                        .setURL("https://store.enmasse.com/closers/items")
                    bot.channels.get("440724107458379777").send(embedfreecode7);
                }
                if (numberchildren >= 8) {
                    const embedfreecode8 = new Discord.RichEmbed()

                        .setTitle(items[8])
                        .setDescription(itemsdescrip[8])
                        .setFooter(itemsrpice[7], "https://static.enmasse.com/images/Gifting/emp-icon.png")
                        .setURL("https://store.enmasse.com/closers/items")
                    bot.channels.get("440724107458379777").send(embedfreecode8);
                }
                if (numberchildren >= 9) {
                    const embedfreecode9 = new Discord.RichEmbed()

                        .setTitle(items[9])
                        .setDescription(itemsdescrip[9])
                        .setFooter(itemsrpice[8], "https://static.enmasse.com/images/Gifting/emp-icon.png")
                        .setURL("https://store.enmasse.com/closers/items")
                    bot.channels.get("440724107458379777").send(embedfreecode9);
                }
                if (numberchildren >= 10) {
                    const embedfreecode10 = new Discord.RichEmbed()

                        .setTitle(items[10])
                        .setDescription(itemsdescrip[10])
                        .setFooter(itemsrpice[9], "https://static.enmasse.com/images/Gifting/emp-icon.png")
                        .setURL("https://store.enmasse.com/closers/items")
                    bot.channels.get("440724107458379777").send(embedfreecode10);
                }
                if (numberchildren >= 11) {
                    const embedfreecode11 = new Discord.RichEmbed()

                        .setTitle(items[11])
                        .setDescription(itemsdescrip[11])
                        .setFooter(itemsrpice[10], "https://static.enmasse.com/images/Gifting/emp-icon.png")
                        .setURL("https://store.enmasse.com/closers/items")
                    bot.channels.get("440724107458379777").send(embedfreecode11);
                }
                if (numberchildren >= 12) {
                    const embedfreecode12 = new Discord.RichEmbed()

                        .setTitle(items[12])
                        .setDescription(itemsdescrip[12])
                        .setFooter(itemsrpice[11], "https://static.enmasse.com/images/Gifting/emp-icon.png")
                        .setURL("https://store.enmasse.com/closers/items")
                    bot.channels.get("440724107458379777").send(embedfreecode12);
                }
	               // } else {
                  //  bot.channels.get("425266854014222377").send(bot.users.get("376344592049766401")+ " new html");
                  //  bot.channels.get("425266854014222377").send("anywan here who can post the daily free code? from `https://store.enmasse.com/closers/items`  \nkindly post it on <#438689460016644097> <:tina11:392924198290587669>");
              //  }


            });

        } catch (error) {
            bot.channels.get("432775028757626890").send("Error: " + error);
        }

    });
}

function clsDD1() {
    let scheduleclsDD1 = require('node-schedule');
    let ruleclsDD1 = new schedule.RecurrenceRule();
    ruleclsDD1.hour = [18, 20, 22, 00, 2, 4, 6, 8, 10, 12, 14, 16];
    ruleclsDD1.minute = 00;
    let jdd1 = scheduleclsDD1.scheduleJob(ruleclsDD1, function () {
        
        bot.channels.get("429169582301904906").send("**Dimensional Doppelgangers (DD) has now opened!** <:mistelhii:383533892248010766>");
    });
}
function clsPHR() {
    let scheduleclsPHR = require('node-schedule');
    let ruleclsPHR = new schedule.RecurrenceRule();
    ruleclsPHR.hour = [1, 3, 17, 19, 21, 23];
    ruleclsPHR.minute = 00;
    let jclsPHR = scheduleclsPHR.scheduleJob(ruleclsPHR, function () {
        bot.channels.get("381392359507623939").send("**Power Hour/Arena Brawl is now active** o/");
    });
}
function clsCAR() {
    let scheduleclsCAR = require('node-schedule');
    let ruleclsCAR = new schedule.RecurrenceRule();
    ruleclsCAR.hour = [5, 21, 13];
    ruleclsCAR.minute = 00;
    let jclsCAR = scheduleclsCAR.scheduleJob(ruleclsCAR, function () {
        bot.channels.get("416201903664267264").send("**Crew Brawl is now active o/**" + " <@&454867260327329803> " + "\n *To get pinged, type* `>rank Crew3v3` in <#386494149114724353>");
    });
}

//START OF CLSDD
    function clsDDmon1() {

        let schMON1 = require('node-schedule');
        let ruleDD1 = new schedule.RecurrenceRule();
        ruleDD1.dayOfWeek = [1];
        ruleDD1.hour = [18, 20, 22, 6, 8, 10, 12, 14, 16];
        ruleDD1.minute = 00;
        let jclsDDmon1 = schMON1.scheduleJob(ruleDD1, function () {

       const user = bot.users.get("427786502999638016");
        const amount = 3;

            bot.channels.get("429169582301904906").fetchMessages({
                limit: amount,
            }).then((messages) => {
                if (user) {
                    const filterBy = user ? user.id : bot.user.id;
                    messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
                }
                bot.channels.get("429169582301904906").bulkDelete(messages).catch(error => console.log(error.stack));
            });

        
        setTimeout(() => {
            const emon = new Discord.RichEmbed()
            .setDescription("Dimensional Doppelgangers (DD) has now opened! \n\nPotential rewards:")
            .setImage("https://imgur.com/RXAVWQ9.gif")
            bot.channels.get("429169582301904906").send(emon);
	}, 5000)

	

        });
    }
    
    function clsDDmon2() {

        let schMON2 = require('node-schedule');
        let ruleDD2 = new schedule.RecurrenceRule();
        ruleDD2.dayOfWeek = [2];
        ruleDD2.hour = [00, 2, 4];
        ruleDD2.minute = 00;
        let jclsDDmon2 = schMON2.scheduleJob(ruleDD2, function () {

           const user = bot.users.get("427786502999638016");
        const amount = 3;

            bot.channels.get("429169582301904906").fetchMessages({
                limit: amount,
            }).then((messages) => {
                if (user) {
                    const filterBy = user ? user.id : bot.user.id;
                    messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
                }
                bot.channels.get("429169582301904906").bulkDelete(messages).catch(error => console.log(error.stack));
            });

        
        setTimeout(() => {
    
            const emon = new Discord.RichEmbed()
            .setDescription("Dimensional Doppelgangers (DD) has now opened! \n\nPotential rewards:")
            .setImage("https://imgur.com/RXAVWQ9.gif")
            bot.channels.get("429169582301904906").send(emon);
}, 5000)

	

        });
    }
    
    function clsDDtue1() {

        let schTUE1 = require('node-schedule');
        let ruleDD3 = new schedule.RecurrenceRule();
        ruleDD3.dayOfWeek = [2];
        ruleDD3.hour = [18, 20, 22, 6, 8, 10, 12, 14, 16];
        ruleDD3.minute = 00;
        let jclsDDtue1 = schTUE1.scheduleJob(ruleDD3, function () {

            const user = bot.users.get("427786502999638016");
        const amount = 3;

            bot.channels.get("429169582301904906").fetchMessages({
                limit: amount,
            }).then((messages) => {
                if (user) {
                    const filterBy = user ? user.id : bot.user.id;
                    messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
                }
                bot.channels.get("429169582301904906").bulkDelete(messages).catch(error => console.log(error.stack));
            });

        
        setTimeout(() => {
    
            const etue = new Discord.RichEmbed()
            .setDescription("Dimensional Doppelgangers (DD) has now opened! \n\nPotential rewards:")
            .setImage("https://i.imgur.com/DWgPxhR.gif")
            bot.channels.get("429169582301904906").send(etue);
}, 5000)

	

        });
    }
    function clsDDtue2() {

        let schTUE2 = require('node-schedule');
        let ruleDD4 = new schedule.RecurrenceRule();
        ruleDD4.dayOfWeek = [3];
        ruleDD4.hour = [00, 2, 4];
        ruleDD4.minute = 00;
        let jclsDDtue2 = schTUE2.scheduleJob(ruleDD4, function () {

             const user = bot.users.get("427786502999638016");
        const amount = 3;

            bot.channels.get("429169582301904906").fetchMessages({
                limit: amount,
            }).then((messages) => {
                if (user) {
                    const filterBy = user ? user.id : bot.user.id;
                    messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
                }
                bot.channels.get("429169582301904906").bulkDelete(messages).catch(error => console.log(error.stack));
            });

        
        setTimeout(() => {
    
            const etue = new Discord.RichEmbed()
            .setDescription("Dimensional Doppelgangers (DD) has now opened! \n\nPotential rewards:")
            .setImage("https://i.imgur.com/DWgPxhR.gif")
            bot.channels.get("429169582301904906").send(etue);
}, 5000)

	

        });
    }
    function clsDDwed1() {

        let schWED1 = require('node-schedule');
        let ruleDD5 = new schedule.RecurrenceRule();
        ruleDD5.dayOfWeek = [3];
        ruleDD5.hour = [18, 20, 22, 6, 8, 10, 12, 14, 16];
        ruleDD5.minute = 00;
        let jclsDDwed1 = schWED1.scheduleJob(ruleDD5, function () {

           const user = bot.users.get("427786502999638016");
        const amount = 3;

            bot.channels.get("429169582301904906").fetchMessages({
                limit: amount,
            }).then((messages) => {
                if (user) {
                    const filterBy = user ? user.id : bot.user.id;
                    messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
                }
                bot.channels.get("429169582301904906").bulkDelete(messages).catch(error => console.log(error.stack));
            });

        
        setTimeout(() => {
    
            const ewed = new Discord.RichEmbed()
            .setDescription("Dimensional Doppelgangers (DD) has now opened! \n\nPotential rewards:")
            .setImage("https://imgur.com/BfyCzrq.gif")
            bot.channels.get("429169582301904906").send(ewed);
}, 5000)

	

        });
    }
    function clsDDwed2() {

        let schWED2 = require('node-schedule');
        let ruleDD6 = new schedule.RecurrenceRule();
        ruleDD6.dayOfWeek = [4];
        ruleDD6.hour = [00, 2, 4];
        ruleDD6.minute = 00;
        let jclsDDwed2 = schWED2.scheduleJob(ruleDD6, function () {

            const user = bot.users.get("427786502999638016");
        const amount = 3;

            bot.channels.get("429169582301904906").fetchMessages({
                limit: amount,
            }).then((messages) => {
                if (user) {
                    const filterBy = user ? user.id : bot.user.id;
                    messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
                }
                bot.channels.get("429169582301904906").bulkDelete(messages).catch(error => console.log(error.stack));
            });

        
        setTimeout(() => {
    
            const ewed = new Discord.RichEmbed()
            .setDescription("Dimensional Doppelgangers (DD) has now opened! \n\nPotential rewards:")
            .setImage("https://imgur.com/BfyCzrq.gif")
            bot.channels.get("429169582301904906").send(ewed);
}, 5000)

	

        });
    }
    function clsDDthu1() {

        let schTHU1 = require('node-schedule');
        let ruleDD7 = new schedule.RecurrenceRule();
        ruleDD7.dayOfWeek = [4];
        ruleDD7.hour = [18, 20, 22, 6, 8, 10, 12, 14, 16];
        ruleDD7.minute = 00;
        let jclsDDthu1 = schTHU1.scheduleJob(ruleDD7, function () {

           const user = bot.users.get("427786502999638016");
        const amount = 3;

            bot.channels.get("429169582301904906").fetchMessages({
                limit: amount,
            }).then((messages) => {
                if (user) {
                    const filterBy = user ? user.id : bot.user.id;
                    messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
                }
                bot.channels.get("429169582301904906").bulkDelete(messages).catch(error => console.log(error.stack));
            });

        
        setTimeout(() => {
    
            const ethu = new Discord.RichEmbed()
            .setDescription("Dimensional Doppelgangers (DD) has now opened! \n\nPotential rewards:")
            .setImage("https://imgur.com/uTQEGH1.gif")
            bot.channels.get("429169582301904906").send(ethu);
}, 5000)

	

        });
    }
    function clsDDthu2() {

        let schTHU2 = require('node-schedule');
        let ruleDD8 = new schedule.RecurrenceRule();
        ruleDD8.dayOfWeek = [5];
        ruleDD8.hour = [00, 2, 4];
        ruleDD8.minute = 00;
        let jclsDDthu2 = schTHU2.scheduleJob(ruleDD8, function () {

         const user = bot.users.get("427786502999638016");
        const amount = 3;

            bot.channels.get("429169582301904906").fetchMessages({
                limit: amount,
            }).then((messages) => {
                if (user) {
                    const filterBy = user ? user.id : bot.user.id;
                    messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
                }
                bot.channels.get("429169582301904906").bulkDelete(messages).catch(error => console.log(error.stack));
            });

        
        setTimeout(() => {
    
            const ethu = new Discord.RichEmbed()
            .setDescription("Dimensional Doppelgangers (DD) has now opened! \n\nPotential rewards:")
            .setImage("https://imgur.com/uTQEGH1.gif")
            bot.channels.get("429169582301904906").send(ethu);
}, 5000)

	

        });
    }
    function clsDDfri1() {

        let schFRI1 = require('node-schedule');
        let ruleDD9 = new schedule.RecurrenceRule();
        ruleDD9.dayOfWeek = [5];
        ruleDD9.hour = [18, 20, 22, 6, 8, 10, 12, 14, 16];
        ruleDD9.minute = 00;
        let jclsDDfri1 = schFRI1.scheduleJob(ruleDD9, function () {

           const user = bot.users.get("427786502999638016");
        const amount = 3;

            bot.channels.get("429169582301904906").fetchMessages({
                limit: amount,
            }).then((messages) => {
                if (user) {
                    const filterBy = user ? user.id : bot.user.id;
                    messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
                }
                bot.channels.get("429169582301904906").bulkDelete(messages).catch(error => console.log(error.stack));
            });

        
        setTimeout(() => {
    
            const efri = new Discord.RichEmbed()
            .setDescription("Dimensional Doppelgangers (DD) has now opened! \n\nPotential rewards:")
            .setImage("https://imgur.com/owJ822x.gif")
            bot.channels.get("429169582301904906").send(efri);
}, 5000)

	

        });
    }
    function clsDDfri2() {

        let schFRI2 = require('node-schedule');
        let ruleDD10 = new schedule.RecurrenceRule();
        ruleDD10.dayOfWeek = [6];
        ruleDD10.hour = [00, 2, 4];
        ruleDD10.minute = 00;
        let jclsDDfri2 = schFRI2.scheduleJob(ruleDD10, function () {

            const user = bot.users.get("427786502999638016");
        const amount = 3;

            bot.channels.get("429169582301904906").fetchMessages({
                limit: amount,
            }).then((messages) => {
                if (user) {
                    const filterBy = user ? user.id : bot.user.id;
                    messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
                }
                bot.channels.get("429169582301904906").bulkDelete(messages).catch(error => console.log(error.stack));
            });

        
        setTimeout(() => {
    
            const efri = new Discord.RichEmbed()
            .setDescription("Dimensional Doppelgangers (DD) has now opened! \n\nPotential rewards:")
            .setImage("https://imgur.com/owJ822x.gif")
            bot.channels.get("429169582301904906").send(efri);
}, 5000)

	

        });
    }
    function clsDDsat1() {

        let schSAT1 = require('node-schedule');
        let ruleDD11 = new schedule.RecurrenceRule();
        ruleDD11.dayOfWeek = [6];
        ruleDD11.hour = [18, 20, 22, 6, 8, 10, 12, 14, 16];
        ruleDD11.minute = 00;
        let jclsDDsat1 = schSAT1.scheduleJob(ruleDD11, function () {

            const user = bot.users.get("427786502999638016");
        const amount = 3;

            bot.channels.get("429169582301904906").fetchMessages({
                limit: amount,
            }).then((messages) => {
                if (user) {
                    const filterBy = user ? user.id : bot.user.id;
                    messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
                }
                bot.channels.get("429169582301904906").bulkDelete(messages).catch(error => console.log(error.stack));
            });

        
        setTimeout(() => {
    
            const esat = new Discord.RichEmbed()
            .setDescription("Dimensional Doppelgangers (DD) has now opened! \n\nPotential rewards:")
            .setImage("https://imgur.com/OXQK5SO.gif")
            bot.channels.get("429169582301904906").send(esat);
}, 5000)

	

        });
    }
    function clsDDsat2() {

        let schSAT2 = require('node-schedule');
        let ruleDD12 = new schedule.RecurrenceRule();
        ruleDD12.dayOfWeek = [0];
        ruleDD12.hour = [00, 2, 4];
        ruleDD12.minute = 00;
        let jclsDDsat2 = schSAT2.scheduleJob(ruleDD12, function () {

            const user = bot.users.get("427786502999638016");
        const amount = 3;

            bot.channels.get("429169582301904906").fetchMessages({
                limit: amount,
            }).then((messages) => {
                if (user) {
                    const filterBy = user ? user.id : bot.user.id;
                    messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
                }
                bot.channels.get("429169582301904906").bulkDelete(messages).catch(error => console.log(error.stack));
            });

        
        setTimeout(() => {
    
            const esat = new Discord.RichEmbed()
            .setDescription("Dimensional Doppelgangers (DD) has now opened! \n\nPotential rewards:")
            .setImage("https://imgur.com/OXQK5SO.gif")
            bot.channels.get("429169582301904906").send(esat);
}, 5000)

	

        });
    }
    function clsDDsun1() {

        let schSUN1 = require('node-schedule');
        let ruleDD13 = new schedule.RecurrenceRule();
        ruleDD13.dayOfWeek = [0];
        ruleDD13.hour = [18, 20, 22, 6, 8, 10, 12, 14, 16];
        ruleDD13.minute = 00;
        let jclsDDsun1 = schSUN1.scheduleJob(ruleDD13, function () {

           const user = bot.users.get("427786502999638016");
        const amount = 3;

            bot.channels.get("429169582301904906").fetchMessages({
                limit: amount,
            }).then((messages) => {
                if (user) {
                    const filterBy = user ? user.id : bot.user.id;
                    messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
                }
                bot.channels.get("429169582301904906").bulkDelete(messages).catch(error => console.log(error.stack));
            });

        
        setTimeout(() => {
    
            const esun = new Discord.RichEmbed()
            .setDescription("Dimensional Doppelgangers (DD) has now opened! \n\nPotential rewards:")
            .setImage("https://imgur.com/LDdGDSq.gif")
            bot.channels.get("429169582301904906").send(esun);
}, 5000)

	

        });
    }
    function clsDDsun2() {

        let schSUN2 = require('node-schedule');
        let ruleDD14 = new schedule.RecurrenceRule();
        ruleDD14.dayOfWeek = [1];
        ruleDD14.hour = [00, 2, 4];
        ruleDD14.minute = 00;
        let jclsDDsun2 = schSUN2.scheduleJob(ruleDD14, function () {

            const user = bot.users.get("427786502999638016");
        const amount = 3;

            bot.channels.get("429169582301904906").fetchMessages({
                limit: amount,
            }).then((messages) => {
                if (user) {
                    const filterBy = user ? user.id : bot.user.id;
                    messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
                }
                bot.channels.get("429169582301904906").bulkDelete(messages).catch(error => console.log(error.stack));
            });

        
        setTimeout(() => {
    
            const esun = new Discord.RichEmbed()
            .setDescription("Dimensional Doppelgangers (DD) has now opened! \n\nPotential rewards:")
            .setImage("https://imgur.com/LDdGDSq.gif")
            bot.channels.get("429169582301904906").send(esun);
}, 5000)

	

        });
    }
//END OF CLSDD

//START OF PURI
function mont(){
    
    var mon = require('node-schedule');

    var jmon = schedule.scheduleJob('0 * * * * 1', function () {
        bot.user.setActivity("Halphas/Yod (MON)", { type: "PLAYING" });
        setTimeout(() => {
            bot.user.setActivity("Halphas/Yod (MON)", { type: "PLAYING" });
	       setTimeout(() => {
                  bot.user.setActivity("「 Crew channel: 29 」", { type: "PLAYING" });
               }, 20000)
        }, 20000)
       
    });

}

function tuet(){
    
    var tue = require('node-schedule');

    var jtue = schedule.scheduleJob('0 * * * * 2', function () {
        bot.user.setActivity("Tindalos/Nitocris (TUE)", { type: "PLAYING" });
        setTimeout(() => {
            bot.user.setActivity("Tindalos/Nitocris (TUE)", { type: "PLAYING" });
	       setTimeout(() => {
                  bot.user.setActivity("「 Crew channel: 29 」", { type: "PLAYING" });
               }, 20000)
        }, 20000)
       
    });

}

function wedt(){
    
    var wed = require('node-schedule');

    var jwed = schedule.scheduleJob('0 * * * * 3', function () {
        bot.user.setActivity("Tindalos/Halphas (WED)", { type: "PLAYING" });
        setTimeout(() => {
            bot.user.setActivity("Tindalos/Halphas (WED)", { type: "PLAYING" });
	       setTimeout(() => {
                  bot.user.setActivity("「 Crew channel: 29 」", { type: "PLAYING" });
               }, 20000)
        }, 20000)
        
    });

}

function thut(){
    
    var thu = require('node-schedule');

    var jthu = schedule.scheduleJob('0 * * * * 4', function () {
        bot.user.setActivity("Halphas/Nitocris (THU)", { type: "PLAYING" });
        setTimeout(() => {
            bot.user.setActivity("Halphas/Nitocris (THU)", { type: "PLAYING" });
	       setTimeout(() => {
                  bot.user.setActivity("「 Crew channel: 29 」", { type: "PLAYING" });
               }, 20000)
        }, 20000)
        
    });

}

function frit(){
    
    var fri = require('node-schedule');

    var jfri = schedule.scheduleJob('0 * * * * 5', function () {
        bot.user.setActivity("Tindalos/Yod (FRI)", { type: "PLAYING" });
        setTimeout(() => {
            bot.user.setActivity("Tindalos/Yod (FRI)", { type: "PLAYING" });
	       setTimeout(() => {
                  bot.user.setActivity("「 Crew channel: 29 」", { type: "PLAYING" });
               }, 20000)
        }, 20000)
        
    });

}

function satt(){
    
    var sat = require('node-schedule');

    var jsat = schedule.scheduleJob('0 * * * * 6', function () {
        bot.user.setActivity("Tindalos/Halphas/Nitocris (SAT)", { type: "PLAYING" });
        setTimeout(() => {
            bot.user.setActivity("Tindalos/Halphas/Nitocris (SAT)", { type: "PLAYING" });
	       setTimeout(() => {
                  bot.user.setActivity("「 Crew channel: 29 」", { type: "PLAYING" });
               }, 20000)
        }, 20000)
        
    });

}

function sunt(){
    
    var sun = require('node-schedule');

    var jsun = schedule.scheduleJob('0 * * * * 7', function () {
        bot.user.setActivity("Tindalos/Halphas/Yod (SUN)", { type: "PLAYING" });
        setTimeout(() => {
            bot.user.setActivity("Tindalos/Halphas/Yod (SUN)", { type: "PLAYING" });
	       setTimeout(() => {
                  bot.user.setActivity("「 Crew channel: 29 」", { type: "PLAYING" });
               }, 20000)
        }, 20000)
        
    });

}
//END OF PURI

bot.on("message", async message => {
   
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

	if (message.content.startsWith("mainpurge") && message.channel.name == "lfg-log") {

        const user = bot.users.get("427786502999638016");
        const amount = 3;

            bot.channels.get("429169582301904906").fetchMessages({
                limit: amount,
            }).then((messages) => {
                if (user) {
                    const filterBy = user ? user.id : bot.user.id;
                    messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
                }
                bot.channels.get("429169582301904906").bulkDelete(messages).catch(error => console.log(error.stack));
            });
     
    }

if (message.content.startsWith("mainmsg") && message.channel.name == "lfg-log") {
	bot.channels.get("429169582301904906").send("`53` spam message(s) were successfully purged.");
    }
	
    if (message.content.startsWith("...") && message.channel.name == "lfg1-main" && message.author.id == "427786502999638016") {

    }
    
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

    var argsaycrew = message.content.slice(1).trim().split(/ +/g);
    if(message.content.startsWith("%s") && message.channel.name == "guild-lounge") {
        let resultt = argsaycrew.slice(1).join(' ');
        if (!resultt) return; 
        bot.channels.get("416201903664267264").send(resultt);
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
      bot.channels.get("425266854014222377").send("cmd n/a, ##freecode is now automated anyw thnx ~~slave~~ :^)");
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

   if (message.content.startsWith("%warn") && message.channel.name == "squires-tavern") {

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!bUser) return message.channel.send("**Can't find user!** \nTo input correctly the <@username#tag>, try to copy the user's original name along the tag number \n*Note: This command wont work on mobile* \nhttps://i.imgur.com/Vsb2c7g.png");
    let bReason = args.join(" ").slice(22);

    if (bUser.roles.has("394119776030687242") || bUser.roles.has("438570138330202112") || bUser.roles.has("437923100978577408") || bUser.roles.has("386764500788838402") || bUser.roles.has("432417814725394442")) {
        bot.channels.get("425266854014222377").send(message.author + " *Can't issue a warning to this user*, pinging..." + bot.users.get("376344592049766401") + " Reason: " + bReason + " \nWarned user: " + bUser.user);
    } else {

        if (!bUser.roles.has("438627661447823361") && !bUser.roles.has("438628872817475584")) {
            bUser.addRole('438627661447823361').catch(console.error);
            bot.channels.get("425266854014222377").send(bUser.user + " have been warned by " + message.author + ", Reason: "+ bReason);
            bUser.send(bUser.user + " A message from the Nobility Server! \n\n*You have been warned* | Reason: " + bReason + "\n\n**NOTE: THERE WILL BE ONLY 2 WARNINGS, ONCE YOU IGNORED THEM, YOU WILL BE BANNED!**");
        } else if (bUser.roles.has("438627661447823361") && !bUser.roles.has("438628872817475584")) {
            bUser.addRole('438628872817475584').catch(console.error);
            bot.channels.get("425266854014222377").send(bUser.user + " have been warned by " + message.author + ", Reason: "+ bReason);
            bUser.send(bUser.user + " A Message from the Nobility Server! \n\n**Last warning** | Reason: " + bReason+ "\n\n**NOTE: THERE WILL BE ONLY 2 WARNINGS, ONCE YOU IGNORED THEM, YOU WILL BE BANNED!**");
        } else if (bUser.roles.has("438627661447823361") && bUser.roles.has("438628872817475584")) {
            message.guild.member(bUser).ban(bReason);
            let banEmbed = new Discord.RichEmbed()
                .setColor("#ff0000")
                .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
                .addField("Banned User", `${bUser} with ID ${bUser.id}`)
                .addField("Time", message.createdAt)
                .addField("Reason", bReason);
            bot.channels.get("425266854014222377").send(banEmbed);
        }
    }
}

	if ((message.content.startsWith("%dmeifPLAY")||message.content.startsWith("%dmeifSTREAM")||message.content.startsWith("%dmeifLISTEN")||message.content.startsWith("%dmeebriting")) && message.channel.name == "squires-tavern"){ 
    message.author.send("Got it!, also please recheck the discord tag (eg.: rize#1234) you can also resend, thank you!");
    bot.users.get("376344592049766401").send(message.content+ " by: " +message.author);
}

if (message.content.startsWith("S> ") && message.channel.name == "lounge") {
       if (message.attachments.size !== 0) {
            const efsell = new Discord.RichEmbed()
                .setColor(0xFF0000)
                .setDescription("**" + message.content + "**" + "\n\nMerchant: " + message.author + " (" + message.author.tag+ ")")
                .setImage(message.attachments.first().url)
            bot.channels.get("440724107458379777").send(efsell);
        } else {
            const efsell = new Discord.RichEmbed()
            .setColor(0xFF0000)
            .setDescription("**" + message.content + "**" + "\n\nMerchant: " + message.author + " (" + message.author.tag+ ")")
        bot.channels.get("440724107458379777").send(efsell);
        }
    }
    if (message.content.startsWith("B> ") && message.channel.name == "lounge") {
        if (message.attachments.size !== 0) {
            const efbuy = new Discord.RichEmbed()
                .setColor(0x00FF00)
                .setDescription("**" + message.content + "**" + "\n\nMerchant: " + message.author + " (" + message.author.tag+ ")")
                .setImage(message.attachments.first().url)
            bot.channels.get("440724107458379777").send(efbuy);
        } else {
            const efbuy = new Discord.RichEmbed()
            .setColor(0x00FF00)
            .setDescription("**" + message.content + "**" + "\n\nMerchant: " + message.author + " (" + message.author.tag+ ")")
        bot.channels.get("440724107458379777").send(efbuy);
        }
    }
    if (message.content.startsWith("T> ") && message.channel.name == "lounge") {
       if (message.attachments.size !== 0) {
            const eftrade = new Discord.RichEmbed()
                .setColor(0x000000)
                .setDescription("**" + message.content + "**" + "\n\nMerchant: " + message.author + " (" + message.author.tag+ ")")
                .setImage(message.attachments.first().url)
            bot.channels.get("440724107458379777").send(eftrade);
        } else {
            const eftrade = new Discord.RichEmbed()
            .setColor(0x000000)
            .setDescription("**" + message.content + "**" + "\n\nMerchant: " + message.author + " (" + message.author.tag+ ")")
        bot.channels.get("440724107458379777").send(eftrade);
    	}
    }
	
});



bot.on('presenceUpdate', (oldMember, newMember) => {
    
    let guild = newMember.guild;
    let playRole = guild.roles.find("name", "ALFG-ON");
 
    if (!playRole) return;
    if (newMember.roles.has("432384823068459018") && newMember.user.presence.game && (newMember.user.presence.game.name === "Closers Dimension Conflict" || newMember.user.presence.game.name === "Closers")) {
       newMember.addRole(playRole).catch(console.error);
       //bot.channels.get("425266854014222377").send(newMember + "added " + playRole.id);
    
    } else if (!newMember.user.presence.game && newMember.roles.has(playRole.id)) {
        newMember.removeRole(playRole).catch(console.error);
    }

    if (newMember.roles.has("397285952810123274") && newMember.user.presence.game && (newMember.user.presence.game.name === "Closers Dimension Conflict" || newMember.user.presence.game.name === "Closers")) {
	if (newMember.roles.has("423698087371079683")) return;
	if (!newMember.roles.has("448835168258752515")){
	bot.channels.get("381392359507623939").send(newMember.user + " welcome back <:seha8:391896068129947650> if you're joining back on our crew, ping `@admin • NA` with your account name/ign and don't forget to re-apply ingame <:yurilike:383533891119742977>");
	newMember.addRole('423698087371079683').catch(console.error);
	}
	}

	//if ((!newMember.id== "183276178105171968") || (!newMember.id== "376344592049766401") || (!newMember.id== "145895874520678400")) return;
	//if (newMember.id== "183276178105171968" && newMember.user.presence && newMember.user.presence.game && newMember.user.presence.game.streaming)  {
        //bot.users.get("201295790650556416").send(newMember.user+" is now streaming!" + "\n"+ "**Stream link:** "+ newMember.user.presence.game.url+ "\n"+ "**Streamer's discord tag:** "+newMember.user.username+"#"+newMember.user.tag);
    	//} 
	//if (newMember.id== "145895874520678400" && newMember.user.presence && newMember.user.presence.game && newMember.user.presence.game.streaming)  {
        //bot.users.get("201295790650556416").send(newMember.user+" is now streaming!" + "\n"+ "**Stream link:** "+ newMember.user.presence.game.url+ "\n"+ "**Streamer's discord tag:** "+newMember.user.username+"#"+newMember.user.tag);
    	//} 
	//if (newMember.id== "376344592049766401" && newMember.user.presence.game){
	//bot.users.get("317279337566961665").send(newMember.user.username+" is now playing " + newMember.user.presence.game.name);	
	//} 
  });

bot.on('guildMemberRemove', member => {
    let guild = member.guild;
  
bot.channels.get("425266854014222377").send(member.user + ` 🔪`)
  });  

bot.on('guildMemberAdd', member => {
    bot.channels.get("432774887032094726").send(member.user + ` Sorry for the ping! But, if you're looking for a party, you can ping those desparate peeps here.`)
    bot.channels.get("467923880611282965").send(member.user + ` **Welcome!** <:tinausual:383533892336091136> \nPlease go to <#439353017960235018> to get started! *also, you might want to read our* <#438285913919979521> \n*Please enjoy your stay!* <:seulbinut:411458765414596608>`)
});


bot.on("messageReactionAdd", (reaction, user) => {
    
    let target1 = reaction.message.guild.member(user);
    if(reaction.message.channel.name == "welcome" && reaction.emoji.name == "seha8"){
        target1.addRole('392286019753607168').catch(console.error);
    }else if (reaction.message.channel.name == "welcome" && reaction.emoji.name == "sylvimeme") {
        target1.addRole('392286131485671425').catch(console.error);
    }else if (reaction.message.channel.name == "welcome" && reaction.emoji.name == "yuri6") {
        target1.addRole('392287538284331019').catch(console.error);
    }else if (reaction.message.channel.name == "welcome" && reaction.emoji.name == "mistel7") {
        target1.addRole('392287432206319616').catch(console.error);
    }else if (reaction.message.channel.name == "welcome" && reaction.emoji.name == "jmeme") {
        target1.addRole('392287574154280970').catch(console.error);
    }else if (reaction.message.channel.name == "welcome" && reaction.emoji.name == "natacry") {
        target1.addRole('408923291936620544').catch(console.error);
    }else if (reaction.message.channel.name == "welcome" && reaction.emoji.name == "leviainanutshell") {
        target1.addRole('392497213093445632').catch(console.error);
    }else if (reaction.message.channel.name == "welcome" && reaction.emoji.name == "tinaping") {
        target1.addRole('408923420311683072').catch(console.error);
    }else if (reaction.message.channel.name == "welcome" && reaction.emoji.name == "harpy1") {
        target1.addRole('408923379731791884').catch(console.error);
    }else if (reaction.message.channel.name == "welcome" && reaction.emoji.name == "violet") {
        target1.addRole('408923457095467008').catch(console.error);
    }else if (reaction.message.channel.name == "welcome" && reaction.emoji.name == "WolfgangConfuse") {
        target1.addRole('483572119591059467').catch(console.error);
    }else if (reaction.message.channel.name == "welcome" && reaction.emoji.name == "baithinkfuge") {
        target1.addRole('483572276554629120').catch(console.error);
    }else if (reaction.message.channel.name == "welcome" && reaction.emoji.name == "SomaSilly") {
        target1.addRole('483572227002990601').catch(console.error);
    }else if (reaction.message.channel.name == "welcome" && reaction.emoji.name == "LunaSelfie") {
        target1.addRole('483572168693907457').catch(console.error);
    }else if (reaction.message.channel.name == "crew-info" && reaction.emoji.identifier == "%E2%9C%85" && reaction.message.content.startsWith("Interested in joining our circle in KR? Kindly press the green check if so")) {
        if (!target1.roles.has("448835168258752515")){
	target1.addRole('448835168258752515').catch(console.error);
	bot.channels.get("381392359507623939").send(target1.user + " go ping `@Admin • KR` with your ign/username then dont forget to apply ingame, our circle's name is **NobilityKR** btw, cu ingame o/");
	}
    }else if (reaction.message.channel.name == "welcome" && reaction.emoji.identifier == "%E2%9C%85" && reaction.message.content == "**2.** Press check if you reached Lv80 on any of your alt(s).") {
        target1.addRole('392505427155222528').catch(console.error);
    }else if (reaction.message.channel.name == "welcome" && reaction.emoji.identifier == "1%E2%83%A3" && reaction.message.content.startsWith("**3.** **Press 1** if you are actively farming in Planar Gate.")) {
        target1.addRole('394384407940825101').catch(console.error);
    }else if (reaction.message.channel.name == "welcome" && reaction.emoji.identifier == "2%E2%83%A3" && reaction.message.content.startsWith("**3.** **Press 1** if you are actively farming in Planar Gate.")) {
        target1.addRole('410302699867734018').catch(console.error);
    }else if (reaction.message.channel.name == "welcome" && reaction.emoji.identifier == "3%E2%83%A3" && reaction.message.content.startsWith("**3.** **Press 1** if you are actively farming in Planar Gate.")) {
        target1.addRole('458475316537458710').catch(console.error);
    }else if (reaction.message.channel.name == "welcome" && reaction.emoji.identifier == "%E2%9C%85" && reaction.message.content == "**4.** Press check if you are actively farming in Dimensional Ops Center (Tiamat).") {
        //target1.addRole('410302699867734018').catch(console.error);
    }else if (reaction.message.channel.name == "welcome" && reaction.emoji.identifier == "%F0%9F%85%B0" && reaction.message.content.startsWith("**4.** Choose:")) {
	    if (!target1.roles.has("392193289723445248")){
	     //bot.channels.get("381392359507623939").send(target1.user + " Hi! Thank you for your interest in joining our crew, but sad to say we are currently full at this moment.");
	    bot.channels.get("467923880611282965").send(target1.user + " **You chose to join our crew yey!** 🎉🎉 \n~Now, try mentioning `@Admin • NA` here along with your account name <:yurilike:383533891119742977> \nAlso join the crew via crew search, **see you in game!** \nhttps://www.imgur.com/sF3C3xB.gif");
            //target1.addRole('392193289723445248').catch(console.error);
        }
    }else if (reaction.message.channel.name == "welcome" && reaction.emoji.identifier == "%F0%9F%85%B1" && reaction.message.content.startsWith("**4.** Choose:")) {
        target1.addRole('397653925131452416').catch(console.error);
    }else if (reaction.message.channel.name == "welcome" && reaction.emoji.identifier == "%F0%9F%87%A8" && reaction.message.content.startsWith("**4.** Choose:")) {
        target1.addRole('423698087371079683').catch(console.error);
    }else if (reaction.message.channel.name == "welcome" && reaction.emoji.identifier == "%F0%9F%85%B0" && reaction.message.content.startsWith("**5.** **Choose wisely here:**")) {
        target1.addRole('432384823068459018').catch(console.error);
    }else if (reaction.message.channel.name == "welcome" && reaction.emoji.identifier == "%F0%9F%85%B1" && reaction.message.content.startsWith("**5.** **Choose wisely here:**")) {
        target1.addRole('432877618954764289').catch(console.error);
      }else if (reaction.message.channel.name == "welcome" && reaction.emoji.identifier == "%E2%9C%85" && reaction.message.content.startsWith("**6.** **Merchant tag**")) {
        target1.addRole('458508768175456268').catch(console.error);
    }

});

bot.on("messageReactionRemove", (reaction, user) => {
    let target2 = reaction.message.guild.member(user);
    
    if (reaction.message.channel.name == "welcome" && reaction.emoji.identifier == "%F0%9F%85%B0" && reaction.message.content.startsWith("**5.** **Choose wisely here:**")) {
        target2.removeRole('432384823068459018').catch(console.error);
    }else if (reaction.message.channel.name == "welcome" && reaction.emoji.identifier == "%F0%9F%85%B1" && reaction.message.content.startsWith("**5.** **Choose wisely here:**")) {
        target2.removeRole('432877618954764289').catch(console.error);
    }

});



bot.on('raw', async event => {
	// `event.t` is the raw event name
	if (event.t !== 'MESSAGE_REACTION_ADD') return;

	const { d: data } = event;
	const user = bot.users.get(data.user_id);
	const channel = bot.channels.get(data.channel_id) || await user.createDM();

	// if the message is already in the cache, don't re-emit the event
	if (channel.messages.has(data.message_id)) return;

	// if you're on the master/v12 branch, use `channel.messages.fetch()`
	const message = await channel.fetchMessage(data.message_id);

	// custom emojis reactions are keyed in a `name:ID` format, while unicode emojis are keyed by names
	// if you're on the master/v12 branch, custom emojis reactions are keyed by their ID
	const emojiKey = (data.emoji.id) ? `${data.emoji.name}:${data.emoji.id}` : data.emoji.name;
	const reaction = message.reactions.get(emojiKey);

	bot.emit('messageReactionAdd', reaction, user);
});

bot.login(process.env.BOT_TOKEN);
