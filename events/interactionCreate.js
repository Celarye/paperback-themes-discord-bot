const { Events } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (interaction.isStringSelectMenu()) {
			console.log(interaction);
		}
		else if (interaction.isChatInputCommand()) {
			const command = interaction.client.commands.get(interaction.commandName);
			if (command) {
				try {
					await command.execute(interaction);
				}
				catch (error) {
					console.error(`Error executing ${interaction.commandName}`);
					console.error(error);
				}
			}
			else {
				console.error(`No command matching ${interaction.commandName} was found.`);
			}
		}
	},
};