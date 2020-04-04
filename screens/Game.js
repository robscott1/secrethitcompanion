import { connect } from "react-redux";
import React, { Component } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import FailedVoteCounter from "../components/FailedVoteCounter";
import ImageOrTimer from "../components/ImageOrTimer";
import icon from "../assets/icon.png";
import PlayerList from "../components/PlayersList";
import Scoreboard from "../components/Scoreboard";
import ButtonMenu from "../components/ButtonMenu";

class GameScreen extends Component {
  static navigationOptions = () => ({
    title: 'Secret Hitler',
    headerStyle: {
      height: Platform.OS === 'android' ? 54 : 54,
      backgroundColor: "#434343"
    },
    headerTitleStyle: {
      margin: Platform.OS === 'android' ? 0 : 0,
      color: 'white'
    },
    headerLeft: <Image source={icon} style={styles.imageStyle}/>
  });

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
