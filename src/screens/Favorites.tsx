import { NavigationProp } from "@react-navigation/native";
import { Text, Button, ScrollView } from "react-native";
import { RootStackParamList } from "../navigation/types";
import { Screens } from "./types";
import { SafeAreaView } from "react-native-safe-area-context";

const FavoritesScreen = ({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>;
}) => {
  return (
    <SafeAreaView>
      <Button title="Favoritos" />
    </SafeAreaView>
  );
};

export default FavoritesScreen;
