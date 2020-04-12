import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import LiberalGuide from "./LiberalGuide";
import FascistGuide from "./FascistGuide";
import PBar from "./PBar";
import { TouchableOpacity, Alert } from "react-native";

class Scoreboard extends Component {
  constructor(props) {
    super(props);

    this.incrementLScore = this.incrementLScore.bind(this);
    this.incrementFScore = this.incrementFScore.bind(this);
    this.alertWinner = this.alertWinner.bind(this);
  }

  state = {
    libScore: 0,
    fasScore: 0,
  };

  alertWinner() {
    if (this.state.fasScore == 5) {
      var string = "Fascist have taken over!";
    } else {
      var string = "Liberals stand strong!";
    }

    Alert.alert("Victory!", string, [
      { text: "New Game", onPress: () => console.log("New Game pressed") },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Ok", onPress: () => console.log("Ok Pressed") },
    ]);
  }

  incrementFScore() {
    if (this.state.fasScore < 5) {
      let lib = this.state.libScore;
      let fas = this.state.fasScore;

      let newFas = fas + 1;

      this.setState({
        libScore: lib,
        fasScore: newFas,
      });

      if (this.state.libScore === 5) {
        this.alertWinner();
      }
    }
  }

  incrementLScore() {
    if (this.state.libScore <= 4) {
      let lib = this.state.libScore;
      let fas = this.state.fasScore;

      let newLib = lib + 1;

      this.setState({
        libScore: newLib,
        fasScore: fas,
      });

      if (this.state.libScore === 4) {
        this.alertWinner();
      }
    }
  }

  render() {
    return (
      <View style={styles.row}>
        <View style={styles.container}>
          <PBar
            percentage={(this.state.libScore / 5) * 100}
            color={"#6592BC"}
          />
          <LiberalGuide />
          <View style={{ height: 15 }} />
          <PBar
            percentage={(this.state.fasScore / 6) * 100}
            color={"#BE5A48"}
          />
          <FascistGuide />
        </View>
        <View style={styles.btnCol}>
          <TouchableOpacity
            style={styles.lPlusBtn}
            onPress={this.incrementLScore}
          >
            <Text> + </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.fPlusBtn}
            onPress={this.incrementFScore}
          >
            <Text> + </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    width: "90%",
  },
  row: {
    flexDirection: "row",
  },
  btnCol: {
    width: 55,
    alignItems: "center",
    height: "100%",
    paddingRight: 30,
  },
  fPlusBtn: {
    marginTop: 5,
    marginBottom: 15, //custom fit, wont reuse
    borderWidth: 1,
    backgroundColor: "#BE5A48",
  },
  lPlusBtn: {
    marginTop: 6,
    marginBottom: 15, //custom fit, wont reuse
    borderWidth: 1,
    backgroundColor: "#6592BC",
  },
});

export default Scoreboard;
