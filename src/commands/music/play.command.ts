import { ChatInputCommandInteraction, GuildMember, SlashCommandBuilder } from 'discord.js';
import { useMainPlayer } from 'discord-player';
import { BotCommands } from '@lib';

export const playCommand = new SlashCommandBuilder()
  .setName(BotCommands.PLAY)
  .setDescription('Play a song')
  .addStringOption(option => {
    return option.setName('query').setDescription('The song name or URL').setRequired(true);
  });

export const handlePlayCommand = async (interaction: ChatInputCommandInteraction) => {
  const player = useMainPlayer();
  const channel = (interaction.member as GuildMember).voice.channel;
  if (!channel) return interaction.reply('You are not connected to a voice channel!');
  const query = interaction.options.getString('query', true);

  await interaction.deferReply();

  try {
    const { track } = await player.play(channel, query, {
      nodeOptions: {
        metadata: interaction,
      },
    });

    return interaction.followUp(`**${track.title}** enqueued!`);
  } catch (e) {
    return interaction.followUp(`Something went wrong: ${e}`);
  }
};
