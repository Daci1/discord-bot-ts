import {
    ChatInputCommandInteraction,
    SlashCommandBuilder
} from 'discord.js';
import {useMainPlayer} from "discord-player";
import {BotCommands} from "@lib";

export const skipCommand = new SlashCommandBuilder()
    .setName(BotCommands.SKIP)
    .setDescription('Skip the currently playing song');

export const handleSkipCommand = async (interaction: ChatInputCommandInteraction) => {
    const player = useMainPlayer();
    const queue = player.nodes.get(interaction.guild!.id);

    if (!queue) {
        return interaction.reply(
            'This server does not have an active player session.',
        );
    }

    if (!queue.isPlaying()) {
        return interaction.reply('There is no track playing.');
    }

    queue.node.skip();

    return interaction.reply('The current song has been skipped.');
};
