import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PokemonList from "../components/pokemon/List";
import { usePokemonListWithDetails } from "../api/pokemon";
import { PokemonSummary } from "../api/types";

const Pokedex = () => {
  const MAX_POKEMON = 150;
  const LIMIT = 20;
  const [offset, setOffset] = useState(0);
  const [pokemon_list_acc, setPokemonListAcc] = useState<PokemonSummary[]>([]);

  const { data: pokemons_list_details, isLoading } = usePokemonListWithDetails({
    limit: LIMIT,
    offset,
  });

  useEffect(() => {
    if (pokemons_list_details) {
      setPokemonListAcc((prev_pokemon_list: PokemonSummary[]) => [
        ...prev_pokemon_list,
        ...pokemons_list_details,
      ]);
    }
  }, [pokemons_list_details]);

  const handleEndReached = () => {
    setOffset((prevOffset) => prevOffset + LIMIT);
  };

  return (
    <SafeAreaView>
      <PokemonList
        pokemonList={pokemon_list_acc}
        maxReached={pokemon_list_acc.length >= MAX_POKEMON}
        loading={isLoading}
        onEndReached={handleEndReached}
      />
    </SafeAreaView>
  );
};

export default Pokedex;
