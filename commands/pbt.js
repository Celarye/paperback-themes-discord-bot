const wait = require('node:timers/promises').setTimeout;
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pbt')
		.setDescription('Replies with the main Paperback Themes embed message.'),
	async execute(interaction) {
		await interaction.reply({ content:'Hello World!', ephemeral: true });
		await wait(4000);
		await interaction.followUp({ content: 'Test!', ephemeral: true });
		const message = await interaction.fetchReply();
		console.log(message);
		await wait(4000);
		await interaction.deleteReply();
		console.log('Finished the pbt command reply.');
	},
};