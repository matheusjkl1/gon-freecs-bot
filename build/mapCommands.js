const TEST_COMMAND = {
  name: 'test',
  description: 'Basic guild command',
  type: 1,
};

const HOURS_COMMAND = {
  name: 'hourbr',
  description: 'Comando para ver a hora atual',
  type: 1,
};

export const CHALLENGE_COMMAND = {
  name: 'challenge',
  description: 'Challenge to a match of rock paper scissors',
  options: [
    {
      type: 3,
      name: 'object',
      description: 'Pick your object',
      required: true,
      choices: createCommandChoices(),
    },
  ],
  type: 1,
};

export const comandsArray = [
  TEST_COMMAND,
  HOURS_COMMAND,
  CHALLENGE_COMMAND
]
