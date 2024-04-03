import { Alert } from "react-native";
import { usePokemon } from "../api/pokemon";
import { SafeAreaView } from "react-native-safe-area-context";
import { PokemonSummary } from "../api/types";
import { NavigationProp } from "@react-navigation/native";
import { useEffect, useLayoutEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { PokedexStackParamList } from "../navigation/types";
import Details from "../components/pokemon/details";
import Favorites from "../components/pokemon/details/Favorites";
import useUser from "../hooks/useUser";

interface IPokemonScreenProps {
  navigation: NavigationProp<PokedexStackParamList>;
  route: {
    params: {
      id: PokemonSummary["id"];
    };
  };
}

const PokemonScreen = ({ navigation, route }: IPokemonScreenProps) => {
  const { id } = route.params;
  const { data: pokemon, isLoading, isError } = usePokemon(id);
  const { user } = useUser();

  useEffect(() => {
    if (isError) {
      Alert.alert("Error", "No se pudo cargar el pokemon");
      navigation.goBack();
    }
  }, [isError]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <AntDesign
          name="arrowleft"
          color="#fff"
          size={25}
          onPress={() => navigation.goBack()}
        />
      ),
      headerRight: () =>
        user && pokemon && <Favorites pokemonId={pokemon.id} />,
    });
  }, [navigation, user, pokemon]);

  return (
    <SafeAreaView>
      <Details pokemon={pokemon} loading={isLoading} />
    </SafeAreaView>
  );
};

export default PokemonScreen;
