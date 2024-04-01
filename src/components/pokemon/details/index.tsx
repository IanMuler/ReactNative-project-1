import { Text } from "react-native";
import { PokemonFull } from "../../../api/types";
import { summarizePokemon } from "../../../utils/summarizePokemon";
import { Header } from "./Header";
import Type from "./Type";
import { Stats } from "./Stats";

interface IDetails {
  pokemon: PokemonFull | undefined;
  loading: boolean;
}

const Details = ({ pokemon, loading }: IDetails) => {
  if (loading) {
    return <Text>Cargando...</Text>;
  }

  if (!pokemon) {
    return <Text>No se encontró el pokemon</Text>;
  }

  const { name, order, type, image } = summarizePokemon(pokemon);

  return (
    <>
      <Header name={name} image={image} type={type} order={order} />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </>
  );
};

export default Details;
