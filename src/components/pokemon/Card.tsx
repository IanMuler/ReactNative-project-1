import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { PokemonSummary } from "../../api/types";
import { Screens } from "../../screens/types";
import { PokedexStackParamList } from "../../navigation/types";
import { getColorByPokemonType } from "../../utils/getColorByPokemonType";

const PokemonCard = ({ pokemon }: { pokemon: PokemonSummary }) => {
  const navigation: NavigationProp<PokedexStackParamList> = useNavigation();

  const backgroundColor = getColorByPokemonType(pokemon.type);
  const bgStyles = {
    backgroundColor,
    ...styles.bgStyles,
  };

  function goToPokemonDetails() {
    navigation.navigate(Screens.Pokemon, { id: pokemon.id });
  }

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
