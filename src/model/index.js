const { dataUrl, riotApi } = require('../services/RiotApi')

export const getAllChamp = async () => {
  const request = await dataUrl
  .get('/cdn/11.15.1/data/pt_BR/champion.json')
  .then((response) => (response.data.data))
  .catch((err) => {
    console.log(err);
  });

  return request;
};

export const getFreeWeek = async () => {
  const request = await riotApi
  .get('/lol/platform/v3/champion-rotations',{
    headers: {
      'X-Riot-Token': `${process.env.RIOT_API_KEY}`,
      "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    }
  })
  return request.data.freeChampionIds;
};