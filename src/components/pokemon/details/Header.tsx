import { View, SafeAreaView, Text, Image, StyleSheet } from "react-native";
import { getColorByPokemonType } from "../../../utils/getColorByPokemonType";
import { PokemonSummary } from "../../../api/types";

interface IHeader extends Omit<PokemonSummary, "id"> {}

export const Header = ({ name, order, type, image }: IHeader) => {
  const color = getColorByPokemonType(type);
  const bgStyles = [{ backgroundColor: color, ...styles.bg }];

  return (
    <>
      <View style={bgStyles} />
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.order}>#{`${order}`.padStart(3, "0")}</Text>
        </View>
        <View style={styles.contentImg}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: 400,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  content: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
  },
  name: {
    color: "white",
    fontWeight: "bold",
    fontSize: 26,
    textTransform: "capitalize",
  },
  order: {
    color: "white",
    fontWeight: "bold",
  },
  contentImg: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: "contain",
  },
});
