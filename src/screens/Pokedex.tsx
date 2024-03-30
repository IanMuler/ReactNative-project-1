import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationProp } from "@react-navigation/native";
import { Button } from "react-native";
import PokemonList from "../components/pokemon/List";
import { usePokemonListWithDetails } from "../api/pokemon";
import { PokedexStackParamList } from "../navigation/types";
import { Screens } from "./types";

const Pokedex = ({
  navigation,
}: {
  navigation: NavigationProp<PokedexStackParamList>;
}) => {
  const { data: pokemons_list_details } = usePokemonListWithDetails({
    limit: 20,
    offset: 0,
  });

  return (
    <SafeAreaView>
      {pokemons_list_details && (
        <PokemonList pokemonList={pokemons_list_details} />
      )}
    </SafeAreaView>
  );
};

export default Pokedex;
