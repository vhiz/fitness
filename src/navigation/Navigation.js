import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Welcome from "../components/Welcome";
import Home from "../screens/Home";
import Exercise from "../screens/Exercise";
import ExerciseDetails from "../screens/ExerciseDetails";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
          statusBarStyl: "auto",
          animation: "flip",
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Exercise"
          options={{
            presentation: "fullScreenModal",
          }}
          component={Exercise}
        />
        <Stack.Screen
          name="ExerciseDetails"
          options={{
            presentation: "modal",
          }}
          component={ExerciseDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
