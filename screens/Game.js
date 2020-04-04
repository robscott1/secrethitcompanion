import { connect } from "react-redux";
import React, { Component } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import FailedVoteCounter from "../components/FailedVoteCounter";
import ImageOrTimer from "../components/ImageOrTimer";
import PlayerList from "../components/PlayersList";
import Scoreboard from "../components/Scoreboard";
import ButtonMenu from "../components/ButtonMenu";
import { NavigationContainer } from "@react-navigation/native";

class GameScreen extends Component {
  render() {
    return (
      <View>
        <FailedVoteCounter />
        <ImageOrTimer />
        <PlayerList triggerAction={this.props.navigation.navigate} />
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

const mapStateToProps = state => ({
    ...state.playerReducer,
    ...state.failedVoteReducer
});

const mapDispatchToProps = dispatch => ({
  newPlayer: (player) => { dispatch(addPlayer(player)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);

