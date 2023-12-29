import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder().setName('speak').setDescription('This is a practice command!')

export async function execute(interaction) {
    await interaction.reply('Hello world!')
};