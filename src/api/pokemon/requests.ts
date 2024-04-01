import { API_URL } from "@env";
import { PokemonPaginatedResponse, PokemonFull } from "../types";
import { summarizePokemon } from "../../utils/summarizePokemon";

const fetchPokemon = (id: PokemonFull["id"]) => {
  return fetch(`${API_URL}/pokemon/${id}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

const fetchPokemonsList = ({ limit = 20, offset = 0 }) => {
  return fetch(`${API_URL}/pokemon?limit=${limit}&offset=${offset}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

const getPokemonSummaries = (
  pokemons_list: PokemonPaginatedResponse | undefined
) => {
  if (!pokemons_list) {
    return [];
  }

  const ids = pokemons_list.results.map((pokemon) => {
    const id = Number(pokemon.url.split("/").filter(Boolean).pop());
    return id;
  });

  const pokemons_full = Promise.all(ids.map((id) => fetchPokemon(id)));

  return pokemons_full.then((pokemons_full) => {
    return pokemons_full.map((pokemon_full) => summarizePokemon(pokemon_full));
  });
};

export const get = {
  pokemon: fetchPokemon,
  pokemonsList: fetchPokemonsList,
  pokemonSummaries: getPokemonSummaries,
};
