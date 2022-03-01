# discordjs-sample

<p>
    <a href="https://discord.gg/HjJCwm5">
        <img src="https://img.shields.io/discord/911995628018606140?logo=discord"
            alt="chat on Discord"></a>
</p>

Discord.js starter kit.

## Demo

You can invite the BOT from the following URL.

https://discord.com/api/oauth2/authorize?client_id=947872812146769930&permissions=18432&scope=applications.commands%20bot

## Function

- Notify a specific channel when a BOT is added to the server.
- You can enter the /help command.

## Usage

### environment variable

Create .env with the following contents on project root dir.

```bash
BOT_TOKEN='foo' # Discord BOT TOKEN
BOT_JOIN_LOG_CHANNEL_ID='bar' # Channel ID to be notified
```

### start

Execute the following command in a terminal

```bash
# install packages
$ npm install
# start local server
$ node index.js
Bot is online and running in 0 servers!
```

## BOT Development Server

https://discord.gg/S2w4tAZCxC
