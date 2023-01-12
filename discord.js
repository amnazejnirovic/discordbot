const Discord = require('discord.js'); // Import the discord.js library
const client = new Discord.Client(); // Create a new client

const bannedWords = ['racism', 'bigotry', 'discrimination']; // Words that will trigger a ban
const spamThreshold = 5; // Number of messages a user can send before being banned for spamming
const spamTime = 10000; // Time in ms during which the messages will be counted to check for spam.

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (message) => {
  // Check for banned words
  for (const word of bannedWords) {
    if (message.content.includes(word)) {
      message.member.ban(); // Ban the user that sent the message
      message.channel.send(`User ${message.member.user.username} has been banned for using a banned word.`);
      return;
    }
  }

  // Check for spam
  if (message.author.spam.messageCount > spamThreshold) {
    message.member.ban(); // Ban the user that sent the message
    message.channel.send(`User ${message.member.user.username} has been banned for spamming the chat.`);
  }
});

client.login(your_token); // Log the client into Discord using the provided token
