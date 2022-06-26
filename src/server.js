import dotenv from 'dotenv'
import express from 'express';


import { VerifyDiscordRequest } from './auth/discordAuth.js';
import { HasGuildCommands } from './services/index.js';
import { comandsArray } from './build/mapCommands.js';
import { getRandomEmoji } from './utils/index.js';
import { postInteration } from './controllers/index.js';
dotenv.config()

const app = express();
const PORT = process.env.PORT || 3050;
app.use(express.json({ verify: VerifyDiscordRequest(process.env.PUBLIC_KEY) }));

app.post('/interactions', postInteration);

app.listen(PORT, () => {
  console.log('Listening on port', PORT);

  // Check if guild commands from commands.json are installed (if not, install them)
  HasGuildCommands(process.env.APP_ID, process.env.GUILD_ID, comandsArray);
});
