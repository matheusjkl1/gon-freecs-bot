import timestamp from "get-timestamp-br";
import { InteractionResponseType } from 'discord-interactions';

import { getRandomEmoji } from "../utils/index.js";

export const mapObject = {
  'test': ({ res }) => res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: 'hello world ' + getRandomEmoji(),
    },
  }),
  'hourbr': ({ res }) => res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: timestamp(),
    },
  }),
}