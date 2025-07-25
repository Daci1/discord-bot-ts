import {BotCommands} from "./bot-commands.enum";
import {ChatInputCommandInteraction, SlashCommandOptionsOnlyBuilder} from "discord.js";

export type BotCommandMap = {
    [key in (typeof BotCommands)[ keyof typeof BotCommands]]: {
        slashCommandBuilder: SlashCommandOptionsOnlyBuilder,
        handleFn: (interaction: ChatInputCommandInteraction) => Promise<any>
    }
}
