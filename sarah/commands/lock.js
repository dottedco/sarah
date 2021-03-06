const {  MessageEmbed, Permissions  } = require('discord.js');

let lockcmd = async (message, args, client, _, __) => {
    let channel = null;
    try {
      channel = message.guild.channels.cache.get(args[0].slice(2, -1))
    } catch (error) {
      channel = message.channel
    }
    await channel.permissionOverwrites.edit(message.guild.id, {
      SEND_MESSAGES: false
    }).catch(err => console.log(err))

    const lock = new MessageEmbed()
    .setTitle(":lock:Locked channel:lock:")
    .setDescription(`${message.channel} has been locked`)
    .setColor("DARK_GREY")
    .setThumbnail(message.guild.iconURL())
    .addField(`Locked by:`, `${message.author.tag}`)
    .setTimestamp()

    await message.channel.send({embeds: [lock] })
}

module.exports.lockcmd = lockcmd