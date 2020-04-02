import React, { Component } from "react";
import { View, StyleSheet, Button } from "react-native";
import FailedVoteBtn from "./FailedVoteBtn";

class FailedVoteCounter extends Component {
  state = {
    attempts: 0
  };

  render() {
    return (
      <View style={styles.container}>
        <FailedVoteBtn num={1} attempts={this.state.attempts} />
        <FailedVoteBtn num={2} attempts={this.state.attempts} />
        <FailedVoteBtn num={3} attempts={this.state.attempts} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingLeft: 30,
    paddingTop: 25
  }
});
export default FailedVoteCounter;
