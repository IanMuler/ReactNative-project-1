export const POKEMON_TYPE_COLORS = {
  normal: "#A8A878",
  fighting: "#C03028",
  flying: "#A890F0",
  poison: "#A040A0",
  ground: "#E0C068",
  rock: "#B8A038",
  bug: "#A8B820",
  ghost: "#705898",
  steel: "#B8B8D0",
  fire: "#FA6C6C",
  water: "#6890F0",
  grass: "#48CFB2",
  electric: "#FFCE4B",
  psychic: "#F85888",
  ice: "#98D8D8",
  dragon: "#7038F8",
  dark: "#705848",
  fairy: "#EE99AC",
};

export const barStyles = (num: number) => {
  let bgColorized;

  if (num <= 25) {
    bgColorized = "#ff3e3e";
  } else if (num > 25 && num < 50) {
    bgColorized = "#F08700";
  } else if (num >= 50 && num < 75) {
    bgColorized = "#EFCA08";
  } else if (num >= 75) {
    bgColorized = "#6EEB83";
  }
  return {
    backgroundColor: bgColorized,
    width: `${num}%`,
  };
};
