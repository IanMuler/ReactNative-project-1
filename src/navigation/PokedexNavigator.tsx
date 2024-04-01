import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PokedexStackParamList } from "./types";
import { Screens } from "../screens/types";
import Pokedex from "../screens/Pokedex";
import Pokemon from "../screens/Pokemon";

const Stack = createNativeStackNavigator<PokedexStackParamList>();

const PokedexNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerTransparent: true, headerTitle: "" }}
      initialRouteName={Screens.Pokedex}
    >
      <Stack.Screen name={Screens.Pokedex} component={Pokedex} />
      <Stack.Screen name={Screens.Pokemon} component={Pokemon} />
    </Stack.Navigator>
  );
};

export default PokedexNavigator;
