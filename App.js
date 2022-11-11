import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import Feedback from "./src/screens/Feedback";
import Home from "./src/screens/Home";
import Map from "./src/screens/Map";

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

function FeedbackScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Feedback />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

function MapScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Map />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {<Stack.Screen name="Home" component={HomeScreen} />}
        {<Stack.Screen name="Feedback" component={FeedbackScreen} />}
        {<Stack.Screen name="Map" component={MapScreen} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
