import { InteractionResponseType, InteractionType } from 'discord-interactions';
import { Router } from 'express';
import { getRandomEmoji } from './utils/index.js';

const router = Router();

router.post('/interactions', async function (req, res) {
  console.log({ req, res });
  // Interaction type and data
  const { type, data } = req.body;

  /**
   * Handle verification requests
   */
  if (type === InteractionType.PING) {
    return res.send({ type: InteractionResponseType.PONG });
  }

  /**
   * Handle slash command requests
   * See https://discord.com/developers/docs/interactions/application-commands#slash-commands
   */
  if (type === InteractionType.APPLICATION_COMMAND) {
    const { name } = data;

    // "test" guild command
    if (name === 'test') {
      // Send a message into the channel where command was triggered from
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          // Fetches a random emoji to send from a helper function
          content: 'hello world ' + getRandomEmoji(),
        },
      });
    }
  }
});

router.get('/', async function (req, res) {
  res.send({
    message: "Ok, everything working!",
    PUBLIC_KEY: process.env.PUBLIC_KEY,
    APP_ID: process.env.APP_ID,
    BOT_NAME: process.env.BOT_NAME,
  })
});


export default router;