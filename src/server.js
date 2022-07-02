import { CHALLENGE_COMMAND, HasGuildCommands, TEST_COMMAND } from './utils/commands.js';
import app from './app.js';

// Get port, or default to 3000
const PORT = process.env.PORT || 3050;
// Parse request body and verifies incoming requests using discord-interactions package

app.listen(PORT, () => {
  console.log('Listening on port', PORT);

  // Check if guild commands from commands.json are installed (if not, install them)
  HasGuildCommands(process.env.APP_ID, process.env.GUILD_ID, [
    TEST_COMMAND,
    CHALLENGE_COMMAND,
  ]);
});