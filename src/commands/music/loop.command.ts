import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import { QueueRepeatMode, useMainPlayer } from 'discord-player';
import { BotCommands } from '@lib';

export const loopCommand = new SlashCommandBuilder()
  .setName(BotCommands.LOOP)
  .setDescription('Loop the queue in different modes')
  .addNumberOption(option =>
    option.setName('mode').setDescription('The loop mode').setRequired(true).addChoices(
      {
        name: 'Off',
        value: QueueRepeatMode.OFF,
      },
      {
        name: 'Track',
        value: QueueRepeatMode.TRACK,
      },
      {
        name: 'Queue',
        value: QueueRepeatMode.QUEUE,
      },
      {
        name: 'Autoplay',
        value: QueueRepeatMode.AUTOPLAY,
      },
    ),
  );

export const handleLoopCommand = async (interaction: ChatInputCommandInteraction) => {
  const player = useMainPlayer();
  const queue = player.nodes.get(interaction.guild!.id);

  if (!queue) {
    return interaction.reply('This server does not have an active player session.');
  }

  const loopMode: any = interaction.options.getNumber('mode');

  queue.setRepeatMode(loopMode);

  const loopModeKey = Object.entries(QueueRepeatMode).find(
    ([_, value]) => value === loopMode,
  )?.[0];

  return interaction.reply(`Loop mode set to ${loopModeKey}`);
};
