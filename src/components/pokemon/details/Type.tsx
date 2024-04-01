import { View, Text, StyleSheet } from "react-native";
import { getColorByPokemonType } from "../../../utils/getColorByPokemonType";
import { PokemonFull } from "../../../api/types";

interface IType {
  types: PokemonFull["types"];
}

export default function Type({ types }: IType) {
  const color = (type: string) => getColorByPokemonType(type);

  return (
    <View style={styles.content}>
      {types.map((item) => (
        <View
          key={item.type.name}
          style={{ backgroundColor: color(item.type.name), ...styles.pill }}
        >
          <Text style={{ textTransform: "capitalize" }}>{item.type.name}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
});
