import React, { Component } from "react";
import { View, StyleSheet, Button } from "react-native";
import FailedVoteBtn from "./FailedVoteBtn";

class FailedVoteCounter extends Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <FailedVoteBtn />
        <FailedVoteBtn />
        <FailedVoteBtn />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  }
});
export default FailedVoteCounter;
