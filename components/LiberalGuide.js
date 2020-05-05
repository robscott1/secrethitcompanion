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
    backgroundColor: "#1F4F74",
    shadowOpacity: 0.5,
  },
  boardGuide: {
    width: "80%",
    height: "100%",
    backgroundColor: "#507C9D",
  },
});

export default LiberalGuide;
