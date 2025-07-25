import { Client, Events, GatewayIntentBits, Interaction } from 'discord.js';
import * as dotenv from 'dotenv';
import { CommandsMap } from '@commands';
import { Player } from 'discord-player';
import { YoutubeiExtractor } from 'discord-player-youtubei';
import { BotCommands } from '@lib';

dotenv.config();

async function main() {
  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildVoiceStates,
    ],
  });

  const player = new Player(client);
  // If anytime you want more extractors, you can load them like this:
  // await player.extractors.loadMulti([...DefaultExtractors, YoutubeiExtractor])
  await player.extractors.register(YoutubeiExtractor, {});

  client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
  });

  client.on(Events.InteractionCreate, async (interaction: Interaction) => {
    if (!interaction.isChatInputCommand() || !interaction.guild) return;

    if (interaction.commandName in CommandsMap) {
      await player.context.provide(
        {
          guild: interaction.guild,
        },
        async () => CommandsMap[interaction.commandName as BotCommands].handleFn(interaction),
      );
    }
  });

  player.events.on('playerStart', (queue, track) => {
    queue.metadata.channel.send(`Started playing **${track.title}**!`);
  });

  player.events.on('playerError', (queue, error, track) => {
    queue.metadata.channel.send(
      `Error occurred while playing **${track.title}**: ${error.message}`,
    );
    console.log(`Error occurred while playing **${track.title}**:`, error);
  });

  await client.login(process.env.DISCORD_BOT_TOKEN);
}

main();
