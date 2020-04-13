import { connect } from "react-redux";
import React, { Component } from "react";
import { View, Text, StyleSheet, Platform, Alert } from "react-native";
import FailedVoteCounter from "../components/FailedVoteCounter";
import ImageOrTimer from "../components/ImageOrTimer";
import PlayerList from "../components/PlayersList";
import Scoreboard from "../components/Scoreboard";
import ButtonMenu from "../components/ButtonMenu";
import { NavigationContainer } from "@react-navigation/native";

class GameScreen extends Component {
  constructor(props) {
    super(props);

    this.navVote = this.navVote.bind(this);
    this.navStart = this.navStart.bind(this);
    this.navKill = this.navKill.bind(this);
  }

  navVote() {
    this.props.navigation.navigate("vote");
  }

  navStart() {
    this.props.navigation.navigate("start");
  }

  navKill() {
    this.props.navigation.navigate("killPlayer");
  }

  render() {
    return (
      <View>
        <FailedVoteCounter />
        <ImageOrTimer />
        <PlayerList
          handlePress={this.navAction}
          players={this.props.players}
          nav={this.props.navigation}
        />
        <Scoreboard newGame={this.navStart} kill={this.navKill} />
        <ButtonMenu vote={this.navVote} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    marginTop: 20,
    marginLeft: 10,
    width: 40,
    height: 40,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FBB969",
    height: "100%",
  },
});

const mapStateToProps = (state) => ({
  ...state.playerReducer,
  ...state.failedVoteReducer,
});

const mapDispatchToProps = (dispatch) => ({
  newPlayer: (player) => {
    dispatch(addPlayer(player));
  },
  killAPlayer: (player) => {
    console.log("kill player triggered");
    dispatch(killPlayer(player));
  },
  electNewChancellor: (player) => {
    console.log("elect chancellor triggered");
    dispatch(electChancellor(player));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
