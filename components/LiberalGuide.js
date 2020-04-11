import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class LiberalGuide extends Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boardGuide}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 20,
    backgroundColor: "#6592BC",
  },
  boardGuide: {
    width: "80%",
    height: "100%",
    backgroundColor: "#8ECEDD",
  },
});

export default LiberalGuide;
