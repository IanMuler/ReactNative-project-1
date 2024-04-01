import { Text, Image, Alert } from "react-native";
import { usePokemon } from "../api/pokemon";
import { SafeAreaView } from "react-native-safe-area-context";
import { PokemonSummary } from "../api/types";
import { NavigationProp } from "@react-navigation/native";
import { useEffect } from "react";
import { PokedexStackParamList } from "../navigation/types";
import Details from "../components/pokemon/details";

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

  useEffect(() => {
    if (isError) {
      Alert.alert("Error", "No se pudo cargar el pokemon");
      navigation.goBack();
    }
  }, [isError]);

  return (
    <SafeAreaView>
      <Details pokemon={pokemon} loading={isLoading} />
    </SafeAreaView>
  );
};

export default PokemonScreen;
