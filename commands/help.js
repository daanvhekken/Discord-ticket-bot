// at the top of your file
const { MessageEmbed } = require('discord.js');
// inside a command, event listener, etc.
const showTestMessage = async (client, message, args) => {

	const exampleEmbed = new MessageEmbed()
		.setColor('#0099ff')
		.setTitle('Help')
		.setURL('https://weflexit.com/')
		.setAuthor(message.member.user.tag, message.author.avatarURL(), 'https://discord.js.org')
		.setDescription('See all possible commands below')
		.setThumbnail(message.guild.iconURL())
		.addFields(
			{ name: '|help', value: 'Bot explanation and all commands' },
            { name: '|helpStory', value: 'Guide to creating, editing and deleting a story.' },
			{ name: '|helpTicket', value: 'Guide to creating editing and deleting a ticket.' },
		)
		.setTimestamp()
		.setFooter(message.member.user.tag, message.author.avatarURL());

	message.channel.send({ embeds: [exampleEmbed] });
}

module.exports = showTestMessage;