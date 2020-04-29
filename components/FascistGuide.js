import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class FascistGuide extends Component {
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
    backgroundColor: "#BE5A48",
    shadowOpacity: 0.3,
  },
  boardGuide: {
    width: "50%",
    height: "100%",
    backgroundColor: "#F2654B",
  },
});

export default FascistGuide;
