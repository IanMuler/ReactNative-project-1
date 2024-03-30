import { View, Text, Button, Image } from "react-native";
import { usePokemon } from "../api/pokemon";
import { SafeAreaView } from "react-native-safe-area-context";

const Pokemon = ({ navigation }: any) => {
  const { data: pokemon } = usePokemon(1);

  return (
    <SafeAreaView>
      <Text>{pokemon?.name}</Text>
      <Text>{pokemon?.height}</Text>
      <Text>{pokemon?.weight}</Text>
      <Image
        source={{ uri: pokemon?.sprites.front_default }}
        style={{ width: 100, height: 100 }}
      />
    </SafeAreaView>
  );
};

export default Pokemon;
