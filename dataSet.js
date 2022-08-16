const fs = require("fs");
const champData = require("./data/champions.json");

const dirChamps = "./data/champions/";
const filenames = fs.readdirSync(dirChamps);

const getAllChampions = () => {
  return champData.map((champ) => procces(champ));
};

const procces = (champ) => {
  const url = getUrlImage(champ.championId);
  champ.url = url;
  return champ;
};

const getUrlImage = (name) => {
  const reg = new RegExp(name.toUpperCase());
  const url = filenames.filter((item) => item.toUpperCase().match(reg));
  return `${dirChamps}${url}`;
};

const championsCorrect = getAllChampions();

const getOneChampion = (name) => {
  const champion = championsCorrect.filter(
    (champ) => champ.name.toUpperCase() === name.toUpperCase()
  );
  return champion;
};

module.exports = {
  getAllChampions,
  getOneChampion,
};
