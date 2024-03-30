import { View } from "react-native";
import LoginForm from "../components/LoginForm";

const FormScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <LoginForm />
    </View>
  );
};

export default FormScreen;
