const { MessageEmbed } = require("discord.js");

const Embed = new MessageEmbed()
  .setColor([88, 101, 242])
  .setTitle("discordjs-sample")
  .addFields(
    {
      name: "Github Repository",
      value: "https://github.com/yutakobayashidev/discordjs-sample",
    },
    {
      name: "invite",
      value:
        "https://discord.com/api/oauth2/authorize?client_id=947872812146769930&permissions=18432&scope=applications.commands%20bot",
    }
  )
  .setFooter({ text: "discordjs-sample" });

module.exports = {
  data: {
    name: "help",
    description: "How to use the BOT",
  },
  async execute(interaction) {
    await interaction.reply({ embeds: [Embed] });
  },
};
