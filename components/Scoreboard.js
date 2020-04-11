import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import LiberalGuide from "./LiberalGuide";
import FascistGuide from "./FascistGuide";
import PBar from "./PBar";
import { TouchableOpacity } from "react-native-gesture-handler";

class Scoreboard extends Component {
  constructor(props) {
    super(props);

    this.incrementLScore = this.incrementLScore.bind(this);
    this.incrementFScore = this.incrementFScore.bind(this);
  }

  state = {
    libScore: 0,
    fasScore: 0,
  };

  incrementFScore() {
    if (this.state.fasScore <= 6) {
      var lib = this.state.libScore;
      var fas = this.state.fasScore + 1;

      this.setState({
        libScore: lib,
        fasScore: fas,
      });
    }
  }

  incrementLScore() {
    if (this.state.libScore <= 5) {
      var lib = this.state.libScore + 1;
      var fas = this.state.fasScore;

      this.setState({
        libScore: lib,
        fasScore: fas,
      });
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
