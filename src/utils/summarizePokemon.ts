import { PokemonFull, PokemonSummary } from "../api/types";

export function summarizePokemon(pokemon_full: PokemonFull): PokemonSummary {
  return {
    id: pokemon_full.id,
    name: pokemon_full.name,
    type: pokemon_full.types[0].type.name,
    order: pokemon_full.order,
    image: pokemon_full.sprites.other
      ? pokemon_full.sprites.other["official-artwork"].front_default
      : "",
  };
}
