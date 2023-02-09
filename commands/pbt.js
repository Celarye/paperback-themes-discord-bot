const { SlashCommandBuilder, ActionRowBuilder, EmbedBuilder, StringSelectMenuBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pbt')
		.setDescription('Replies with the main Paperback Themes embed message.'),
	async execute(interaction) {
		const embed = new EmbedBuilder()
			.setColor(0x005ff9)
			.setTitle('Paperback Themes')
			.setURL('https://github.com/Celarye/paperback-themes')
			.setAuthor({ name: 'Paperback Themes Bot', iconURL: 'https://i.imgur.com/bW0fbYm.png', url: 'https://github.com/Celarye/paperback-themes-discord-bot' })
			.setDescription('Customize Paperback using custom themes!')
			.setThumbnail('https://i.imgur.com/rlAbN6X.png')
			.addFields(
				{ name: '\n', value: '\n' },
				{ name: 'About this bot', value: 'This is a bot that can help you with anything regarding Paperback themes. Use the buttons to navigate to the following categories.' },
				{ name: '\n', value: '\n' },
				{ name: 'Themes list', value: 'The list of all public themes.' },
				{ name: 'FAQ', value: 'Frequently asked questions.' },
				{ name: 'Theme creation', value: 'A guide on theme creation.' },
				{ name: '\n', value: '\n' },
				{ name: 'Feedback', value: 'In case you found a bug or got a feature request.' },
			)
			.setImage('https://i.imgur.com/nghPvuP.png')
			.setTimestamp()
			.setFooter({ text: 'Made by Celarye', iconURL: 'https://s4.anilist.co/file/anilistcdn/user/avatar/large/b904129-W7zv0Ax1TFSP.png' });
		const selectMenu = new ActionRowBuilder()
			.addComponents(
				new StringSelectMenuBuilder()
					.setCustomId('selections')
					.setPlaceholder('Categories')
					.addOptions(
						{
							label: 'Themes list',
							description: 'The list of all public themes.',
							value: 'first_option',
						},
						{
							label: 'FAQ',
							description: 'Frequently asked questions.',
							value: 'second_option',
						},
						{
							label: 'Theme creation',
							description: 'A guide on theme creation.',
							value: 'third_option',
						},
						{
							label: 'Feedback',
							description: 'In case you found a bug or got a feature request.',
							value: 'fourth_option',
						},
					),
			);
		await interaction.reply({ embeds: [embed], components: [selectMenu], ephemeral: true });
	},
};