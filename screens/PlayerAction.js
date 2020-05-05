import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import FailedVoteCounter from "../components/FailedVoteCounter";
import ImageOrTimer from "../components/ImageOrTimer";
import ElectBtn from "../components/ElectBtn";
import KillBtn from "../components/KillBtn";
import { render } from "react-dom";
import { connect } from "react-redux";
import { electDuke } from "../actions";
import { killPlayer } from "../actions";

class PlayerActionScreen extends Component {
  constructor(props) {
    super(props);

    this.kill = this.kill.bind(this);
    this.elect = this.elect.bind(this);
  }

  state = {};

  // both of these use redux's mapStateToProps to pass
  // along the array of players

  kill(player) {
    console.log("kill player triggered...");
    this.props.killAPlayer(player);
    this.props.navigation.navigate("game");
  }

  elect(player) {
    console.log("elect Duke triggered..");
    this.props.electNewDuke(player);
    this.props.navigation.navigate("game");
  }

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <FailedVoteCounter />
        <ImageOrTimer />
        <ElectBtn
          name={this.props.spotLight}
          style={styles.btn}
          //onPress={this.elect(item)}
        />
        <KillBtn
          name={this.props.spotLight}
          style={styles.btn}
          //onPress={this.kill(item)}
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
    console.log("kill player triggered");
    dispatch(killPlayer(player));
  },
  electNewDuke: (player) => {
    console.log("elect Duke triggered");
    dispatch(electDuke(player));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerActionScreen);
