import Home from "./Screens/Home";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabNavigator } from "./Components/homeComponents/BottomTabNavigator";
import RestaurantDetails from "./Screens/RestaurantDetails";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./Redux/Store";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Store = configureStore();
  return (
    <ReduxProvider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Register"
            component={RegisterScreen}
          />

          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={BottomTabNavigator}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Restaurant"
            component={RestaurantDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
