import { ParamListBase, RouteProp } from "@react-navigation/native";
import { Screens } from "../screens/types";

export type RootStackParamList = {
  [Screens.PokedexNavigator]: undefined;
  [Screens.Favorites]: undefined;
  [Screens.Account]: undefined;
};

export type PokedexStackParamList = {
  [Screens.Pokedex]: undefined;
  [Screens.Pokemon]: undefined;
};

export type Route = RouteProp<ParamListBase, string>;
