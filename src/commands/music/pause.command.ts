import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import { useTimeline } from 'discord-player';
import { BotCommands } from '@lib';

export const pauseCommand = new SlashCommandBuilder()
  .setName(BotCommands.PAUSE)
  .setDescription('Pause the currently playing song');

export const handlePauseCommand = async (interaction: ChatInputCommandInteraction) => {
  const timeline = useTimeline();

  if (!timeline) {
    return interaction.reply('This server does not have an active player session.');
  }

  const wasPaused = timeline.paused;

  if (wasPaused) {
    timeline.resume();
  } else {
    timeline.pause();
  }

  return interaction.reply(`The player is now ${wasPaused ? 'playing' : 'paused'}.`);
};
