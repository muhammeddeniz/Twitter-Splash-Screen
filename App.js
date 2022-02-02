import * as React from "react";

import { View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "./src/SplashScreen";

function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,

        alignItems: "center",

        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 28 }}>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ animation: "none", headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="Splash" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
