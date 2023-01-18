const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('latency')
		.setDescription('Replies with the latency of the bot.')
		.addSubcommand(subcommand =>
			subcommand
				.setName('all')
				.setDescription('Replies with both the latencies of the bot.'))
		.addSubcommand(subcommand =>
			subcommand
				.setName('websocket')
				.setDescription('Replies with the websocket latency of the bot.'))
		.addSubcommand(subcommand =>
			subcommand
				.setName('roundtrip')
				.setDescription('Replies with the roundtrip latency of the bot.')),
	async execute(interaction) {
		if (interaction.options._subcommand == 'websocket') {
			await interaction.reply({ content: `The current websocket latency of the bot is ${Math.round(interaction.client.ws.ping)}ms.`, ephemeral: true });
		}
		else if (interaction.options._subcommand == 'roundtrip') {
			const sent = await interaction.reply({ content: 'Checking the roundtrip latency of the bot!', fetchReply: true, ephemeral: true });
			await interaction.followUp({ content: `The roundtrip latency of the bot is ${sent.createdTimestamp - interaction.createdTimestamp}ms.`, ephemeral: true });
		}
		else {
			const sent = await interaction.reply({ content: `The current websocket latency of the bot is ${Math.round(interaction.client.ws.ping)}ms.`, fetchReply: true, ephemeral: true });
			await interaction.followUp({ content: `The roundtrip latency of the bot is ${sent.createdTimestamp - interaction.createdTimestamp}ms.`, ephemeral: true });
		}
	},
};