import { API_URL } from "@env";
import {
  PokemonPaginatedResponse,
  PokemonFull,
  PokemonSummary,
} from "../types";

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

  function summarizePokemon(pokemon_full: PokemonFull): PokemonSummary {
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

  return pokemons_full.then((pokemons_full) => {
    return pokemons_full.map((pokemon_full) => summarizePokemon(pokemon_full));
  });
};

export const get = {
  pokemon: fetchPokemon,
  pokemonsList: fetchPokemonsList,
  pokemonSummaries: getPokemonSummaries,
};
