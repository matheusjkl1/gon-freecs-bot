import express from 'express';
import {
  InteractionType,
  InteractionResponseType,
  InteractionResponseFlags,
  MessageComponentTypes,
  ButtonStyleTypes,
} from 'discord-interactions';
import timestamp from "get-timestamp-br";
import { VerifyDiscordRequest, getRandomEmoji, DiscordRequest } from './utils.js';
import { getShuffledOptions, getResult } from './game.js';
import {
  HasGuildCommands,
} from './commands.js';
import { comandsArray } from './build/mapCommands.js';

const app = express();
const PORT = process.env.PORT || 3050;
app.use(express.json({ verify: VerifyDiscordRequest(process.env.PUBLIC_KEY) }));

const activeGames = {};

/**
 * Handle slash command requests
 * See https://discord.com/developers/docs/interactions/application-commands#slash-commands
 */
app.post('/interactions', async function (req, res) {
  const { type, id, data } = req.body;
  if (type === InteractionType.PING) {
    return res.send({ type: InteractionResponseType.PONG });
  }
  if (type === InteractionType.APPLICATION_COMMAND) {
    const { name } = data;
    if (name === 'test') {
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: 'hello world ' + getRandomEmoji(),
        },
      });
    }

    if (name === 'hourbr') {
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: timestamp(),
        },
      });
    }
  }
});

app.listen(PORT, () => {
  console.log('Listening on port', PORT);

  // Check if guild commands from commands.json are installed (if not, install them)
  HasGuildCommands(process.env.APP_ID, process.env.GUILD_ID, comandsArray);
});
