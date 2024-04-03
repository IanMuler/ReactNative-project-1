import AsyncStorage from "@react-native-async-storage/async-storage";
import { summarizePokemon } from "../../utils/summarizePokemon";
import {
  PokemonFull,
  PokemonListQuery,
  PokemonPaginatedResponse,
  PokemonSummary,
  Storage,
} from "../types";
// import { paths as PathsValues } from "../../../generated_types/types";

// // const paths: Record<string, keyof PathsValues> = {
// //   pokemon_id: "/pokemon/{id}",
// //   pokemon: "/pokemon",
// // };

const fetchPokemon = async (id: number): Promise<PokemonFull> => {
  const response = await fetch(
    `${process.env.EXPO_PUBLIC_API_URL}/pokemon/${id}`
  );
  const data = await response.json();
  return data;
};

const fetchPokemonsList = async ({
  limit = 20,
  offset = 0,
}: PokemonListQuery = {}): Promise<PokemonPaginatedResponse> => {
  const response = await fetch(
    `${process.env.EXPO_PUBLIC_API_URL}/pokemon?limit=${limit}&offset=${offset}`
  );
  const data = await response.json();
  return data;
};

const getPokemonSummaries = async (
  pokemonIds: number[]
): Promise<PokemonSummary[]> => {
  const pokemonsFull = await Promise.all(
    pokemonIds.map((id) => fetchPokemon(id))
  );
  return pokemonsFull.map((pokemonFull) => summarizePokemon(pokemonFull));
};

const getPokemonIdsFromFavorites = async (): Promise<number[]> => {
  const favorites = await AsyncStorage.getItem(Storage.FAVORITES);
  return favorites ? JSON.parse(favorites) : [];
};

const addPokemonToFavorites = async (id: number) => {
  const favorites = await AsyncStorage.getItem(Storage.FAVORITES);
  const favoritesArray = favorites ? JSON.parse(favorites) : [];
  if (!favoritesArray.includes(id)) {
    favoritesArray.push(id);
  }
  await AsyncStorage.setItem(Storage.FAVORITES, JSON.stringify(favoritesArray));
};

const removePokemonFromFavorites = async (id: number) => {
  const favorites = await AsyncStorage.getItem(Storage.FAVORITES);
  const favoritesArray = favorites ? JSON.parse(favorites) : [];
  const filteredFavorites = favoritesArray.filter(
    (favorite: number) => favorite !== id
  );
  await AsyncStorage.setItem(
    Storage.FAVORITES,
    JSON.stringify(filteredFavorites)
  );
};

export const get = {
  pokemon: fetchPokemon,
  pokemonsList: fetchPokemonsList,
  pokemonSummaries: getPokemonSummaries,
  pokemonIdsFromFavorites: getPokemonIdsFromFavorites,
};

export const add = {
  pokemonToFavorites: addPokemonToFavorites,
};

export const remove = {
  pokemonFromFavorites: removePokemonFromFavorites,
};
