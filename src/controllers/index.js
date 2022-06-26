import { InteractionType } from 'discord-interactions';
import { mapObject } from '../build/mapResponse.js';

// const { getAllChamp, getFreeWeek, } = require('../model')

export const postInteration = (req, res) => {
  const { type, data } = req.body;
  if (type === InteractionType.APPLICATION_COMMAND) {
    const { name } = data;

    return mapObject[name](res);
    // if (name === 'test') {
    //   return res.send({
    //     type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    //     data: {
    //       content: 'hello world ' + getRandomEmoji(),
    //     },
    //   });
    // }

    // if (name === 'hourbr') {
    //   return res.send({
    //     type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    //     data: {
    //       content: getTimestamp(),
    //     },
    //   });
    // }
  }
}

// export const freWeekList = async (_req, res, next) => {
//   try {
//     const champList = await getAllChamp();
//     const fwIdsList = await getFreeWeek();
//     const champAtributes = await Object.keys(champList).map((key) => (champList[key]));
//     const freeWeekListChamps = await champAtributes.filter((champ) => fwIdsList.includes(parseInt(champ.key)));
//     return res.status(200).json(freeWeekListChamps)
//   } catch (err) {
//     return next(err)
//   }
// };
