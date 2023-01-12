# discordbot
Discord bot that bans users who use "bad words" and users who spam the chat.

First, we import the discord.js library and create a new client, which we will use to interact with the Discord API. Then we define the list of banned words in an array called bannedWords. Next, we define two variables spamThreshold and spamTime which will be used to check for spam messages. The threshold is the number of messages a user can send in the time (in ms) before being banned for spamming.

We have an event listener on ready event emitted by the client, when the client is ready, it will log the current user details in the console.

We also have an event listener on message event, emitted when a new message is sent in the server the bot is a member of. It checks the message's content against the banned words and the user's message count to determine if a ban is necessary. If the message's content includes any of the banned words, or if the user has sent more messages than the spam threshold within the given time, the user is banned and a message is sent to the channel letting everyone know that the user has been banned.

Finally, we log the client into Discord using the provided token to authenticate the bot and allow it to interact with servers.
