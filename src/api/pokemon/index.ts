import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  PokemonFull,
  PokemonPaginatedResponse,
  PokemonSummary,
} from "../types";
import { get, add, remove } from "./requests";

export const usePokemon = (id: PokemonFull["id"]) => {
  return useQuery<PokemonFull>({
    queryKey: ["pokemon", id],
    queryFn: () => get.pokemon(id!),
  });
};
export const usePokemonsList = ({
  limit,
  offset,
}: {
  limit: number;
  offset: number;
}) => {
  return useQuery<PokemonPaginatedResponse>({
    queryKey: ["pokemonsList", limit, offset],
    queryFn: () => get.pokemonsList({ limit, offset }),
  });
};

export const usePokemonListWithDetails = ({ limit = 20, offset = 0 }) => {
  const { data: pokemons_list } = usePokemonsList({ limit, offset });

  const pokemon_ids =
    pokemons_list?.results!.map((pokemon) =>
      Number(pokemon.url!.split("/")[6])
    ) || [];

  return useQuery<PokemonSummary[]>({
    queryKey: ["pokemonsListWithDetails", pokemons_list],
    queryFn: () => get.pokemonSummaries(pokemon_ids),
  });
};

export const usePokemonIdsFromFavorites = () => {
  return useQuery<PokemonFull["id"][]>({
    queryKey: ["pokemonIdsFromFavorites"],
    queryFn: get.pokemonIdsFromFavorites,
  });
};

export const usePokemonsFromFavorites = () => {
  const { data: pokemon_ids_favorites } = usePokemonIdsFromFavorites();

  return useQuery<PokemonSummary[]>({
    queryKey: ["pokemonsFromFavorites", pokemon_ids_favorites],
    queryFn: () =>
      get.pokemonSummaries((pokemon_ids_favorites as number[]) || []),
  });
};

export const useAddPokemonToFavoritesMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: PokemonFull["id"]) => add.pokemonToFavorites(id!),
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["pokemonIdsFromFavorites"],
      });
    },
  });
};

export const useRemovePokemonFromFavoritesMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: PokemonFull["id"]) => remove.pokemonFromFavorites(id!),
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["pokemonIdsFromFavorites"],
      });
    },
  });
};
