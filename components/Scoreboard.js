import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Scoreboard extends Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <ProgressBar
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
