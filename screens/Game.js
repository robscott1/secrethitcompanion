import { connect } from "react-redux";
import React, { Component } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import FailedVoteCounter from "../components/FailedVoteCounter";
import ImageOrTimer from "../components/ImageOrTimer";
import PlayerList from "../components/PlayersList";
import Scoreboard from "../components/Scoreboard";
import ButtonMenu from "../components/ButtonMenu";

class GameScreen extends Component {
  static navigationOptions = {
    title: 'hello',
    headerLeft: null
  }

  state = {
  };

  render() {
    return (
      <View>
        <FailedVoteCounter />
        <ImageOrTimer />
        <PlayerList />
        <Scoreboard />
        <ButtonMenu />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    marginTop: 20,
    marginLeft: 10,
    width: 40,
    height: 40
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FBB969",
    height: "100%"
  }
});

export default GameScreen;
