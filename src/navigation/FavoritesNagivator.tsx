import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FavoritesStackParamList } from "./types";
import { Screens } from "../screens/types";
import Favorites from "../screens/Favorites";
import Pokemon from "../screens/Pokemon";

const Stack = createNativeStackNavigator<FavoritesStackParamList>();

const FavoritesNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerTransparent: true, headerTitle: "" }}
      initialRouteName={Screens.Favorites}
    >
      <Stack.Screen
        name={Screens.Favorites}
        component={Favorites}
        options={{ title: "Favoritos" }}
      />
      <Stack.Screen name={Screens.Pokemon} component={Pokemon} />
    </Stack.Navigator>
  );
};

export default FavoritesNavigator;
