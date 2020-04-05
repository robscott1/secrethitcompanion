import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import FailedVoteCounter from "../components/FailedVoteCounter";
import ImageOrTimer from "../components/ImageOrTimer";
import ElectBtn from "../components/ElectBtn";
import KillBtn from "../components/KillBtn";
import { render } from "react-dom";
import { connect } from "react-redux";

class PlayerActionScreen extends Component {
  constructor(props) {
    super(props);

    this.killPlayer = this.killPlayer.bind(this);
    this.electChancellor = this.electChancellor.bind(this);
  }

  state = {};

  // both of these use redux's mapStateToProps to pass
  // along the array of players

  killPlayer() {
    console.log("kill player triggered...");
    this.props.killAPlayer(this.props.player);
    this.props.navigation.navigate("game");
  }

  electChancellor() {
    console.log("elect chancellor triggered..");
    this.props.electNewChancellor(this.props.player);
    this.props.navigation.navigate("game");
  }

  render() {
    return (
      <View style={styles.container}>
        <FailedVoteCounter />
        <ImageOrTimer />
        <ElectBtn
          name={this.props.player}
          style={styles.btn}
          onPress={this.propos.electNewChancellor}
        />
        <KillBtn
          name={this.props.player}
          style={styles.btn}
          onPress={this.killPlayer}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#434343",
    height: "100%",
    width: "100%",
    padding: 5,
  },
  btn: {
    paddingHorizontal: 20,
    marginVertical: 45,
  },
});

const mapStateToProps = (state) => ({
  ...state.playerReducer,
});

const mapDispatchToProps = (dispatch) => ({
  killAPlayer: (player) => {
    dispatch(killPlayer(player));
  },
  electNewChancellor: (player) => {
    dispatch(electChancellor(player));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerActionScreen);
