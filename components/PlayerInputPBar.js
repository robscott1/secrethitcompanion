import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class PlayerInputPBar extends Component {
  constructor(props) {
    super(props);
  }

  state = {};

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            height: "100%",
            width: `${this.props.percentage}%`,
            backgroundColor: "black"
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 20,
    backgroundColor: "#FBB969",
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 20
  },
  boardGuide: {
    width: "60%",
    height: "100%",
    backgroundColor: "#FBB969",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20
  }
});

export default PlayerInputPBar;
