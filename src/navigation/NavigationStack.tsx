import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import { Screens } from "../screens/types";
import FormScreen from "../screens/Form";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator<RootStackParamList>();

const NavigationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Screens.Home} component={Home} />
      <Stack.Screen name={Screens.Form} component={FormScreen} />
    </Stack.Navigator>
  );
};

export default NavigationStack;
