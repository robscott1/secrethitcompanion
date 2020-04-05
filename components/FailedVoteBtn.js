import React, { Component } from "react";
import { View, StyleSheet, Button } from "react-native";

class FailedVoteBtn extends Component {
  constructor(props) {
    super(props);
  }

  state = {};

  render() {
    if (this.props.num <= this.props.attempts) {
      return (
        <View style={styles.filled}>
          <View />
        </View>
      );
    } else {
      return (
        <View style={styles.unfilled}>
          <View />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  unfilled: {
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    width: 45,
    borderRadius: 45,
    borderColor: "#8ECEDD",
    borderWidth: 3,
    marginHorizontal: 30,
  },
  filled: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6592BC",
    height: 45,
    width: 45,
    borderRadius: 45,
    borderColor: "#6592BC",
    borderWidth: 3,
    marginHorizontal: 30,
  },
});

export default FailedVoteBtn;
