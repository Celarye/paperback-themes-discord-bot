const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with the ping of the bot.'),
	async execute(interaction) {
		const sent = await interaction.reply({ content: `The current websocket latency is ${Math.round(interaction.client.ws.ping)}ms.`, fetchReply: true });
		await interaction.followUp(`The roundtrip latency is ${sent.createdTimestamp - interaction.createdTimestamp}ms.`);
	},
};