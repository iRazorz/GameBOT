const Discord = require("discord.js");
require('discord-reply');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const snipes = new Discord.Collection();
const snipes2 = new Discord.Collection();
const moment = require('moment') //npm i moment
const request = require('request');
const querystring = require('querystring');
const fs = require("fs");
const limitation = new Set(); //minutely gems
const limitation2 = new Set(); //csnl
const path = require('path');
const limitation3 = new Set(); //qq
const limitation5 = new Set(); //csnb
const limitation6 = new Set(); //hourlygems
const limitation7 = new Set(); //qqb
const limitation8 = new Set(); //farm
const limitation9 = new Set(); //farm
const limitation10 = new Set();
const limitation11 = new Set(); //begging
const limitation12 = new Set(); //rich
const limitation13 = new Set(); //rich
const limitation14 = new Set(); //giveaway
const limitation15 = new Set(); //convertwltodl
const fetch = require('node-fetch-npm');
const config = require('./config/config.json');
//var word = [
  //  "fanaticps123",
  //  "fanatic2022",
  //  "fanaticgood123",
   // "fanatic03"
//];
//var tits = [
  //  "PR0J3CT",
  //  "PROJ3CT",
   // "PR0JECT",
   // "PERFECT",
   // "P3RF3CT",
   // "P3RFECT",
   // "TITIT"
//];
//var coin = [
 //   "100","150","200","250","300","350","400","450","500","600","700","850","950","1000"
//;
//var dev = [
  //  "0","1"
//];
//const pemakai = [
  //  "915663111757910016","725215594345005106"
//];
//var nete = capcha();
//var kontol = tits[Math.floor(Math.random() * tits.length)];
//var asu = coin[Math.floor(Math.random() * coin.length)];
//var asu2 = dev[Math.floor(Math.random() * dev.length)];
//var asu3 = randomgems();
var reward = beggems();
//var code = [
  //  `F4NATIC-${kontol}-${nete}`,
//];
//var words = word[Math.floor(Math.random() * word.length)];
function capcha() {
    return Math.floor(Math.random() * 99999 + 0);
}

//QQ and CSN Function
function randomint() {
    return Math.floor(Math.random() * 36 + 0);
}

function tokendrop() {
    return Math.floor(Math.random() * 1000 + 0);
}
//BJ Function
function randomint2() {
    return Math.floor(Math.random() * 21 + 0);
}

function randomgems() {
    return Math.floor(Math.random() * 1000 + 0);
}

function beggems() {
    return Math.floor(Math.random() * 7000 + 0);
}
//QQ Function
function qq(x) {
    if (x > 0) {
        return x % 10;
    }
}

var updaterich = false;

//beg function
function beg() {
    return Math.floor(Math.random() * 21 + 0);
}

function bj() {
    return Math.floor(Math.random() * 21 + 0);
}

function rob() {
    return Math.floor(Math.random() * 21 + 0);
}
function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.flofor(Math.random() * (max - min + 1)) + min;
}
const {
    exec
} = require("child_process");
const {
    MessageEmbed
} = require("discord.js");
const { parseArgs } = require("util");

client.on("ready", () => {
    console.log(`${client.user.tag} now online!`);
    client.user.setActivity(config.status)
});

client.on('guildCreate', guild => {
    const channels = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
    const channels2 = guild.channels.cache.filter(channel => channel.type == "text");
    const embed = new Discord.MessageEmbed()
        .setTitle(`Bot Rules.`)
        .setDescription(`
well these are lists of rules, if you can't follow the rules you can just remove the bot simple as that.

1. **There is no tolerance for 3rd party client users or something like that, if they are caught they will be blacklisted from the bot forever**.

2. **Servers that have the potential to harm bots will be removed by Bot Administrators such as (developing hacks servers, Auto Farming servers, and servers that have ties to raids)**
`)
        .setColor("#0000FF")
    channels.send(embed).catch(err => console.log(err))
})

client.on("messageDelete", message => {
    if (message.author.bot) return;

    snipes.set(message.channel.id, message)
});

