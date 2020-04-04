import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import GameScreen from "./screens/Game";
import StartScreen from "./screens/Start";
import PlayerAction from "./screens/PlayerAction";
import PlayerInputPBar from "./components/PlayerInputPBar";

export default function App() {
  return (
    <View style={styles.container}>
      <PlayerAction name={"Matt Cuento"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FBB969",
    height: "100%"
  }
});
