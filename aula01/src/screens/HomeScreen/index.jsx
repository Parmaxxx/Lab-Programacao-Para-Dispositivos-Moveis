import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
//import Button from "../../components/Button"

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-Vindo ao meuApp!</Text>
    </View>
  );
};

export default HomeScreen;
