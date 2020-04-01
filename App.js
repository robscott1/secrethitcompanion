import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import FailedVoteCounter from "./components/FailedVoteCounter";
import ImageOrTimer from "./components/ImageOrTimer";
import PlayerList from "./components/PlayersList";
import Scoreboard from "./components/Scoreboard";
import ButtonMenu from "./components/ButtonMenu";

export default function App() {
  return (
    <View style={styles.container}>
      <FailedVoteCounter />
      <ImageOrTimer />
      <PlayerList />
      <Scoreboard />
      <ButtonMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FBB969",
    height: "100%"
  }
});
