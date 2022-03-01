const fs = require("fs");
const { Client, Intents, MessageEmbed } = require("discord.js");
const dotenv = require("dotenv");

dotenv.config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const commands = {};
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands[command.data.name] = command;
}

client.once("ready", async () => {
  const data = [];
  for (const commandName in commands) {
    data.push(commands[commandName].data);
  }
  await client.application.commands.set(data);
  client.user.setActivity(`/help | ${client.guilds.cache.size} servers`, {
    type: "PLAYING",
  });
  console.log(
    `Bot is online and running in ${client.guilds.cache.size} servers!`
  );
});

client.on("guildCreate", (guild) => {
  const Embed = new MessageEmbed(guild)
    .setColor([88, 101, 242])
    .setTitle("Server Join Log")
    .setDescription(`${client.user.tag} has been added in ${guild.name}`)
    .addFields(
      {
        name: "Server Name / Server ID",
        value: `${guild.name} | (ID:${guild.id})`,
      },
      {
        name: "Owner name / ownerID",
        value: `${client.users.cache.get.name} | (ID:${guild.ownerID})`,
      }
    )
    .setFooter({ text: "Server Join Log", iconURL: client.user.avatarURL });

  client.channels.cache
    .get(process.env.BOT_JOIN_LOG_CHANNEL_ID)
    .send({ embeds: [Embed] });
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  }
  const command = commands[interaction.commandName];
  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: "There was an error while executing this command!",
      ephemeral: true,
    });
  }
});
client.login(process.env.BOT_TOKEN);
