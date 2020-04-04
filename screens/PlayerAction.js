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

  killPlayer(player) {
    this.props.killPlayer(player);
    this.props.navigation.navigate("game");
  }

  electChancellor(player) {
    this.props.electChancellor(player);
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
          onPress={this.electChancellor(this.props.player)}
        />
        <KillBtn
          name={this.props.player}
          style={styles.btn}
          onPress={this.killPlayer(this.props.player)}
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
  killPlayer: (player) => {
    dispatch(killPlayer(player));
  },
  electChancellor: (player) => {
    dispatch(electChancellor(player));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerActionScreen);
