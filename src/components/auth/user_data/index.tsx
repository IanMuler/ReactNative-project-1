import React from "react";
import { StyleSheet, View, Text } from "react-native";
import useUser from "../../../hooks/useUser";
import CustomButton from "./customButton";
import { usePokemonIdsFromFavorites } from "../../../api/pokemon";

export default function UserData() {
  const { user, logout } = useUser();

  const { firstName, lastName, username, email } = user!;
  const { data: pokemon_ids_favorites } = usePokemonIdsFromFavorites();

  const totalFavorites = pokemon_ids_favorites
    ? pokemon_ids_favorites.length
    : 0;

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Bienvenido,</Text>
        <Text style={styles.title}>{`${firstName} ${lastName}`}</Text>
      </View>

      <View style={styles.dataContent}>
        <ItemMenu title="Nombre" text={`${firstName} ${lastName}`} />
        <ItemMenu title="Username" text={username} />
        <ItemMenu title="Email" text={email} />
        <ItemMenu title="Total Favoritos" text={`${totalFavorites} pokemons`} />
      </View>

      <CustomButton title="Desconectarse" handleOnPress={logout} />
    </View>
  );
}

function ItemMenu({ title, text }: { title: string; text: string }) {
  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}:</Text>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#CFCFCF",
  },
  itemMenuTitle: {
    fontWeight: "bold",
    paddingRight: 10,
    width: 120,
  },
});
