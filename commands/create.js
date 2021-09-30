// at the top of your file
const { MessageEmbed } = require('discord.js');
// inside a command, event listener, etc.
const createStoryOrTicket = async (client, message, args) => {
	console.log(args)
	let fullSentence = "";
	for (let i = 0; i < args.length; i++) {
		fullSentence += args[i];
    }
	console.log(fullSentence);

	let correctSentence = fullSentence.split(",");

	console.log(correctSentence);

	const type = correctSentence[0];
	const sDescr = correctSentence[1];
	const lDescr = correctSentence[2];
	const priority = correctSentence[3];

	if (type == "Story" || "Ticket") {
		
	} else {
		message.channel.send("Invalid arguments, check |help")
		throw new Error('User failed to enter the correct arguments');
	}
	

	const exampleEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle(type)
	.setURL('https://weflexit.com/')
	.setAuthor(message.member.user.tag, message.author.avatarURL(), 'https://discord.js.org')
	.setDescription(sDescr)
	.setThumbnail(message.guild.iconURL())
	.addFields(
		{ name: 'Short description', value: sDescr },
		{ name: 'Full description', value: lDescr },
		{ name: 'Priority', value: priority },
		{ name: 'Reporter', value: message.member.user.tag },
	)
	.setTimestamp()
	.setFooter(message.member.user.tag, message.author.avatarURL());

	message.channel.send({ embeds: [exampleEmbed] });
}

module.exports = createStoryOrTicket;