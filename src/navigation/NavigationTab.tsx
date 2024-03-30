import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { ScreenValue, Screens } from "../screens/types";
import Home from "../screens/Home";
import FormScreen from "../screens/Form";
import { AntDesign } from "@expo/vector-icons";
import { ParamListBase, RouteProp } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const getTabBarIcons = ({
  route,
  color,
  size,
}: {
  route: RouteProp<ParamListBase, string>;
  color: string;
  size: number;
}) => {
  const IconMap: Record<ScreenValue, keyof typeof AntDesign.glyphMap> = {
    [Screens.Home]: "home",
    [Screens.Form]: "form",
  };
  return (
    <AntDesign
      name={IconMap[route.name as ScreenValue]}
      size={size}
      color={color}
    />
  );
};

const getScreenOptions = (
  route: RouteProp<ParamListBase, string>
): BottomTabNavigationOptions => {
  return {
    tabBarIcon: ({ color, size }: { color: string; size: number }) =>
      getTabBarIcons({
        route,
        color,
        size,
      }), // Set the tab bar icons
    headerShown: false, // Hide the header
    tabBarStyle: {
      borderTopColor: "transparent",
    },
  };
};

const NavigationTab = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => getScreenOptions(route)}>
      <Tab.Screen name={Screens.Home} component={Home} />
      <Tab.Screen name={Screens.Form} component={FormScreen} />
    </Tab.Navigator>
  );
};

export default NavigationTab;
