import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import LiberalGuide from "./LiberalGuide";
import FascistGuide from "./FascistGuide";
import PBar from "./PBar";

class Scoreboard extends Component {
  state = {};

  render() {
    return (
      <View>
        <PBar percentage={80} color={"#6592BC"} />
        <LiberalGuide />
        <PBar percentage={50} color={"#BE5A48"} />
        <FascistGuide />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Scoreboard;
