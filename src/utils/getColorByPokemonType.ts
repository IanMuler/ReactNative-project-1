import { PokemonSummary } from "../api/types";
import { POKEMON_TYPE_COLORS } from "./const";

export function getColorByPokemonType(type: PokemonSummary["type"]): string {
  return POKEMON_TYPE_COLORS[type as keyof typeof POKEMON_TYPE_COLORS];
}
