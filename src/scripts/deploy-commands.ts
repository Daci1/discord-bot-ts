import * as dotenv from 'dotenv';
import { REST, Routes } from 'discord.js';
import { CommandsMap } from '@commands';

dotenv.config();

const commands = Object.values(CommandsMap).map(value => value.slashCommandBuilder.toJSON());

const rest = new REST().setToken(process.env.DISCORD_BOT_TOKEN!);

(async () => {
  try {
    console.log('🌍 Deploying global slash commands...');

    await rest.put(Routes.applicationCommands(process.env.DISCORD_APPLICATION_ID!), {
      body: commands,
    });

    console.log('✅ Global commands deployed (may take up to 1 hour).');
  } catch (error) {
    console.error('❌ Error deploying commands:', error);
  }
})();
