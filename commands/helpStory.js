// at the top of your file
const { MessageEmbed } = require('discord.js');
// inside a command, event listener, etc.
const showTestMessage = async (client, message, args) => {

	const exampleEmbed = new MessageEmbed()
		.setColor('#0099ff')
		.setTitle('Story Help')
		.setURL('https://weflexit.com/')
		.setAuthor(message.member.user.tag, message.author.avatarURL(), 'https://discord.js.org')
		.setDescription('See all possible commands below')
		.setThumbnail(message.guild.iconURL())
		.addFields(
            { name: '|create', value: 'create a story by supplying the following arguments:, Type, ShortExplanation, + full description + priority' },
			{ name: 'Your command should look like the following example', value: '|create Story, add privacy policy, The server stopped working after updating, 10' },
		)
		.setTimestamp()
		.setFooter(message.member.user.tag, message.author.avatarURL());

	message.channel.send({ embeds: [exampleEmbed] });
}

module.exports = showTestMessage;