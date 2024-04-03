import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { PokemonFull } from "../../../api/types";
import {
  useAddPokemonToFavoritesMutation,
  useRemovePokemonFromFavoritesMutation,
  usePokemonIdsFromFavorites,
} from "../../../api/pokemon";

interface IFavoriteProps {
  pokemonId: PokemonFull["id"];
}

const Favorites = ({ pokemonId }: IFavoriteProps) => {
  const { data: pokemon_ids_favorites } = usePokemonIdsFromFavorites();
  const { mutate: addFavorite } = useAddPokemonToFavoritesMutation();
  const { mutate: removeFavorite } = useRemovePokemonFromFavoritesMutation();

  const isFavorite = pokemon_ids_favorites?.includes(pokemonId);

  const handlePress = () =>
    isFavorite ? removeFavorite(pokemonId) : addFavorite(pokemonId);

  return (
    <AntDesign
      name={isFavorite ? "heart" : "hearto"}
      color="#fff"
      size={25}
      style={{ marginRight: 20 }}
      onPress={handlePress}
    />
  );
};

export default Favorites;
