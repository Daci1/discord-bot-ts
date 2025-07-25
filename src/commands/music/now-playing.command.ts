import {ChatInputCommandInteraction, SlashCommandBuilder} from "discord.js";
import {useMainPlayer} from "discord-player";
import {BotCommands} from "@lib";

export const nowPlayingCommand = new SlashCommandBuilder()
    .setName(BotCommands.NOW_PLAYING)
    .setDescription('Display the currently playing song');

export const handleNowPlayingCommand = async (interaction: ChatInputCommandInteraction) => {
    const player = useMainPlayer();
    const queue = player.nodes.get(interaction.guild!.id);

    if (!queue) {
        return interaction.reply(
            'This server does not have an active player session.',
        );
    }

    const currentSong = queue.currentTrack;

    if (!currentSong) {
        return interaction.reply('No song is currently playing.');
    }

    return interaction.reply(`Now playing: ${currentSong.title}`);
}
