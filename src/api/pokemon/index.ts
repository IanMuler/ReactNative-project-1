import { useQuery } from "@tanstack/react-query";
import {
  PokemonFull,
  PokemonPaginatedResponse,
  PokemonSummary,
} from "../types";
import { get } from "./requests";

export const usePokemon = (id: PokemonFull["id"]) => {
  return useQuery<PokemonFull>({
    queryKey: ["pokemon", id],
    queryFn: () => get.pokemon(id),
  });
};

export const usePokemonsList = ({ limit = 20, offset = 0 }) => {
  return useQuery<PokemonPaginatedResponse>({
    queryKey: ["pokemonsList", limit, offset],
    queryFn: () => get.pokemonsList({ limit, offset }),
  });
};

export const usePokemonListWithDetails = ({ limit = 20, offset = 0 }) => {
  const { data: pokemons_list } = usePokemonsList({ limit, offset });

  return useQuery<PokemonSummary[]>({
    queryKey: ["pokemonsListWithDetails", limit, offset, pokemons_list],
    queryFn: () => get.pokemonSummaries(pokemons_list),
  });
};
