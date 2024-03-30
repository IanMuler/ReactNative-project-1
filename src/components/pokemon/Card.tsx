import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { PokemonSummary } from "../../api/types";
import { POKEMON_TYPE_COLORS } from "../../utils/const";

function goToPokemonDetails() {
  console.log("Go to Pokemon Details");
}

const PokemonCard = ({ pokemon }: { pokemon: PokemonSummary }) => {
  const bgStyles = {
    backgroundColor:
      POKEMON_TYPE_COLORS[pokemon.type as keyof typeof POKEMON_TYPE_COLORS],
    ...styles.bgStyles,
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemonDetails}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>
              #{`${pokemon.id}`.padStart(3, "0")}
            </Text>
            <Text style={styles.name}>{pokemon.name}</Text>
            <Image
              style={styles.image}
              source={{
                uri: pokemon.image,
              }}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "white",
    fontSize: 11,
  },
  name: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    paddingTop: 10,
    textTransform: "capitalize",
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
});

export default PokemonCard;
