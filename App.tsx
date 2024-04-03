import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import NavigationTab from "./src/navigation/NavigationTab";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserProvider } from "./src/context/UserContext";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <UserProvider>
          <NavigationTab />
        </UserProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
