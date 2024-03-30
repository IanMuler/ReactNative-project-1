import { StyleSheet, Text, FlatList } from "react-native";
import { PokemonSummary } from "../../api/types";
import PokemonCard from "./Card";

interface IPokemonListProps {
  pokemonList: PokemonSummary[];
}

const PokemonList = ({ pokemonList }: IPokemonListProps) => {
  return (
    <FlatList
      data={pokemonList}
      numColumns={2} // Cantidad de columnas
      showsVerticalScrollIndicator={false} // Ocultar el scroll
      keyExtractor={(pokemon) => String(pokemon.id)} // Key
      renderItem={({ item }) => <PokemonCard pokemon={item} />} // Renderizar
      contentContainerStyle={styles.flatListContainer}
    />
  );
};
const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: 5,
  },
});

export default PokemonList;
