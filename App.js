import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import FailedVoteCounter from "./components/FailedVoteCounter";
import ImageOrTimer from "./components/ImageOrTimer";
import PlayerList from "./components/PlayersList";

export default function App() {
  return (
    <View style={styles.container}>
      <FailedVoteCounter />
      <ImageOrTimer />
      <PlayerList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "beige",
    height: "100%"
  }
});
