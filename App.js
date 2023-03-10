import React from "react";
import {
  NativeBaseProvider,
} from "native-base";
import { Platform } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./components/Login";
import HomePage from "./components/homepage/index";
import Entries from './components/entries'
import OutPuts from "./components/outputs";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
          <Stack.Screen name="Ahorros" component={Entries} />
          <Stack.Screen name="Gastos" component={OutPuts} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
