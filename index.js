// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

const urgent = function(value) {
  while(value < 5) {
    message.channel.send("@everyone")
    if(value == 5) {
      message.channel.send("Mission succes")
    }
    value++
  }
}

client.on('createMessage', message => {
  if(message.content == "p") {
    message.send("Hallo");
  }
});






// Login to Discord with your client's token
client.login("OTc2NTA5MDk1MTE5MDQ0NjA4.GpsvAR.jitAopGXXXzogQ3mfbrMpLUDwe8U0sfAsRAqMg");
