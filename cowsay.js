import { SlashCommandBuilder } from "discord.js";
import * as cowsay from 'cowsay'

export const data = new SlashCommandBuilder().setName('cowsay').setDescription('Cow says things!')

export async function execute(interaction) {
    await interaction.reply(cowsay.say({
        text : 'Hello world!',
        e : 'oO',
        T : 'U '
    }))
};
