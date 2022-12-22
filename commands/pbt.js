const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pbt')
		.setDescription('Replies with the Paperback Themes embed message.'),
	async execute(interaction) {
		await interaction.reply('Test!');
	},
};