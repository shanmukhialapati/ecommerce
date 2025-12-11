import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./(pages)/CategoriesScreen";
import HomeScreen from "./(pages)/HomeScreen";
import "./global.css";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={CategoriesScreen} />
    </Stack.Navigator>
    //{" "}
    // </NavigationContainer>
  );
}