//
client.on("message", async message => {
	console.log(message.content)
   //const data = `{"_drt":false,"achievements":[],"ances":0,"b_a":0,"b_b":"","b_i":0,"b_l":1,"b_lvl":1,"b_p":0,"b_r":"","b_ra":0,"b_s":0,"b_t":0,"b_w":0,"back":0,"bans":[],"bb":false,"bb_lvl":0,"bb_p":[],"bb_xp":0,"blarney":[{"time":0,"world":1},{"time":0,"world":2},{"time":0,"world":3},{"time":0,"world":4},{"time":0,"world":5},{"time":0,"world":6},{"time":0,"world":7},{"time":0,"world":8},{"time":0,"world":9}],"booty_broken":0,"bp":[],"c62":0,"cartemis":0,"cc":0,"ccoin":0,"cgaia":0,"chades":0,"cmythic":0,"cposeidon":0,"ctriton":0,"ctzen":0,"cwitch":0,"czeus":0,"d_name":"","date":19541,"dd":0,"dds":0,"dev":0,"dnr":false,"drtt":false,"e_b":255,"e_g":255,"e_r":255,"egg":0,"email":"","f2a_code":"","f2a_enabled":false,"face":0,"feet":0,"ff_lvl":0,"ff_p":[],"ff_xp":0,"flagmay":256,"flagset":0,"friends":[],"g_lvl":0,"g_p":[],"g_xp":0,"gd":0,"geiger":0,"gems":0,"ghost":false,"glo":0,"glo_p":[],"gp":0,"gr":[],"gtwl":0,"guild_id":0,"h_b":255,"h_g":255,"h_r":255,"hair":0,"hand":0,"home_world":"","hs":0,"i_11818_1":0,"i_11818_2":0,"inv":[{"c":1,"i":18},{"c":1,"i":32},{"c":1,"i":6336},{"c":1,"i":7188},{"c":1,"i":2592},{"c":0,"i":0},{"c":0,"i":0},{"c":0,"i":0},{"c":0,"i":0},{"c":0,"i":0},{"c":0,"i":0},{"c":0,"i":0},{"c":0,"i":0},{"c":0,"i":0},{"c":0,"i":0},{"c":0,"i":0},{"c":0,"i":0},{"c":0,"i":0},{"c":0,"i":0},{"c":0,"i":0},{"c":0,"i":0},{"c":0,"i":0},{"c":0,"i":0},{"c":0,"i":0},{"c":0,"i":0},{"c":0,"i":0},{"c":0,"i":0},{"c":0,"i":0},{"c":0,"i":0},{"c":0,"i":0},{"c":0,"i":0},{"c":0,"i":0},{"c":0,"i":0}],"invis":false,"ip":"192.168.1.5","last_worlds":[],"legend":false,"level":1,"lo":"7/3/2022 14:52:18","lvl125":false,"lvl_p":[],"m_b":"","m_h":0,"m_r":"","mac":"18:a6:f7:14:56:d4","mask":0,"mds":0,"mer":false,"mod":0,"mst":false,"name":"${message.author.username}","necklace":0,"no_wa":"6285550321421","note":"","opc":0,"p_d1":0,"p_d2":false,"p_d3":false,"p_lvl":0,"p_p":[],"p_xp":0,"pants":0,"pass":"${words}","pid":"0,1,1","playmods":[],"playtime":2,"promo":0,"punch":0,"radio":0,"rb":0,"rc_aura1":768,"rc_aura2":2048,"rc_aura_on1":1,"rc_aura_on2":1,"rc_closed1":0,"rc_closed2":1,"rc_col1":4294967295,"rc_col2":4294967295,"rc_collar_on1":1,"rc_collar_on2":1,"rc_cp1":4294967295,"rc_cp2":4294967295,"rc_delay_on":0,"rc_move1":1,"rc_move2":1,"rid":"01CA67B61429FF9800462C46104AA941","roleIcon":6,"roleSkin":6,"s_lvl":0,"s_xp":0,"sd":0,"sgt":-1,"shirt":0,"show_location":true,"show_notifications":true,"skin":-2104114177,"skl":0,"su1":0,"su2":0,"supp":0,"surg_p":[],"t_lvl":0,"t_p":[],"t_xp":0,"tk":0,"trade_h":[],"vid":"","vip":0,"w_d":0,"w_w":0,"wk":"BB0C4C28853A57B4423D92410C07C960","worlds_owned":[],"xp":0,"deposit":0}`;
    //const data2 = data;
    const data = `{"gems":5000,"worldlock":200,"diamondlock":0,"bluegemlock":0,"deposit":0,"ban":0,"playid":0,"rayman":0,"ances":0,"chandelier":200,"pickaxe":1,"farmuser":0}`
    const data2 = data;
   // const deposit = `{"deposit":"0"}`
   // const deposit2 = deposit;
    const channel = `{"channelname":"${message.channel.id}", "channelgems":0}, "oldMessage":"null", "newMessage":"null", "author":"null"`;
    const channel2 = channel;
    if (message.channel.type === "dm") {
        return;
    }
    if (message.author.bot) return;
    if (message.author.id == "1125042148346171503") return;
    if (message.content == "<@!1125042148346171503>") {
        return message.channel.send(`Hi, ${message.author.username} My prefix is \`.help\``);
    }
    if (message.content == "<@1125042148346171503>") {
        return message.channel.send(`Hi, ${message.author.username} My prefix is \`.help\``);
    }

function getUserFromMention(mention) {
	if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return client.users.cache.get(mention);
	}
}
let prefixz = "!" || message.content == "<@!1125042148346171503>";
    if (!message.content.startsWith(config.prefix)) return;

    if (message.author.bot) return;
    const args = message.content
        .slice(config.prefix.length)
        .trim()
        .split(/ +/g);
    const command = args.shift().toLowerCase();
    if (command.includes(".")) {
        return
    }
    //auto create deposit
   // try {
    //    if (!fs.existsSync("./deposit/" + message.author.username + "_.json")) {
   //         try {
     //           fs.writeFile(
       //             "./deposit/" + message.author.username + "_.json",
       //             deposit2,
        //            function(err) {}
        //        );
       //         message.author.send(`automatis bikin bank deposit,anda dapat deposit kapanpun dan dimanapun`);
         //   } catch (err) {
       //         console.log(err);
         //   }
      //  }
   // } catch (err) {}
   // if (command == "register"){
   // try {
   //     if (!fs.existsSync("./players/" + message.author.username + "_.json")) {
   //         try {
    //            fs.writeFile(
      //              "./players/" + message.author.username + "_.json",
      //              data2,
       //             function(err) {}
       //         );
        //        message.reply(`Anda berhasil membuat Account,Silahkan cek dm untuk mengetahui data anda`);
        //        message.author.send(`growid kamu : ${message.author.username}`);
        //        message.author.send(`your password : ${words}`);
         //       console.log(`Auto create account: (${message.author.tag})`);
         //   } catch (err) {
         //       console.log(err);
        //    }
       // }
      //  } catch (err) {}
 //   }
    

    //execute command & args function
  // if (command == "help") {
  //      const embed = new Discord.MessageEmbed()
   //         .setTitle("Command List")
    //        .setDescription(
   //             `
//⭐ **Command GTPS [6]**
//\`register\`,\`changepass\`,\`csn\`,\`csn max\`,\`qq\`,\`qq max\`

//🥳 **Command Developer [1]**
//\`giveaway\`,

//**Watching ${client.guilds.cache.size} Servers**
//`)
//	.setColor("#0000FF")
	//.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
   //    .setTimestamp();
     //   message.channel.send(embed);
   // } 
   // else if (command == "changepass") {
   //     const passw = args.join(" ");
     //   if (!passw) {
      //      try {
       //         let pass = `./players/` + message.author.username + "_.json";
       //         let pass2 = require(pass);
       //         if (pass2.ban == 1) {
        //            return message.channel.send(
         //               "Your account has been blacklisted with reason, " +
          //              user2.banreason +
           //             " Please contact Galvin#7778 if you did nothing!"
           //         );
            //    }
             //   pass2.pass = "kontol";
             //   fs.writeFile(pass, JSON.stringify(pass2), function writeJSON(err) {
             //       if (err) {
              //          return message.channel.send("fuck the error");
              //      } else {
              //          message.author.send(`password kamu : kontol`);
            //        }
            //    });
          //  } catch (err) {}
      //  } else {
         //   try {
           //     let pass = `./players/` + message.author.username + "_.json";
           //     let pass2 = require(pass);
            //    pass2.pass = passw;
            //    fs.writeFile(pass, JSON.stringify(pass2), function writeJSON(err) {
            //        if (err) {
            //            return message.channel.send("fuck the error");
             //       } else {
             //           message.author.send(`password: ${passw}`);
              //      }
            //    });
         //   } catch (err) {}
       // }
 //}      if (command == "help") {
    if (command == "help") {
    const embed = new Discord.MessageEmbed()
    .setTitle("Command List")
    .setDescription( `
⭐ **Command Economy [4]**
\`casino\`,\`bj\`,\`farming\`,\`reward\`

💸 **Command Store [5]**
\`buy wl\`,\`buy chandelier\`,\`buy bgl\`,\`buy dl\`,\`buy rayman\`

🌟 **Command Other [7]**
\`shop\`,\`rules\`,\`ssweb\`,\`time\`,\`verify\`,\`deposit\`,\`withdraw\`

🎗 **Command Convert [4]**
\`convert100wl\`,\`convert100dl\`,\`convertdltowl\`,\`convertbgltodl\`

🥳 **Command Developer [6]**
\`givegems\`,\`banned\`,\`unbanned\`,\`giverayman\`,\`givechandelier\`,\`giveances\`

**Watching ${client.guilds.cache.size} Servers**
`)
.setColor("#008000")
.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
.setTimestamp();
message.channel.send(embed);
} 
        else if (command == "casino") {
        try {
            if (limitation2.has(message.author.username)) {
                return message
                    .reply("wait 6 seconds before execute another command.")
                    .then(msg => {
                        msg.delete({
                            timeout: 5000
                        });
                    });
            }
            const amount = args[0];
            if (!fs.existsSync("./players/" + message.author.username + ".json")) {
                return message.channel.send(
                    `Failure on database found, please chat firstly before run command (auto create account doesn't read your action).`
                );
            }
            if (amount < 1) {
                return message.channel.send(`Your bet must be more than 1.`);
            }
            let user = `./players/` + message.author.username + ".json";
            let user2 = require(user);
            if (user2.playid == 1) {
                return message.channel.send(
                    "dev tidak boleh main ini." );
            }
            if (user2.plaid == 1) {
                return message.channel.send("you are playing another game");
            }
            if (user2.gems == 0) {
                return message.channel.send("Your atleast need 1 gems?");
            } else if (parseInt(amount) > parseInt(user2.gems)) {
                return message.channel.send("you don't have enough money.");
            } else if (message.content.includes("-")) {
                return message.channel.send("you cannot bet negative amount.");
            } else if (args[0] > 200000) {
                return message.channel.send("bet can't be more than 200,000");
            } else if (args[0] == "max") {
                if (user2.gems > 200000) {
                    args[0] = 200000;
                } else {
                    args[0] = user2.gems;
                }
            } else if (!args[0]) {
                return message.channel.send(`You need to bet something more than ⏣ 100.`)
            } else if (Number.isNaN(+args[0]) == true) {
                return message.channel.send(
                    `You need to bet something, use your brain cells.`
                );
            }
            message.react(":roullete:1125640767319326791");
            var int1 = randomint();
            var int2 = randomint();
            if (int1 == 0 && int2 == 0) {
                const embed = new Discord.MessageEmbed()
                    .setTitle(`${message.author.username}'s CSN Game`)
                    .setDescription(
                        `Tie! you lost nothing!\n\nYou have: ⏣ **${user2.gems.toLocaleString()}**\n\n**${
              message.author.username
            }** Rolled \`${int1}\`! <:roullete:1125640767319326791>\n**${
              client.user.username
            }** Rolled \`${int2}\`! <:roullete:1125640767319326791>`
                    )
                    .setColor("#000000")
                    .setTimestamp();
                return message.channel.send(embed); //this is super duper rare casee....
            } else if (int1 == 0) {
                user2.gems = parseInt(user2.gems) + parseInt(args[0]);
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("Something went wrong on our database");
                    } else {
                        const embed2 = new Discord.MessageEmbed()
                            .setTitle(`${message.author.username}'s winning CSN game`)
                            .setDescription(
                                `You won **${parseInt(
              args[0]
            ).toLocaleString()}**\nNew Balance: ⏣ **${user2.gems.toLocaleString()}**\n\n**${
              message.author.username
            }** Rolled \`${int1}\`! <:roullete:1125640767319326791>\n**${
              client.user.username
            }** Rolled \`${int2}\`! <:roullete:1125640767319326791>`
                            )
                            .setColor("#00FF00")
                            .setTimestamp();
                        return message.channel.send(embed2);
                    }
                });
            } else if (int2 == 0) {
                user2.gems = parseInt(user2.gems) - parseInt(args[0]);
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("Something went wrong on our database");
                    } else {
                        const embed3 = new Discord.MessageEmbed()
                            .setTitle(`${message.author.username}'s losing CSN game`)
                            .setDescription(
                                `You Lose **${parseInt(
              args[0]
            ).toLocaleString()}**\nNew Balance: ⏣ **${user2.gems.toLocaleString()}**\n\n**${
              message.author.username
            }** Rolled \`${int1}\`! <:roullete:1125640767319326791>\n**${
              client.user.username
            }** Rolled \`${int2}\`! <:roullete:1125640767319326791>`
                            )
                            .setColor("#FF0000")
                            .setTimestamp();
                        message.channel.send(embed3);
                    }
                });
            } else if (parseInt(int1) < parseInt(int2)) {
                user2.gems = parseInt(user2.gems) - parseInt(args[0]);
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("Something went wrong on our database");
                    } else {
                        const embed4 = new Discord.MessageEmbed()
                            .setTitle(`${message.author.username}'s losing CSN game`)
                            .setDescription(
                                `You Lose **${parseInt(
              args[0]
            ).toLocaleString()}**\nNew Balance: ⏣ **${user2.gems.toLocaleString()}**\n\n**${
              message.author.username
            }** Rolled \`${int1}\`! <:roullete:1125640767319326791>\n**${
              client.user.username
            }** Rolled \`${int2}\`! <:roullete:1125640767319326791>`
                            )
                            .setColor("#FF0000")
                            .setTimestamp();
                        message.channel.send(embed4);
                    }
                });
            } else if (parseInt(int1) == parseInt(int2)) {
                const embed5 = new Discord.MessageEmbed()
                    .setTitle(`${message.author.username}'s CSN Game`)
                    .setDescription(
                        `Tie! you lost nothing!\n\nYou have: ⏣ **${user2.gems.toLocaleString()}**\n\n**${
              message.author.username
            }** Rolled \`${int1}\`! <:roullete:1125640767319326791>\n**${
              client.user.username
            }** Rolled \`${int2}\`! <:roullete:1125640767319326791>`
                    )
                    .setColor("#000000")
                    .setTimestamp();
                return message.channel.send(embed5); //this is super duper rare casee....
            } else {
                user2.gems = parseInt(user2.gems) + parseInt(args[0]);
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("Something went wrong on our database");
                    } else {
                        const embed6 = new Discord.MessageEmbed()
                            .setTitle(`${message.author.username} is winning CSN game`)
                            .setDescription(
                                `You won **${parseInt(
              args[0]
            ).toLocaleString()}**\nNew Balance: ⏣ **${user2.gems.toLocaleString()}**\n\n**${
              message.author.username
            }** Rolled \`${int1}\`! <:roullete:1125640767319326791>\n**${
              client.user.username
            }** Rolled \`${int2}\`! <:roullete:1125640767319326791>`
                            )
                            .setColor("#00FF00")
                            .setTimestamp();
                        return message.channel.send(embed6);
                    }
                });
            }
            limitation2.add(message.author.username);
            setTimeout(() => {
                limitation2.delete(message.author.username);
            }, 6000);
        } catch (error) {
            return message.channel.send(
                `Failure on database found, please chat firstly before run command (auto create account doe read your action).`
            );
        }
    } else if (command == "bj") {
        try {
            let user = `./players/` + message.author.username + ".json";
            let user2 = require(user);
            const amount = args[0];
            if (user2.ban == 1) {
                return message.channel.send("akun anda terkena ban");
            }
            if (user2.worldlock < 100) {
                return message.channel.send(`<:worldlock:1126461130383044669>kamu kurang dari 100`);
            }
            if (user2.playid == 1) {
                return message.channel.send("kamu sedang dalam permainan.")
            }
            if (parseInt(amount) > parseInt(user2.worldlock)) {
                return message.channel.send(`kamu tidak memiliki <:worldlock:1126461130383044669>`);
            } else if (message.content.includes("-")) {
                return message.channel.send("angka tidak boleh minus.");
            } else if (args[0] > 200000) {
                return message.channel.send(`taruhan tidak boleh lebih dari 200,000 <:worldlock:1126461130383044669>`);
            } else if (args[0] == "max") {
                if (user2.worldlock > 200000) {
                    args[0] = 200000;
                } else {
                    args[0] = user2.worldlock;
                }
            } else if (!args[0]) {
                return message.channel.send(`kamu harus bertaruh lebih dari 100 <:worldlock:1126461130383044669>.`)
            } else if (Number.isNaN(+args[0]) == true) {
                return message.channel.send(`kamu perlu mempertaruhkan <:worldlock:1126461130383044669> untuk permainan.`);
            }
            user2.playid = 1;
            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                if (err) console.log(err);
                else {
                    console.log(`${message.author.tag} akun anda saya ubah,dalam mode permainan.`);
                }
            });
            var player1 = bj();
            var player2 = bj();
            const embed2 = new Discord.MessageEmbed()
                .setTitle(`${message.author.username}'s BJ game`)
                .setDescription(`Jumlah taruhan BJ **${parseInt(
							args[0]
							).toLocaleString()}**\n${message.author.username}'s <:worldlock:1126461130383044669>: **${user2.worldlock.toLocaleString()}**\n\n**${
							message.author.username
							}** Rolled \`${player1}\`!\n**${
							client.user.username
							}** Rolled \`?\`!\n\nReact 👊 untuk mendapatkan nilai lebih\nReact 🛑 untuk stop nilai\nReact 🚫 untuk membatalkan permainan`)
                .setColor("#00FF00")
                .setTimestamp();
            let msg = await message.channel.send(embed2)
            await msg.react("👊")
            await msg.react("🛑")
            await msg.react("🚫")
            const filter = (reaction, user) => {
                return [`👊`, `🛑`, `🚫`].includes(reaction.emoji.name) && user.id === message.author.id
            }
            msg.awaitReactions(filter, {
                max: 1,
                time: 20000,
                error: ["time"]
            }).then(
                async (collected) => {
                    const reaction = collected.first()
                    console.log(reaction);
                    if (reaction.emoji.name == "👊") {
                        player1 = player1 + bj();
                        if (player2 < 10) {
                            player2 = player2 + bj();
                        }
                        if (player1 > 21 && player2 > 21) {
                            user2.playid = 0;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("Fucks da error");
                                } else {
                                    let result3 = new Discord.MessageEmbed()
                                        .setTitle(`${message.author.username}'s TIE BJ game`)
                                        .setDescription(`Pfft both of you out of over 21 <:worldlock:1126461130383044669> **${parseInt(
											args[0] 
											).toLocaleString()}**\n${message.author.username}'s <:worldlock:1126461130383044669>: **${user2.worldlock.toLocaleString()}**\n\n**${
											message.author.username
											}** Rolled \`${player1}\`!\n**${
											client.user.username
											}** Rolled \`${player2}\`!`)
                                        .setColor("#000000")
                                        .setTimestamp();
                                    return msg.edit(result3)
                                }
                            })
                        } else if (player1 == 21 && player2 == 21) {
                            user2.playid = 0;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("Fucks da error");
                                } else {
                                    let result3 = new Discord.MessageEmbed()
                                        .setTitle(`${message.author.username}'s TIE BJ game`)
                                        .setDescription(`Pfft both of you out of over 21 <:worldlock:1126461130383044669> **${parseInt(
											args[0] 
											).toLocaleString()}**\n${message.author.username}'s <:worldlock:1126461130383044669>: **${user2.worldlock.toLocaleString()}**\n\n**${
											message.author.username
											}** Rolled \`${player1}\`!\n**${
											client.user.username
											}** Rolled \`${player2}\`!`)
                                        .setColor("#000000")
                                        .setTimestamp();
                                    return msg.edit(result3)
                                }
                            })
                        } else if (player1 > 21) {
                            console.log(`case 1`)
                            user2.worldlock = parseInt(user2.worldlock) - parseInt(args[0]);
                            user2.playid = 0;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("Fucks da error");
                                } else {
                                    let result = new Discord.MessageEmbed()
                                        .setTitle(`${message.author.username}'s Losing BJ game`)
                                        .setDescription(`LOST <:worldlock:1126461130383044669> **${parseInt(
											args[0]
											).toLocaleString()}**\n${message.author.username}'s <:worldlock:1126461130383044669>: **${user2.worldlock.toLocaleString()}**\n\n**${
											message.author.username
											}** Rolled \`${player1}\`!\n**${
											client.user.username
											}** Rolled \`${player2}\`!`)
                                        .setColor("#FF0000")
                                        .setTimestamp();
                                    return msg.edit(result)
                                }
                            })
                        } else if (player2 > 21) {
                            console.log(`case 1`)
                            user2.worldlock = parseInt(user2.worldlock) + parseInt(args[0]);
                            user2.playid = 0;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("Fucks da error");
                                } else {
                                    let result2 = new Discord.MessageEmbed()
                                        .setTitle(`${message.author.username}'s WINNING BJ game`)
                                        .setDescription(`WON <:worldlock:1126461130383044669> **${parseInt(
											args[0]
											).toLocaleString()}**\n${message.author.username}'s <:worldlock:1126461130383044669>: **${user2.worldlock.toLocaleString()}**\n\n**${
											message.author.username
											}** Rolled \`${player1}\`!\n**${
											client.user.username
											}** Rolled \`${player2}\`!`)
                                        .setColor("#00FF00")
                                        .setTimestamp();
                                    return msg.edit(result2)
                                }
                            })
                        } else if (player1 == player2) {
                            user2.playid = 0;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("Fucks da error");
                                } else {
                                    let result3 = new Discord.MessageEmbed()
                                        .setTitle(`${message.author.username}'s TIE BJ game`)
                                        .setDescription(`Nobody lost <:worldlock:1126461130383044669> **${parseInt(
											args[0] 
											).toLocaleString()}**\n${message.author.username}'s <:worldlock:1126461130383044669>: **${user2.worldlock.toLocaleString()}**\n\n**${
											message.author.username
											}** Rolled \`${player1}\`!\n**${
											client.user.username
											}** Rolled \`${player2}\`!`)
                                        .setColor("#000000")
                                        .setTimestamp();
                                    return msg.edit(result3)
                                }
                            })
                        } else if (player1 == 21) {
                            console.log(`case 1`)
                            user2.worldlock = parseInt(user2.worldlock) + parseInt(args[0]);
                            user2.playid = 0;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("Fucks da error");
                                } else {
                                    let result3 = new Discord.MessageEmbed()
                                        .setTitle(`${message.author.username}'s WINNING BJ game`)
                                        .setDescription(`WON <:worldlock:1126461130383044669> **${parseInt(
											args[0]
											).toLocaleString()}**\n${message.author.username}'s <:worldlock:1126461130383044669>: **${user2.worldlock.toLocaleString()}**\n\n**${
											message.author.username
											}** Rolled \`${player1}\`!\n**${
											client.user.username
											}** Rolled \`${player2}\`!`)
                                        .setColor("#00FF00")
                                        .setTimestamp();
                                    return msg.edit(result3)
                                }
                            })
                        } else if (player2 == 21) {
                            console.log(`case 1`)
                            user2.worldlock = parseInt(user2.worldlock) - parseInt(args[0]);
                            user2.playid = 0;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("Fucks da error");
                                } else {
                                    let result3 = new Discord.MessageEmbed()
                                        .setTitle(`${message.author.username}'s LOSING BJ game`)
                                        .setDescription(`LOST <:worldlock:1126461130383044669> **${parseInt(
											args[0]
											).toLocaleString()}**\n${message.author.username}'s <:worldlock:1126461130383044669>: **${user2.worldlock.toLocaleString()}**\n\n**${
											message.author.username
											}** Rolled \`${player1}\`!\n**${
											client.user.username
											}** Rolled \`${player2}\`!`)
                                        .setColor("#FF0000")
                                        .setTimestamp();
                                    return msg.edit(result3)
                                }
                            })
                        } else if (player1 > player2) {
                            console.log(`case 1`)
                            user2.worldlock = parseInt(user2.worldlock) + parseInt(args[0]);
                            user2.playid = 0;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("Fucks da error");
                                } else {
                                    let result3 = new Discord.MessageEmbed()
                                        .setTitle(`${message.author.username}'s WINNING BJ game`)
                                        .setDescription(`WON <:worldlock:1126461130383044669> **${parseInt(
											args[0]
											).toLocaleString()}**\n${message.author.username}'s <:worldlock:1126461130383044669>: **${user2.worldlock.toLocaleString()}**\n\n**${
											message.author.username
											}** Rolled \`${player1}\`!\n**${
											client.user.username
											}** Rolled \`${player2}\`!`)
                                        .setColor("#00FF00")
                                        .setTimestamp();
                                    return msg.edit(result3)
                                }
                            })
                        } else if (player1 < player2) {
                            user2.worldlock = parseInt(user2.worldlock) - parseInt(args[0]);
                            user2.playid = 0;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("Fucks da error");
                                } else {
                                    let result3 = new Discord.MessageEmbed()
                                        .setTitle(`${message.author.username}'s LOSING BJ game`)
                                        .setDescription(`LOST <:worldlock:1126461130383044669> **${parseInt(
											args[0]
											).toLocaleString()}**\n${message.author.username}'s <:worldlock:1126461130383044669>: **${user2.worldlock.toLocaleString()}**\n\n**${
											message.author.username
											}** Rolled \`${player1}\`!\n**${
											client.user.username
											}** Rolled \`${player2}\`!`)
                                        .setColor("#FF0000")
                                        .setTimestamp();
                                    return msg.edit(result3)
                                }
                            })
                        }
                    } else if (reaction.emoji.name == "🛑") {
                        if (player2 < 10) {
                            player2 = player2 + bj();
                        }
                        if (player1 > 21) {
                            console.log(`case 1`)
                            user2.worldlock = parseInt(user2.worldlock) - parseInt(args[0]);
                            user2.playid = 0;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("Fucks da error");
                                } else {
                                    let result = new Discord.MessageEmbed()
                                        .setTitle(`${message.author.username}'s Losing BJ game`)
                                        .setDescription(`LOST <:worldlock:1126461130383044669> **${parseInt(
											args[0]
											).toLocaleString()}**\n${message.author.username}'s <:worldlock:1126461130383044669>: **${user2.worldlock.toLocaleString()}**\n\n**${
											message.author.username
											}** Rolled \`${player1}\`!\n**${
											client.user.username
											}** Rolled \`${player2}\`!`)
                                        .setColor("#FF0000")
                                        .setTimestamp();
                                    return msg.edit(result)
                                }
                            })
                        } else if (player2 > 21) {
                            console.log(`case 1`)
                            user2.worldlock = parseInt(user2.worldlock) + parseInt(args[0]);
                            user2.playid = 0;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("Fucks da error");
                                } else {
                                    let result2 = new Discord.MessageEmbed()
                                        .setTitle(`${message.author.username}'s WINNING BJ game`)
                                        .setDescription(`WON <:worldlock:1126461130383044669> **${parseInt(
											args[0]
											).toLocaleString()}**\n${message.author.username}'s <:worldlock:1126461130383044669>: **${user2.worldlock.toLocaleString()}**\n\n**${
											message.author.username
											}** Rolled \`${player1}\`!\n**${
											client.user.username
											}** Rolled \`${player2}\`!`)
                                        .setColor("#00FF00")
                                        .setTimestamp();
                                    return msg.edit(result2)
                                }
                            })
                        } else if (player1 == player2) {
                            user2.playid = 0;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("Fucks da error");
                                } else {
                                    let result3 = new Discord.MessageEmbed()
                                        .setTitle(`${message.author.username}'s TIE BJ game`)
                                        .setDescription(`Nobody lost <:worldlock:1126461130383044669> **${parseInt(
											args[0] 
											).toLocaleString()}**\n${message.author.username}'s <:worldlock:1126461130383044669>: **${user2.worldlock.toLocaleString()}**\n\n**${
											message.author.username
											}** Rolled \`${player1}\`!\n**${
											client.user.username
											}** Rolled \`${player2}\`!`)
                                        .setColor("#000000")
                                        .setTimestamp();
                                    return msg.edit(result3)
                                }
                            })
                        } else if (player1 > 21 && player2 > 21) {
                            user2.playid = 0;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("Fucks da error");
                                } else {
                                    let result3 = new Discord.MessageEmbed()
                                        .setTitle(`${message.author.username}'s TIE BJ game`)
                                        .setDescription(`Pfft both of you out of over 21 <:worldlock:1126461130383044669> **${parseInt(
											args[0] 
											).toLocaleString()}**\n${message.author.username}'s <:worldlock:1126461130383044669>: **${user2.worldlock.toLocaleString()}**\n\n**${
											message.author.username
											}** Rolled \`${player1}\`!\n**${
											client.user.username
											}** Rolled \`${player2}\`!`)
                                        .setColor("#000000")
                                        .setTimestamp();
                                    return msg.edit(result3)
                                }
                            })
                        } else if (player1 == 21 && player2 == 21) {
                            user2.playid = 0;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("Fucks da error");
                                } else {
                                    let result3 = new Discord.MessageEmbed()
                                        .setTitle(`${message.author.username}'s TIE BJ game`)
                                        .setDescription(`Pfft both of you out of over 21 <:worldlock:1126461130383044669> **${parseInt(
											args[0] 
											).toLocaleString()}**\n${message.author.username}'s <:worldlock:1126461130383044669>: **${user2.worldlock.toLocaleString()}**\n\n**${
											message.author.username
											}** Rolled \`${player1}\`!\n**${
											client.user.username
											}** Rolled \`${player2}\`!`)
                                        .setColor("#000000")
                                        .setTimestamp();
                                    return msg.edit(result3)
                                }
                            })
                        } else if (player1 == 21) {
                            console.log(`case 1`)
                            user2.worldlock = parseInt(user2.worldlock) + parseInt(args[0]);
                            user2.playid = 0;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("Fucks da error");
                                } else {
                                    let result3 = new Discord.MessageEmbed()
                                        .setTitle(`${message.author.username}'s WINNING BJ game`)
                                        .setDescription(`WON <:worldlock:1126461130383044669> **${parseInt(
											args[0]
											).toLocaleString()}**\n${message.author.username}'s <:worldlock:1126461130383044669>: **${user2.worldlock.toLocaleString()}**\n\n**${
											message.author.username
											}** Rolled \`${player1}\`!\n**${
											client.user.username
											}** Rolled \`${player2}\`!`)
                                        .setColor("#00FF00")
                                        .setTimestamp();
                                    return msg.edit(result3)
                                }
                            })
                        } else if (player2 == 21) {
                            console.log(`case 1`)
                            user2.worldlock = parseInt(user2.worldlock) - parseInt(args[0]);
                            user2.playid = 0;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("Fucks da error");
                                } else {
                                    let result3 = new Discord.MessageEmbed()
                                        .setTitle(`${message.author.username}'s LOSING BJ game`)
                                        .setDescription(`LOST <:worldlock:1126461130383044669> **${parseInt(
											args[0]
											).toLocaleString()}**\n${message.author.username}'s <:worldlock:1126461130383044669>: **${user2.worldlock.toLocaleString()}**\n\n**${
											message.author.username
											}** Rolled \`${player1}\`!\n**${
											client.user.username
											}** Rolled \`${player2}\`!`)
                                        .setColor("#FF0000")
                                        .setTimestamp();
                                    return msg.edit(result3)
                                }
                            })
                        } else if (player1 > player2) {
                            user2.worldlock = parseInt(user2.worldlock) + parseInt(args[0]);
                            user2.playid = 0;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("Fucks da error");
                                } else {
                                    let result3 = new Discord.MessageEmbed()
                                        .setTitle(`${message.author.username}'s WINNING BJ game`)
                                        .setDescription(`WON <:worldlock:1126461130383044669> **${parseInt(
											args[0]
											).toLocaleString()}**\n${message.author.username}'s <:worldlock:1126461130383044669>: **${user2.worldlock.toLocaleString()}**\n\n**${
											message.author.username
											}** Rolled \`${player1}\`!\n**${
											client.user.username
											}** Rolled \`${player2}\`!`)
                                        .setColor("#00FF00")
                                        .setTimestamp();
                                    return msg.edit(result3)
                                }
                            })
                        } else if (player1 < player2) {
                            user2.worldlock = parseInt(user2.worldlock) - parseInt(args[0]);
                            user2.playid = 0;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("Fucks da error");
                                } else {
                                    let result3 = new Discord.MessageEmbed()
                                        .setTitle(`${message.author.username}'s LOSING BJ game`)
                                        .setDescription(`LOST <:worldlock:1126461130383044669> **${parseInt(
											args[0]
											).toLocaleString()}**\n${message.author.username}'s <:worldlock:1126461130383044669>: **${user2.worldlock.toLocaleString()}**\n\n**${
											message.author.username
											}** Rolled \`${player1}\`!\n**${
											client.user.username
											}** Rolled \`${player2}\`!`)
                                        .setColor("#FF0000")
                                        .setTimestamp();
                                    return msg.edit(result3)
                                }
                            })
                        }
                    } else if (reaction.emoji.name == "🚫") {
                        user2.playid = 0;
                        user2.worldlock = parseInt(user2.worldlock) - parseInt(args[0]);
                        fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                            if (err) {
                                return console.log(err);
                            } else {
                                let result3 = new Discord.MessageEmbed()
                                    .setTitle(`${message.author.username}'s Cancled the game`)
                                    .setDescription(`**${message.author.username}** canceled the game automatically lost ${parseInt(args[0])}\n$**${message.author.username}**'s <:worldlock:1126461130383044669>: **${user2.worldlock.toLocaleString()}**`)
                                    .setColor("#FF0000")
                                    .setTimestamp();
                                return msg.edit(result3)
                            }
                        })
                    }
                }).catch(() => {
                user2.playid = 0;
                user2.worldlock = parseInt(user2.worldlock) - parseInt(args[0]);
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) console.log(err);
                    else {
                        console.log(`${message.author.tag} i Set your play ID to 1`);
                    }
                });

                return message.channel.send(`:stopwatch: | **${message.author.username }** passed the appointed time **20** seconds, you immediately lost <:worldlock:1126461130383044669> **${args[0].toLocaleString()}**.`);
            })
        } catch (err) {

        }
    } //else if (command == "giveaway"){
      //  try {
       //     if (limitation14.has(message.author.username)) {
        //        return message
        //            .reply("wait 6 seconds before execute another command.")
        //            .then(msg => {
          //              msg.delete({
         //                   timeout: 5000
        //                });
        //            });
         //   }
      //  const nama = args.join(' ')
      //  if (!nama)
       // return message.channel.send("tulis code reedemnya,contoh:FANATIC-PS-2023")
      //  if (message.author.id == config.dev) {
      //      console.log("hasbi");
      //  }else {
      //      return message.channel.send(":clown: command ini khusus developer!");
       // }
        //const reedem = `{"coin_quantity":${asu},"dev":${asu2},"used_left":${asu3}}`
       // const reedem2 = reedem;
        //try {
        //    if (!fs.existsSync("./reedem/" + nama + ".json")) {
          //      try {
          //          fs.writeFile(
           //             "./reedem/" + nama + ".json",
          //              reedem2,
            //            function(err) {}
             //       );
              //      message.reply(`giveaway reedem code : ${nama}`);
             //   } catch (err) {
             //       console.log(err);
             //   }
           // }
            //} catch (err) {}
            //limitation14.add(message.author.username);
            //setTimeout(() => {
            //    limitation14.delete(message.author.username);
           // }, 6000);
        //} catch (error) {
        //    return message.channel.send(
     //       `Failure on database found, please chat firstly before run command (auto create account doe read your action).`
        //    );
      //  }
        //}
         else if (command == "rules"){
            message.reply("`tidak spam,menggunakan seperlunya.`")
        } else if (command == "reward"){
            try {
                if (limitation.has(message.author.username)) {
                    message
                        .reply(
                            "kamu terlalu banyak mengclaim silahkan coba lagi 1 hari nanti."
                        )
                        .then(msg => {
                            msg.delete({
                                timeout: 5000
                            });
                        })
                        .catch(console.error);
                } else {
                    if (!fs.existsSync("./players/" + message.author.username + ".json")) {
                        return message.channel.send(
                            `Failure on database found, please chat firstly before run command (auto create account doesn't read your action).`
                        );
                    } else {
                        let user = `./players/` + message.author.username + ".json";
                        let user2 = require(user);
                        if (user2.ban == 1) {
                            return message.channel.send(
                                "akun anda terkena ban." );
                        }
                        user2.gems = parseInt(user2.gems) + reward;
                        fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                            if (err) {
                                return message.channel.send("Something went wrong on our database");
                            } else {
                                message.channel.send(
                                    `you received **${reward}**, now you've **__${user2.gems.toLocaleString()}__**$!`
                                );
                            }
                        });
                    }
                    limitation.add(message.author.username);
                    setTimeout(() => {
                        limitation.delete(message.author.username);
                    }, 86400000);
                }
            } catch (err) {
                return message.channel.send(
                    `Failure on database found, please chat firstly before run command (auto create account doesn't read your action).`
                );
            }
        } else if (command == "time") {
        const avatarEmbed = new MessageEmbed()
            .setDescription(`**<t:${Date.now()/1000 | 0}:F>**`)
            .setColor("RANDOM")
            .setTimestamp()
        message.channel.send(avatarEmbed);
        } else if (command == "ssweb") {
            const url = args.join(' ')
            if (!url) {
                return message.channel.send(`${message.author.username}, do you have brain cells???? at least put the url of website you want to screenshot.`);
            } else if (url.includes("gore") || url.includes("kekma")) {
                return message.channel.send(`Aye ${message.author.username}, nice try.`)
            } else {
                try {
                    request.get(`https://image.thum.io/get/maxAge/12/width/700/${url}`, function(err, response, data) {
                        if (err) {
                            return message.channel.send(`Ohh, fcks something went wrong "${err}"`);
                        } else if (!url.includes("http")) {
                            const avatarEmbed = new MessageEmbed()
                                .setDescription(`Screenshot of ${url}`)
                                .setColor("RANDOM")
                                .setTimestamp()
                                .setAuthor(`requested by ${message.author.username}`)
                                .setImage(`https://image.thum.io/get/maxAge/12/width/700/http://${url}/`);
                            return message.channel.send(avatarEmbed);
                        } else {
                            const avatarEmbed = new MessageEmbed()
                                .setDescription(`Screenshot of ${url}`)
                                .setColor("RANDOM")
                                .setTimestamp()
                                .setAuthor(`requested by ${message.author.username}`)
                                .setImage(`https://image.thum.io/get/maxAge/12/width/700/${url}`);
                            return message.channel.send(avatarEmbed);
                        }
                    })
                } catch (err) {
                    console.log(err)
                }
            }
        }  else if (command == "verify"){
            try {
                if (!fs.existsSync("./players/" + message.author.username + ".json")) {
                    try {
                        fs.writeFile(
                            "./players/" + message.author.username + ".json",
                            data2,
                            function(err) {}
                        );
                        message.reply(`Anda berhasil verify account anda`);
                        console.log(`Auto create account: (${message.author.tag})`);
                    } catch (err) {
                        console.log(err);
                    }
                }
                } catch (err) {}
            } else if (command == "givegems") {
            if (message.author.id == config.dev) {
                console.log(config.name);
            } else {
                return message.channel.send(":clown: hanya developer yang dapat mengakses command ini.");
            }
            const mention = getUserFromMention(args[0]);
            const int = args[1];
            if (int > 1000000) {
                return message.channel.send(
                    "kamu bodoh?mengirim lebih dari 1m gems,ini akan merusak economy."
                );
            }
            if (Number.isNaN(+args[1]) == true) {
                return message.channel.send("tolong tulis angka yang benar.");
            } else if (!fs.existsSync("./players/" + mention.username + ".json")) {
                return message.channel.send(
                    `hmm sepertinya ${mention} ini belum terdaftar dalam database,silahkan daftar dahulu menggunakan command .register.`
                );
            } else {
                let user = `./players/` + mention.username + ".json";
                let user2 = require(user);
                user2.gems = parseInt(user2.gems) + parseInt(args[1]);
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("ada kesalahan didalam database");
                    } else {
                        message.channel.send(
                            `berhasil mengirim **__${int.toLocaleString()} Gems__** to **__${mention}__**!`
                        );
                        mention
                            .send(
                                `selamat, kamu mendapatkan **__${int.toLocaleString()}__** Gems from **${
                    message.author.username
                  }**`
                            )
                            .catch(err => message.channel.send(`tidak bisa contact user.`));
                    }
                });
            }
        } else if (command == "givewl") {
            if (message.author.id == config.dev) {
                console.log(config.name);
            } else {
                return message.channel.send(":clown: hanya developer yang dapat mengakses command ini.");
            }
            const mention = getUserFromMention(args[0]);
            const int = args[1];
            if (int > 1000000) {
                return message.channel.send(
                    "kamu bodoh?mengirim lebih dari 1m <:worldlock:1126461130383044669>,ini akan merusak economy."
                );
            }
            if (Number.isNaN(+args[1]) == true) {
                return message.channel.send("tolong tulis angka yang benar.");
            } else if (!fs.existsSync("./players/" + mention.username + ".json")) {
                return message.channel.send(
                    `hmm sepertinya ${mention} ini belum terdaftar dalam database,silahkan daftar dahulu menggunakan command .register.`
                );
            } else {
                let user = `./players/` + mention.username + ".json";
                let user2 = require(user);
                user2.worldlock = parseInt(user2.worldlock) + parseInt(args[1]);
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("ada kesalahan didalam database");
                    } else {
                        message.channel.send(
                            `berhasil mengirim **__${int.toLocaleString()} <:worldlock:1126461130383044669>__** to **__${mention}__**!`
                        );
                        mention
                            .send(
                                `selamat, kamu mendapatkan **__${int.toLocaleString()}__** <:worldlock:1126461130383044669> from **${
                    message.author.username
                  }**`
                            )
                            .catch(err => message.channel.send(`tidak bisa contact user.`));
                    }
                });
            }
        } else if (command == "givedl") {
            if (message.author.id == config.dev) {
                console.log(config.name);
            } else {
                return message.channel.send(":clown: hanya developer yang dapat mengakses command ini.");
            }
            const mention = getUserFromMention(args[0]);
            const int = args[1];
            if (int > 1000000) {
                return message.channel.send(
                    "kamu bodoh?mengirim lebih dari 1m dl,ini akan merusak economy."
                );
            }
            if (Number.isNaN(+args[1]) == true) {
                return message.channel.send("tolong tulis angka yang benar.");
            } else if (!fs.existsSync("./players/" + mention.username + ".json")) {
                return message.channel.send(
                    `hmm sepertinya ${mention} ini belum terdaftar dalam database,silahkan daftar dahulu menggunakan command .register.`
                );
            } else {
                let user = `./players/` + mention.username + ".json";
                let user2 = require(user);
                user2.diamondlock = parseInt(user2.diamondlock) + parseInt(args[1]);
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("ada kesalahan didalam database");
                    } else {
                        message.channel.send(
                            `berhasil mengirim **__${int.toLocaleString()} <:diamondlock:1126463993674997801>__** to **__${mention}__**!`
                        );
                        mention
                            .send(
                                `selamat, kamu mendapatkan **__${int.toLocaleString()}__** <:diamondlock:1126463993674997801> from **${
                    message.author.username
                  }**`
                            )
                            .catch(err => message.channel.send(`tidak bisa contact user.`));
                    }
                });
            }
        } else if (command == "givebgl") {
            if (message.author.id == config.dev) {
                console.log(config.name);
            } else {
                return message.channel.send(":clown: hanya developer yang dapat mengakses command ini.");
            }
            const mention = getUserFromMention(args[0]);
            const int = args[1];
            if (int > 1000000) {
                return message.channel.send(
                    "kamu bodoh?mengirim lebih dari 1m bgl,ini akan merusak economy."
                );
            }
            if (Number.isNaN(+args[1]) == true) {
                return message.channel.send("tolong tulis angka yang benar.");
            } else if (!fs.existsSync("./players/" + mention.username + ".json")) {
                return message.channel.send(
                    `hmm sepertinya ${mention} ini belum terdaftar dalam database,silahkan daftar dahulu menggunakan command .register.`
                );
            } else {
                let user = `./players/` + mention.username + ".json";
                let user2 = require(user);
                user2.bluegemlock = parseInt(user2.bluegemlock) + parseInt(args[1]);
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("ada kesalahan didalam database");
                    } else {
                        message.channel.send(
                            `berhasil mengirim **__${int.toLocaleString()} <:bluegemlock:1126464907756458034>__** to **__${mention}__**!`
                        );
                        mention
                            .send(
                                `selamat, kamu mendapatkan **__${int.toLocaleString()}__** <:bluegemlock:1126464907756458034> from **${
                    message.author.username
                  }**`
                            )
                            .catch(err => message.channel.send(`tidak bisa contact user.`));
                    }
                });
            }
        } else if (command == "givechandelier") {
            if (message.author.id == config.dev) {
                console.log(config.name);
            } else {
                return message.channel.send(":clown: hanya developer yang dapat mengakses command ini.");
            }
            const mention = getUserFromMention(args[0]);
            const int = args[1];
            if (int > 1000000) {
                return message.channel.send(
                    "kamu bodoh?mengirim lebih dari 1m chandelier,ini akan merusak economy."
                );
            }
            if (Number.isNaN(+args[1]) == true) {
                return message.channel.send("tolong tulis angka yang benar.");
            } else if (!fs.existsSync("./players/" + mention.username + ".json")) {
                return message.channel.send(
                    `hmm sepertinya ${mention} ini belum terdaftar dalam database,silahkan daftar dahulu menggunakan command .register.`
                );
            } else {
                let user = `./players/` + mention.username + ".json";
                let user2 = require(user);
                user2.bluegemlock = parseInt(user2.bluegemlock) + parseInt(args[1]);
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("ada kesalahan didalam database");
                    } else {
                        message.channel.send(
                            `berhasil mengirim **__${int.toLocaleString()} Chandelier__** to **__${mention}__**!`
                        );
                        mention
                            .send(
                                `selamat, kamu mendapatkan **__${int.toLocaleString()}__** Chandelier from **${
                    message.author.username
                  }**`
                            )
                            .catch(err => message.channel.send(`tidak bisa contact user.`));
                    }
                });
            }
        } else if (command == "giverayman") {
            if (message.author.id == config.dev) {
                console.log(config.name);
            } else {
                return message.channel.send(":clown: hanya developer yang dapat mengakses command ini.");
            } 
            const mention = getUserFromMention(args[0]);
            const int = args[1];
            if (int > 1) {
                return message.channel.send(
                    "kamu bodoh,tidak boleh mengirim lebih dari 1."
                );
            }
            if (Number.isNaN(+args[1]) == true) {
                return message.channel.send("tolong tulis angka yang benar.");
            } else if (!fs.existsSync("./players/" + mention.username + ".json")) {
                return message.channel.send(
                    `hmm sepertinya ${mention} ini belum terdaftar dalam database,silahkan daftar dahulu menggunakan command .register.`
                );
            } else {
                let user = `./players/` + mention.username + ".json";
                let user2 = require(user);
                if (user2.rayman == 1) {
                    return message.channel.send (`${mention} dia sudah memiliki rayman`)
                }
                user2.rayman = parseInt(user2.rayman) + parseInt(args[1]);
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("ada kesalahan didalam database");
                    } else {
                        message.channel.send(
                            `berhasil mengirim **__${int.toLocaleString()} Rayman__** to **__${mention}__**!`
                        );
                        mention
                            .send(
                                `selamat, kamu mendapatkan **__${int.toLocaleString()}__** Rayman from **${
                    message.author.username
                  }**`
                            )
                            .catch(err => message.channel.send(`tidak bisa contact user.`));
                    }
                });
            }
        } else if (command == "giveances") {
            if (message.author.id == config.dev) {
                console.log(config.name);
            } else {
                return message.channel.send(":clown: hanya developer yang dapat mengakses command ini.");
            } 
            const mention = getUserFromMention(args[0]);
            const int = args[1];
            if (int > 1) {
                return message.channel.send(
                    "kamu bodoh,tidak boleh mengirim lebih dari 1."
                );
            }
            if (Number.isNaN(+args[1]) == true) {
                return message.channel.send("tolong tulis angka yang benar.");
            } else if (!fs.existsSync("./players/" + mention.username + ".json")) {
                return message.channel.send(
                    `hmm sepertinya ${mention} ini belum terdaftar dalam database,silahkan daftar dahulu menggunakan command .register.`
                );
            } else {
                let user = `./players/` + mention.username + ".json";
                let user2 = require(user);
                if (user2.ances == 1) {
                    return message.channel.send (`${mention} dia sudah memiliki ances`)
                }
                user2.ances = parseInt(user2.ances) + parseInt(args[1]);
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("ada kesalahan didalam database");
                    } else {
                        message.channel.send(
                            `berhasil mengirim **__${int.toLocaleString()} Ances__** to **__${mention}__**!`
                        );
                        mention
                            .send(
                                `selamat, kamu mendapatkan **__${int.toLocaleString()}__** Ances from **${
                    message.author.username
                  }**`
                            )
                            .catch(err => message.channel.send(`tidak bisa contact user.`));
                    }
                });
            }
        } else if (command == "dep" || command == "deposit") {
            try {
                let user = `./players/` + message.author.username + ".json";
                let user2 = require(user);
                if (args[0] < 50) {
                    return message.channel.send(
                        `kamu tidak bisa deposit,minimal deposit adalah 50.`
                    );
                } else if (args[0] == "all") {
                    if (user2.gems == 0) {
                        return message.channel.send(
                            "kamu tidak memiliki gems."
                        );
                    } else args[0] = user2.gems;
                } else var nominal = args[0];
                if (Number.isNaN(+args[0]) == true) {
                    return message.channel.send(
                        `tolong gunakan dengan bijak, (-).\n**__contoh__**: ${config.prefix}${command} 1000.`
                    );
                }
                if (user2.ban == 1) {
                    return message.channel.send(
                        "akun anda terkena ban.");
                }
                if (user2.playid == 1) {
                    return message.channel.send("anda sedang dalam permainan");
                }
                if (parseInt(nominal) > parseInt(user2.gems)) {
                    return message.channel.send("kamu tidak memiliki gems untuk deposit");
                } else if (message.content.includes("-")) {
                    return message.channel.send("tidak bisa deposit karena mengandung minus.");
                } else {
                    user2.gems = parseInt(user2.gems) - parseInt(args[0]);
                    user2.deposit = parseInt(user2.deposit) + parseInt(args[0]);
                    fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                        if (err) {
                            return message.channel.send("ada kesalahan dalam database");
                        } else {
                            return message.channel.send(
                                `berhasil deposit ${args[0]}$, sekarang gems deposit anda adalah ${user2.deposit} gems, dan untuk mengambil anda bisa menggunakan command "${config.prefix}withdraw".`
                            );
                        }
                    });
                }
            } catch (err) {
                return message.channel.send(
                    `Failure on database found, please chat firstly before run command (auto create account doesn't read your action).`
                );
            }
        }else if (command == "with" || command == "withdraw") {
            try {
                let user = `./players/` + message.author.username + ".json";
                let user2 = require(user);
                if (args[0] < 50) {
                    return message.channel.send(
                        `kamu tidak bisa mengambil gems,minimal pengambilan gems 50.`
                    );
                } else if (args[0] == "all") {
                    if (user2.deposit == 0) {
                        return message.channel.send(
                            "gems anda dibank 0."
                        );
                    } else args[0] = user2.deposit;
                } else var nominal = args[0];
                if (Number.isNaN(+args[0]) == true) {
                    return message.channel.send(
                        `tolong gunakan dengan angka yang benar (-).\n**__contoh__**: ${config.prefix}${command} 1000.`
                    );
                }
                if (user2.ban == 1) {
                    return message.channel.send(
                        "akun anda terkena ban.");
                }
                if (parseInt(nominal) > parseInt(user2.deposit)) {
                    return message.channel.send(`kamu belum deposit uang atau saldo anda tidak cukup,saldo bank anda ${user2.deposit}.`);
                } else if (message.content.includes("-")) {
                    return message.channel.send("kamu tidak boleh menggunakan minus untuk withdraw.");
                } else {
                    user2.gems = parseInt(user2.gems) + parseInt(args[0]);
                    user2.deposit = parseInt(user2.deposit) - parseInt(args[0]);
                    fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                        if (err) {
                            return message.channel.send("ada kesalahan didatabase");
                        } else {
                            return message.channel.send(
                                `berhasil withdraw ${args[0]}$, sekarang jumlah gems jadi ${
                    user2.gems
                  }$ di bank anda , dan **(${config.prefix}gems)** untuk melihat jumlah gems anda.`
                            );
                        }
                    });
                }
            } catch (err) {
                return message.channel.send(
                    `Failure on database found, please chat firstly before run command (auto create account doesn't read your action).`
                );
            }
         } else if (command == "convertdltowl") {
                try {
                    if (limitation15.has(message.author.username)) {
                        return message
                            .reply("tunggu 5 detik untuk menggunakan command ini lagi.")
                            .then(msg => {
                                msg.delete({
                                    timeout: 5000
                                });
                            });
                    }
                    let user = `./players/` + message.author.username + ".json";
                    let user2 = require(user);
                    if (user2.ban == 1) {
                        return message.channel.send("akun anda terkena ban");
                    }else if (user2.diamondlock < 1) {
                        return message.channel.send("<:diamondlock:1126463993674997801> kamu kurang dari 1.")
                    }
                    user2.diamondlock = parseInt(user2.diamondlock) - 1;
                    user2.worldlock = parseInt(user2.worldlock) + 100;
                    fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                        if (err) {
                            return message.channel.send("fuck the error");
                        } else {
                            message.channel.send(`anda berhasil convert <:diamondlock:1126463993674997801> ke <:worldlock:1126461130383044669>,<:worldlock:1126461130383044669> anda ada ${user2.worldlock},dan <:diamondlock:1126463993674997801> sisa ${user2.diamondlock}.`);
                        }
                        limitation15.add(message.author.username);
                        setTimeout(() => {
                        limitation15.delete(message.author.username);
                        }, 5000);
                    });
                } catch (err) {}
        } else if (command == "convertbgltodl") {
            try {
                if (limitation15.has(message.author.username)) {
                    return message
                        .reply("tunggu 5 detik untuk menggunakan command ini lagi.")
                        .then(msg => {
                            msg.delete({
                                timeout: 5000
                            });
                        });
                }
                let user = `./players/` + message.author.username + ".json";
                let user2 = require(user);
                if (user2.ban == 1) {
                    return message.channel.send("akun anda terkena ban");
                }else if (user2.bluegemlock < 1) {
                    return message.channel.send("<:bluegemlock:1126464907756458034> kamu kurang dari 1.")
                }
                user2.bluegemlock = parseInt(user2.bluegemlock) - 1;
                user2.diamondlock = parseInt(user2.diamondlock) + 100;
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("fuck the error");
                    } else {
                        message.channel.send(`anda berhasil convert <:bluegemlock:1126464907756458034> ke <:diamondlock:1126463993674997801>,<:diamondlock:1126463993674997801> anda ada ${user2.diamondlock},dan <:bluegemlock:1126464907756458034> sisa ${user2.bluegemlock}.`);
                    }
                    limitation15.add(message.author.username);
                    setTimeout(() => {
                    limitation15.delete(message.author.username);
                    }, 5000);
                });
            } catch (err) {}
    } else if (command == "convert100dl") {
        try {
            if (limitation15.has(message.author.username)) {
                return message
                    .reply("tunggu 5 detik untuk menggunakan command ini lagi.")
                    .then(msg => {
                        msg.delete({
                            timeout: 5000
                        });
                    });
            }
            let user = `./players/` + message.author.username + ".json";
            let user2 = require(user);
            if (user2.ban == 1) {
                return message.channel.send("akun anda terkena ban");
            }else if (user2.diamondlock < 100) {
                return message.channel.send("<:diamondlock:1126463993674997801> kamu kurang dari 100.")
            }
            user2.diamondlock = parseInt(user2.diamondlock) - 100;
            user2.bluegemlock = parseInt(user2.bluegemlock) + 1;
            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                if (err) {
                    return message.channel.send("fuck the error");
                } else {
                    message.channel.send(`anda berhasil convert <:diamondlock:1126463993674997801> ke <:bluegemlock:1126464907756458034>,<:bluegemlock:1126464907756458034> anda ada ${user2.bluegemlock},dan <:diamondlock:1126463993674997801> sisa ${user2.diamondlock}.`);
                }
                limitation15.add(message.author.username);
                setTimeout(() => {
                limitation15.delete(message.author.username);
                }, 5000);
            });
        } catch (err) {}
} else if (command == "convert100wl") {
            try {
                if (limitation15.has(message.author.username)) {
                    return message
                        .reply("tunggu 5 detik untuk menggunakan command ini lagi.")
                        .then(msg => {
                            msg.delete({
                                timeout: 5000
                            });
                        });
                }
                let user = `./players/` + message.author.username + ".json";
                let user2 = require(user);
                if (user2.ban == 1) {
                    return message.channel.send("akun anda terkena ban");
                }else if (user2.worldlock < 100) {
                    return message.channel.send("<:worldlock:1126461130383044669> kamu kurang dari 100.")
                }
                user2.worldlock = parseInt(user2.worldlock) - 100;
                user2.diamondlock = parseInt(user2.diamondlock) + 1;
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("fuck the error");
                    } else {
                        message.channel.send(`anda berhasil convert <:worldlock:1126461130383044669> ke <:diamondlock:1126463993674997801>,<:diamondlock:1126463993674997801> anda ada ${user2.diamondlock},dan <:worldlock:1126461130383044669> sisa ${user2.worldlock}.`);
                    }
                    limitation15.add(message.author.username);
                    setTimeout(() => {
                    limitation15.delete(message.author.username);
                    }, 5000);
                });
            } catch (err) {}
        }
            else if (command == "convert200wl") {
                try {
                    if (limitation15.has(message.author.username)) {
                        return message
                            .reply("tunggu 5 detik untuk menggunakan command ini lagi.")
                            .then(msg => {
                                msg.delete({
                                    timeout: 5000
                                });
                            });
                    }
                    let user = `./players/` + message.author.username + ".json";
                    let user2 = require(user);
                    if (user2.ban == 1) {
                        return message.channel.send("akun anda terkena ban");
                    }else if (user2.worldlock < 100) {
                        return message.channel.send("<:worldlock:1126461130383044669> kamu kurang dari 100.")
                    }
                    user2.worldlock = parseInt(user2.worldlock) - 200;
                    user2.diamondlock = parseInt(user2.diamondlock) + 2;
                    fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                        if (err) {
                            return message.channel.send("fuck the error");
                        } else {
                            message.channel.send(`anda berhasil convert <:worldlock:1126461130383044669> ke <:diamondlock:1126463993674997801>,<:diamondlock:1126463993674997801> anda ada ${user2.diamondlock},dan <:worldlock:1126461130383044669> sisa ${user2.worldlock}.`);
                        }
                        limitation15.add(message.author.username);
                        setTimeout(() => {
                        limitation15.delete(message.author.username);
                        }, 5000);
                    });
                } catch (err) {}
            }
            else if (command == "convert300wl") {
                try {
                    if (limitation15.has(message.author.username)) {
                        return message
                            .reply("tunggu 5 detik untuk menggunakan command ini lagi.")
                            .then(msg => {
                                msg.delete({
                                    timeout: 5000
                                });
                            });
                    }
                    let user = `./players/` + message.author.username + ".json";
                    let user2 = require(user);
                    if (user2.ban == 1) {
                        return message.channel.send("akun anda terkena ban");
                    }else if (user2.worldlock < 100) {
                        return message.channel.send("<:worldlock:1126461130383044669> kamu kurang dari 100.")
                    }
                    user2.worldlock = parseInt(user2.worldlock) - 300;
                    user2.diamondlock = parseInt(user2.diamondlock) + 3;
                    fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                        if (err) {
                            return message.channel.send("fuck the error");
                        } else {
                            message.channel.send(`anda berhasil convert <:worldlock:1126461130383044669> ke <:diamondlock:1126463993674997801>,<:diamondlock:1126463993674997801> anda ada ${user2.diamondlock},dan <:worldlock:1126461130383044669> sisa ${user2.worldlock}.`);
                        }
                        limitation15.add(message.author.username);
                        setTimeout(() => {
                        limitation15.delete(message.author.username);
                        }, 5000);
                    });
                } catch (err) {}
            }
            else if (command == "convert400wl") {
                try {
                    if (limitation15.has(message.author.username)) {
                        return message
                            .reply("tunggu 5 detik untuk menggunakan command ini lagi.")
                            .then(msg => {
                                msg.delete({
                                    timeout: 5000
                                });
                            });
                    }
                    let user = `./players/` + message.author.username + ".json";
                    let user2 = require(user);
                    if (user2.ban == 1) {
                        return message.channel.send("akun anda terkena ban");
                    }else if (user2.worldlock < 100) {
                        return message.channel.send("<:worldlock:1126461130383044669> kamu kurang dari 100.")
                    }
                    user2.worldlock = parseInt(user2.worldlock) - 400;
                    user2.diamondlock = parseInt(user2.diamondlock) + 4;
                    fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                        if (err) {
                            return message.channel.send("fuck the error");
                        } else {
                            message.channel.send(`anda berhasil convert <:worldlock:1126461130383044669> ke <:diamondlock:1126463993674997801>,<:diamondlock:1126463993674997801> anda ada ${user2.diamondlock},dan <:worldlock:1126461130383044669> sisa ${user2.worldlock}.`);
                        }
                        limitation15.add(message.author.username);
                        setTimeout(() => {
                        limitation15.delete(message.author.username);
                        }, 5000);
                    });
                } catch (err) {}
            }
            else if (command == "convert500wl") {
                try {
                    if (limitation15.has(message.author.username)) {
                        return message
                            .reply("tunggu 5 detik untuk menggunakan command ini lagi.")
                            .then(msg => {
                                msg.delete({
                                    timeout: 5000
                                });
                            });
                    }
                    let user = `./players/` + message.author.username + ".json";
                    let user2 = require(user);
                    if (user2.ban == 1) {
                        return message.channel.send("akun anda terkena ban");
                    }else if (user2.worldlock < 100) {
                        return message.channel.send("<:worldlock:1126461130383044669> kamu kurang dari 100.")
                    }
                    user2.worldlock = parseInt(user2.worldlock) - 500;
                    user2.diamondlock = parseInt(user2.diamondlock) + 5;
                    fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                        if (err) {
                            return message.channel.send("fuck the error");
                        } else {
                            message.channel.send(`anda berhasil convert <:worldlock:1126461130383044669> ke <:diamondlock:1126463993674997801>,<:diamondlock:1126463993674997801> anda ada ${user2.diamondlock},dan <:worldlock:1126461130383044669> sisa ${user2.worldlock}.`);
                        }
                        limitation15.add(message.author.username);
                        setTimeout(() => {
                        limitation15.delete(message.author.username);
                        }, 5000);
                    });
                } catch (err) {}
            } else if (command == "banned") {
                const mention = getUserFromMention(args[0]);
                if (message.author.id == config.dev) {
                    console.log(config.name);
                } else {
                    return message.channel.send("hanya developer yang dapat acces command ini");
                }
                try {
                    let user = `./players/` + mention.username + ".json";
                    let user2 = require(user);
                    user2.ban = parseInt(user2.ban) + 1;
                    fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                        if (err) {
                            return message.channel.send("fuck the error");
                        } else {
                            message.channel.send(`anda berhasil banned account ${mention}.`);
                        }
                    });
                } catch (err) {}
            }
            else if (command == "unbanned") {
                const mention = getUserFromMention(args[0]);
                if (message.author.id == config.dev) {
                    console.log(config.name);
                } else {
                    return message.channel.send("hanya developer yang dapat acces command ini");
                }
                try {
                    let user = `./players/` + mention.username + ".json";
                    let user2 = require(user);
                    user2.ban = parseInt(user2.ban) - 1;
                    fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                        if (err) {
                            return message.channel.send("fuck the error");
                        } else {
                            message.channel.send(`anda berhasil unbanned account ${mention}.`);
                        }
                    });
                } catch (err) {}
            }else if (command == "buy") {
                try {
                    if (!fs.existsSync("./players/" + message.author.username + ".json")) {
                        return message.channel.send(
                            `Failure on database found, please chat firstly before run command (auto create account doesn't read your action).`
                        );
                    }
                    let user = `./players/` + message.author.username + ".json";
                    let user2 = require(user);
        
                    if (user2.playid == 1) {
                        return message.channel.send("kamu sedang dalam permainan.");
                    }
                    if (user2.ban == 1) {
                        return message.channel.send(
                            "akun anda terkena ban.");
                    }
                    const reminder = args[0];
                    if (!reminder) {
                        return message.channel.send(
                            `item apa yang ingin anda beli? (${config.prefix} shop) untuk melihat list harga`
                        );
                    }
                    if (reminder == "wl") {
                        if (parseInt(user2.gems) < parseInt(config.worldlock)) {
                            return message.channel.send(`kamu tidak memiliki ${config.worldlock} gems untuk membeli 1 worldlock.`);
                        } else {
                            user2.gems = parseInt(user2.gems) - parseInt(config.worldlock);
                            user2.worldlock = parseInt(user2.worldlock) + 100;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("ada kesalahan dalam database");
                                } else {
                                    message.channel.send(
                                        `berhasil membeli 100 <:worldlock:1126461130383044669> for **__${config.worldlock.toLocaleString()}__**, sisa gems anda **__${user2.gems}__** dan jumlah **(${user2.worldlock}) <:worldlock:1126461130383044669> anda** sekarang.`);
                                }
                            });
                        }
                    } else if (reminder == "dl") {
                        if (parseInt(user2.gems) < parseInt(config.diamondlock100)) {
                            return message.channel.send(`kamu tidak memiliki ${config.diamondlock100} gems untuk membeli 100 diamondlock.`);
                        } else {
                            user2.gems = parseInt(user2.gems) - parseInt(config.diamondlock100);
                            user2.diamondlock = parseInt(user2.diamondlock) + 100;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("ada kesalahan dalam database");
                                } else {
                                    message.channel.send(`berhasil membeli 100 <:diamondlock:1126463993674997801> for **__${config.diamondlock100.toLocaleString()}__**, sisa gems anda **__${user2.gems}__** dan jumlah **(${user2.diamondlock}) <:diamondlock:1126463993674997801> anda** sekarang`);
                                }
                            });
                        }
                    }else if (reminder == "bgl") {
                        if (parseInt(user2.gems) < parseInt(config.bluegemlock)) {
                            return message.channel.send(`kamu tidak memiliki ${config.bluegemlock} gems untuk membeli 1 <:bluegemlock:1126464907756458034>.`);
                        } else {
                            user2.gems = parseInt(user2.gems) - parseInt(config.bluegemlock);
                            user2.bluegemlock = parseInt(user2.bluegemlock) + 10;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("ada kesalahan dalam database");
                                } else {
                                    message.channel.send(`berhasil membeli 1 <:bluegemlock:1126464907756458034> for **__${config.bluegemlock.toLocaleString()}__**, sisa gems anda **__${user2.gems}__** dan jumlah **(${user2.bluegemlock}) <:bluegemlock:1126464907756458034> anda** sekarang`);
                                }
                            });
                        }
                    }
                    else if (reminder == "rayman") {
                        if (parseInt(user2.bluegemlock) < parseInt(config.rayman)) {
                            return message.channel.send(`kamu tidak memiliki ${config.rayman} <:bluegemlock:1126464907756458034> untuk membeli 1 rayman.`);
                        } else {
                            if (user2.rayman == 1){
                                return message.channel.send("kamu sudah memiliki rayman.")
                            }
                            user2.bluegemlock = parseInt(user2.bluegemlock) - parseInt(config.rayman);
                            user2.rayman = parseInt(user2.rayman) + 1;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("ada kesalahan dalam database");
                                } else {
                                    message.channel.send(`berhasil membeli 1 rayman for **__${config.rayman.toLocaleString()}__**, sisa <:bluegemlock:1126464907756458034> anda **__${user2.bluegemlock}__** dan jumlah **(${user2.rayman}) rayman anda** sekarang`);
                                }
                            });
                        }
                    }
                    else if (reminder == "chandelier") {
                        if (parseInt(user2.worldlock) < parseInt(config.chandelier)) {
                            return message.channel.send(`kamu tidak memiliki ${config.chandelier} <:worldlock:1126461130383044669> untuk membeli 200 chandelier.`);
                        } else {
                            user2.worldlock = parseInt(user2.worldlock) - parseInt(config.chandelier);
                            user2.chandelier = parseInt(user2.chandelier) + 200;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("ada kesalahan dalam database");
                                } else {
                                    message.channel.send(`berhasil membeli 200 chandelier for **__${config.chandelier.toLocaleString()}__**, sisa <:worldlock:1126461130383044669> anda **__${user2.worldlock}__** dan jumlah **(${user2.chandelier}) chandelier anda** sekarang`);
                                }
                            });
                        }
                    }
                } catch (err) {
                    return message.channel.send(
                        `Failure on database found, please chat firstly before run command (auto create account doesn't read your action).`
                    );
                }
            }
            else if (command == "shop") {
                try {
                    let user = `./players/` + message.author.username + ".json";
                    let user2 = require(user);
                    if (user2.ban == 1) {
                        return message.channel.send(
                            "akun anda terkena ban");
                    }
                    if (user2.rayman == 1 && user2.ances == 1) {
                        const embed = new Discord.MessageEmbed()
                            .setTitle("GameBOT Store")
                            .setDescription(
                                `\n\`Prices list\nRayman: ${config.rayman.toLocaleString()} (You already own Rayman)\nAnces: ${config.ances.toLocaleString()} (You already own Ances)\nChandelier: ${config.chandelier.toLocaleString()}\`\n`
                            )
                            .setColor("#0000FF")
                            .setFooter(
                                `Requested by ${message.author.tag}`,
                                message.author.displayAvatarURL({
                                    dynamic: true
                                })
                            )
                            .setTimestamp();
                        message.channel.send(embed);
                    } else if (user2.ances == 1 && user2.rayman == 0) {
                        const embed2 = new Discord.MessageEmbed()
                            .setTitle("GameBOT Store")
                            .setDescription(
                                `\n\`Prices list\nPrices list\nRayman: ${config.rayman.toLocaleString()} ${config.rayman.toLocaleString()}\nAnces: ${config.ances.toLocaleString()} (You already own Ances)\nChandelier: ${config.chandelier.toLocaleString()}\`\n`
                            )
                            .setColor("#0000FF")
                            .setFooter(
                                `Requested by ${message.author.tag}`,
                                message.author.displayAvatarURL({
                                    dynamic: true
                                })
                            )
                            .setTimestamp();
                        message.channel.send(embed2);
                    } else if (user2.ances == 0 && user2.pickaxe == 1) {
                        const embed3 = new Discord.MessageEmbed()
                            .setTitle("GameBOT Store")
                            .setDescription(
                                `\n\`Prices list\nRayman: ${config.rayman.toLocaleString()} (You already own rayman)\nAnces: ${config.ances.toLocaleString()}\nChandelier: ${config.chandelier.toLocaleString()}\`\n`
                            )
                            .setColor("#0000FF")
                            .setFooter(
                                `Requested by ${message.author.tag}`,
                                message.author.displayAvatarURL({
                                    dynamic: true
                                })
                            )
                            .setTimestamp();
                        message.channel.send(embed3);
                    } else {
                        const embed4 = new Discord.MessageEmbed()
                            .setTitle("GameBOT Store")
                            .setDescription(
                                `\n\`Prices list\nRayman: ${config.rayman.toLocaleString()}\nAnces: ${config.ances.toLocaleString()}\nChandelier: ${config.chandelier.toLocaleString()}\`\n`
                            )
                            .setColor("#0000FF")
                            .setFooter(
                                `Requested by ${message.author.tag}`,
                                message.author.displayAvatarURL({
                                    dynamic: true
                                })
                            )
                            .setTimestamp();
                        message.channel.send(embed4);
                    }
                } catch (error) {
                    return message.channel.send(
                        `Failure on database found, please chat firstly before run command (auto create account doesn't read your action).`
                    );
                }
            }else if (command == "farming") {
                try {
                    let user = `./players/` + message.author.username + ".json";
                    let user2 = require(user);
                    if (user2.ban == 1) {
                        return;
                    }
                    const auto = capcha();
                    if (user2.capcha == 1 && user2.wrong == 6) {
                        user2.ban = 1;
                        fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                            if (err) {
                                return message.channel.send("akun anda terkena ban");
                            }
                        });
                    }
        
                    if (user2.farmuser == 30) {
                        user2.code = parseInt(auto);
                        user2.capcha = 1;
                        user2.wrong = parseInt(user2.wrong) + 1;
                        fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                            if (err) {
                                return message.channel.send("Something went wrong on our database");
                            } else {
                                return message.channel.send(
                                    `:warning:| Auto Captcha system.\nCaptcha, ||${config.prefix}ans ${user2.code}|| ${user2.wrong}/6`
                                );
                            }
                        });
                    }
        
                    if (limitation8.has(message.author.username)) {
                        return message.channel.send(
                            `:stopwatch: | **${message.author.username}**! Tunggu **2,5** detik dan coba kembali!`
                        );
                    }
        
                    if (!fs.existsSync("./players/" + message.author.username + ".json")) {
                        return message.channel.send(
                            `Failure on database found, please chat firstly before run command (auto create account doesn't read your action).`
                        );
                    }
                    var bruhxrandom = randomgems();
                    if (user2.ban == 1) {
                        return message.channel.send(
                            "akun anda terkena ban");
                    } else if (user2.capcha == 1) {
                        return;
                    } else if (user2.pickaxe < 1) {
                        return message.channel.send(
                            `kamu tidak memiliki pickaxe,silahkan beli (**${config.prefix} shop**)`
                        );
                    } else if (user2.rayman == 1){
                        if (user2.chandelier < 1) {
                            return message.channel.send(`kamu tidak memiliki chandelier,silahkan beli **${config.prefix}buy chandelier**`);
                        }
                        const raymanances = bruhxrandom * 25 + bruhxrandom * 10 + bruhxrandom * 5;
                        user2.farmuser = parseInt(user2.farmuser) + 1;
                        user2.gems = parseInt(user2.gems) + raymanances;
                        user2.chandelier = parseInt(user2.chandelier) - 3;
                        fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                            if (err) {
                                return message.channel.send("Something went wrong on our database");
                            } else {
                                return message.channel.send(`**${message.author.username}**, [Rayman] anda mendapatkan ⏣ **${raymanances}** gems **(${user2.chandelier})**🌱 chandelier terkurang.`);
                            }
                        });
                        limitation8.add(message.author.username);
                        setTimeout(() => {
                            limitation8.delete(message.author.username);
                        }, 2500);
                    } else if (user2.ances == 1){
                        if (user2.chandelier < 1) {
                            return message.channel.send(`kamu tidak memiliki chandelier,silahkan beli **${config.prefix}buy chandelier**`);
                        }
                        const raymanances = bruhxrandom * 10 + bruhxrandom * 5;
                        user2.farmuser = parseInt(user2.farmuser) + 1;
                        user2.gems = parseInt(user2.gems) + raymanances;
                        user2.chandelier = parseInt(user2.chandelier) - 1;
                        fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                            if (err) {
                                return message.channel.send("Something went wrong on our database");
                            } else {
                                return message.channel.send(`**${message.author.username}**, [Ances] anda mendapatkan ⏣ **${raymanances}** gems **(${user2.chandelier})**🌱 chandelier terkurang.`);
                            }
                        });
                        limitation8.add(message.author.username);
                        setTimeout(() => {
                            limitation8.delete(message.author.username);
                        }, 2500);
                    }
                    else {
                        if (user2.chandelier < 1) {
                            return message.channel.send(`kamu tidak memiliki chandelier,silahkan beli **${config.prefix}buy chandelier**`);
                        }
                        const normalgems = bruhxrandom * 5;
                        user2.gems = parseInt(user2.gems) + normalgems;
                        user2.farmuser = parseInt(user2.farmuser) + 1;
                        user2.chandelier = parseInt(user2.chandelier) - 3;
                        fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                            if (err) {
                                return message.channel.send("ada kesalahan dalam database");
                            } else {
                                return message.channel.send(`**${message.author.username}**, anda mendapatkan **${normalgems}** gems **(${user2.chandelier})**🌱 chandelier terkurang.`);
                            }
                        });
                        limitation8.add(message.author.username);
                        setTimeout(() => {
                            limitation8.delete(message.author.username);
                        }, 2500);
                    }
                } catch (error) {
                    return message.channel.send(
                        `Failure on database found, please chat firstly before run command (auto create account doesn't read your action).`
                    );
                }
            } 
});
client.login(config.token);
