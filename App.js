import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import GameScreen from "./screens/Game";
import StartScreen from "./screens/Start";

export default function App() {
  return (
    <View style={styles.container}>
      <StartScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FBB969",
    height: "100%"
  }
});
