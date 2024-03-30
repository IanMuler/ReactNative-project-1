import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { PrincipalScreenValue, Screens } from "../screens/types";
import { AntDesign } from "@expo/vector-icons";
import { RootStackParamList, Route } from "./types";
import FavoritesScreen from "../screens/Favorites";
import AccountScreen from "../screens/Account";
import { Image } from "react-native";
import PokedexNavigation from "./PokedexNavigator";

const Tab = createBottomTabNavigator<RootStackParamList>();

const PokedexIcon = (
  <Image
    source={require("../../assets/pokeball.png")}
    style={{ width: 70, height: 70, top: -15, borderRadius: 50 }}
  />
);

// Icons
const IconMap: Record<
  PrincipalScreenValue,
  keyof typeof AntDesign.glyphMap | JSX.Element
> = {
  [Screens.PokedexNavigator]: PokedexIcon,
  [Screens.Favorites]: "heart",
  [Screens.Account]: "user",
};

// Labels
const LabelMap: Record<PrincipalScreenValue, string> = {
  [Screens.PokedexNavigator]: "",
  [Screens.Favorites]: "Favoritos",
  [Screens.Account]: "Cuenta",
};

const getTabBarIcons = ({
  route,
  color,
  size,
}: {
  route: Route;
  color: string;
  size: number;
}) => {
  const route_name = route.name as PrincipalScreenValue;

  if (typeof IconMap[route_name] === "string") {
    return (
      <AntDesign
        name={IconMap[route_name] as keyof typeof AntDesign.glyphMap}
        size={size}
        color={color}
      />
    );
  } else {
    return IconMap[route_name];
  }
};

const getTabBarLabel = (route: Route) => {
  const route_name = route.name as PrincipalScreenValue;
  return LabelMap[route_name];
};

const getScreenOptions = (route: Route): BottomTabNavigationOptions => {
  return {
    tabBarIcon: ({ color, size }: { color: string; size: number }) =>
      getTabBarIcons({ route, color, size }), // Set the tab bar icons
    tabBarLabel: getTabBarLabel(route), // Set the tab bar label
    tabBarStyle: {
      borderTopColor: "transparent",
    },
    headerShown: false, // Hide the header
  };
};

const NavigationTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => getScreenOptions(route)}
      initialRouteName={Screens.PokedexNavigator}
    >
      <Tab.Screen name={Screens.Favorites} component={FavoritesScreen} />
      <Tab.Screen
        name={Screens.PokedexNavigator}
        component={PokedexNavigation}
      />
      <Tab.Screen name={Screens.Account} component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default NavigationTab;
