# Discord Music Bot with discord-js

This is a Discord Music Bot written with discord-js. It supports various music commands to
play and manage songs in a voice channel.

## Commands

Here is a list of available commands:

* `/play` <song>: This command will play the specified song in the voice channel. The bot will search for the song on
  YouTube and play the first result.
* `/nowplaying`: This command will display information about the song that is currently playing.
* `/loop <mode>`: This command will turn on the given loop mode.
* `/skip`: This command will skip the current song and play the next song in the queue.
* `/stop`: This command will stop the current song, clear the queue and leave voice channel.
* `/clearqueue`: This command will stop the current song and clear the queue.
* `/pause`: This command will pause the current song.

### Important when using commands

Note that all commands should be used as slash commands and not send as messages to a text channel.

## How to use

1. Clone the repository to your local machine.
2. Create a new [Discord Application](https://discord.com/developers/applications) and obtain the application token.
3. Add the bot to your Discord server.
4. Create a .env file and fill the fields as shown in .env.example

## Contributing or Feedback

I encourage everyone to contribute to the bot by opening pull requests.
If you have any improvements, bug fixes or new features that you would like to add,
please feel free to create a pull request and I will review it as soon as possible.

If you encounter any problems or have any suggestions,
you can also open an issue and I will take a look at it.
I value your feedback and am always looking to improve the bot.

Thank you for your support and I look forward to working together to make this bot better!

If you enjoy using the bot, I would really appreciate it if you could give me a star on GitHub.
Your support helps me to improve the bot and make it even better for everyone to use.

## ✅ To-Do

- [ ] Add linter, .nvmrc, .env.example and Dockerfile
- [ ] Add readme part for deploy commands script
- [ ] Change documentation to have run development part and production part
- [ ] Add more commands: join, leave, etc...
