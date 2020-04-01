import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import LiberalGuide from "./LiberalGuide";
import FascistGuide from "./FascistGuide";
import PBar from "./PBar";

class Scoreboard extends Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <PBar percentage={80} color={"#6592BC"} />
        <LiberalGuide />
        <View style={{ height: 5 }} />
        <PBar percentage={50} color={"#BE5A48"} />
        <FascistGuide />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  }
});

export default Scoreboard;
