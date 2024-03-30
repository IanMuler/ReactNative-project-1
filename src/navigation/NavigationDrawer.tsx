import { createDrawerNavigator } from "@react-navigation/drawer";
import { Screens } from "../screens/types";
import FormScreen from "../screens/Form";
import Home from "../screens/Home";

const Drawer = createDrawerNavigator();

const NavigationDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name={Screens.Home} component={Home} />
      <Drawer.Screen name={Screens.Form} component={FormScreen} />
    </Drawer.Navigator>
  );
};

export default NavigationDrawer;
