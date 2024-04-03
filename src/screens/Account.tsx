import { SafeAreaView } from "react-native-safe-area-context";
import UserData from "../components/auth/user_data";
import LoginForm from "../components/auth/LoginForm";
import useUser from "../hooks/useUser";

const AccountScreen = () => {
  const { user } = useUser();

  return <SafeAreaView>{user ? <UserData /> : <LoginForm />}</SafeAreaView>;
};

export default AccountScreen;
