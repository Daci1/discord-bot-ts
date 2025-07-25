import {
    ChatInputCommandInteraction,
    GuildMember,
    SlashCommandBuilder
} from 'discord.js';
import {useMainPlayer} from "discord-player";
import {BotCommands} from "@lib";

export const stopCommand = new SlashCommandBuilder()
    .setName(BotCommands.STOP)
    .setDescription('Stop music and make the bot leave the voice channel');

export const handleStopCommand = async (interaction: ChatInputCommandInteraction) => {
    const member = interaction.member as GuildMember;
    const voiceChannel = member.voice.channel;

    if (!voiceChannel) {
        return interaction.reply({
            content: '❌ You need to be in a voice channel.',
            ephemeral: true
        });
    }

    const player = useMainPlayer();
    const queue = player.nodes.get(interaction.guild!.id);

    if (!queue || !queue.isPlaying()) {
        return interaction.reply({
            content: '❌ Nothing is currently playing.',
            ephemeral: true
        });
    }

    queue.delete();

    return interaction.reply('🛑 Stopped the music and left the voice channel.');
};
