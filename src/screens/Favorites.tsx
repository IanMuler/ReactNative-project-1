import { NavigationProp } from "@react-navigation/native";
import { Text, Button, View, StyleSheet } from "react-native";
import { RootStackParamList } from "../navigation/types";
import { Screens } from "./types";
import { SafeAreaView } from "react-native-safe-area-context";
import { usePokemonsFromFavorites } from "../api/pokemon";
import useUser from "../hooks/useUser";
import PokemonList from "../components/pokemon/List";

interface IFavoritesScreenProps {
  navigation: NavigationProp<RootStackParamList>;
}

const FavoritesScreen = ({ navigation }: IFavoritesScreenProps) => {
  const { data: pokemons, isLoading, isError } = usePokemonsFromFavorites();
  const { user } = useUser();

  const FavoritesScreenWithStatus = () => {
    if (isLoading) {
      return <Text>Loading...</Text>;
    }

    if (isError) {
      return <Text>Error</Text>;
    }

    if (pokemons && pokemons.length === 0) {
      return <Text>No hay pokemons en favoritos</Text>;
    }

    return <PokemonList pokemonList={pokemons!} loading={isLoading} />;
  };

  if (!user) {
    return (
      <View style={styles.goToLogin}>
        <Text>Debes iniciar sesión para ver tus favoritos</Text>
        <Button
          title="Iniciar sesión"
          onPress={() => navigation.navigate(Screens.Account)}
        />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <FavoritesScreenWithStatus />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  goToLogin: {
    flex: 1,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
