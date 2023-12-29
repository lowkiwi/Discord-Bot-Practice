import {Client, Events, GatewayIntentBits} from 'discord.js';
import {config} from 'dotenv';
import * as speakCommand from './Commands/speak.js'

config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds],
});

client.once(Events.ClientReady, loggedOn)

function loggedOn() {
    console.log('Successfully logged into discord!')
}

client.login(process.env.TOKEN);

async function handleInteraction(interaction) {
    if (!interaction.isCommand()) return;
    if (interaction.commandName ==='speak') {
        await speakCommand.execute(interaction);
    if (interaction.commandName ==='cowsay') {
        await cowsay.execute(interaction)
    }
    }
}

client.on(Events.InteractionCreate, handleInteraction);
