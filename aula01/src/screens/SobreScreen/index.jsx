import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles"; // Ensure path is correct

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá Mundo</Text>
    </View>
  );
}
