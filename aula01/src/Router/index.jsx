import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import Sobre from "../screens/SobreScreen";

// Escolha a navegação correta
const isTabNav = false; // Defina `true` para usar Bottom Tab, `false` para Drawer

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const Navigator = isTabNav ? Tab.Navigator : Drawer.Navigator;
  const Screen = isTabNav ? Tab.Screen : Drawer.Screen;

  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Sobre" component={Sobre} />
      </Navigator>
    </NavigationContainer>
  );
}
