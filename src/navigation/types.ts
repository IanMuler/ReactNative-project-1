import { ParamListBase, RouteProp } from "@react-navigation/native";
import { Screens } from "../screens/types";
import { PokemonSummary } from "../api/types";

export type RootStackParamList = {
  [Screens.PokedexNavigator]: undefined;
  [Screens.FavoritesNavigator]: undefined;
  [Screens.Account]: undefined;
};

export type PokedexStackParamList = {
  [Screens.Pokedex]: undefined;
  [Screens.Pokemon]: { id: PokemonSummary["id"] };
};

export type FavoritesStackParamList = {
  [Screens.Favorites]: undefined;
  [Screens.Pokemon]: { id: PokemonSummary["id"] };
};

export type Route = RouteProp<ParamListBase, string>;
