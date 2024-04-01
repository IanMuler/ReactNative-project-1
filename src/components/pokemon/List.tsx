import {
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
  Platform,
} from "react-native";
import { PokemonSummary } from "../../api/types";
import PokemonCard from "./Card";

interface IPokemonListProps {
  pokemonList: PokemonSummary[];
  maxReached: boolean;
  loading: boolean;
  onEndReached: () => void;
}

const PokemonList = ({
  pokemonList,
  maxReached,
  loading,
  onEndReached,
}: IPokemonListProps) => {
  const load_pokemon_allowed =
    !loading && pokemonList.length > 0 && !maxReached;

  if (loading && pokemonList.length === 0) {
    return <Text>Cargando...</Text>;
  }

  if (pokemonList.length === 0) {
    return <Text>No hay pokemons</Text>;
  }

  return (
    <FlatList
      data={pokemonList}
      numColumns={2} // Cantidad de columnas
      showsVerticalScrollIndicator={false} // Ocultar el scroll
      keyExtractor={(pokemon) => String(pokemon.id)} // Key
      renderItem={({ item }) => <PokemonCard pokemon={item} key={item.id} />} // Renderizar
      contentContainerStyle={styles.flatListContainer}
      onEndReachedThreshold={0.1} // Cuando llega al 10% de la lista, se ejecuta la función onEndReached
      onEndReached={load_pokemon_allowed ? onEndReached : undefined} // Función que se ejecuta cuando llega al final de la lista
      ListFooterComponent={
        load_pokemon_allowed ? (
          <ActivityIndicator size="large" style={styles.spinner} /> // Componente que se muestra al final de la lista
        ) : null
      }
    />
  );
};
const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === "android" ? 10 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === "android" ? 90 : 60,
  },
});

export default PokemonList;
