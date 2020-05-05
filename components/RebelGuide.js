import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class RebelGuide extends Component {
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
    backgroundColor: "#B54F26",
    shadowOpacity: 0.5,
  },
  boardGuide: {
    width: "50%",
    height: "100%",
    backgroundColor: "#F59873",
  },
});

export default RebelGuide;
