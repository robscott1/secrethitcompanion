import React, { Component } from "react";
import { View, StyleSheet, Button } from "react-native";

class FailedVoteBtn extends Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <Button title="" style={styles.failedVoteBtn} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "beige",
    height: 45,
    width: 45,
    borderRadius: 45,
    borderColor: "#6592BC",
    borderWidth: 3,
    marginHorizontal: 30
  }
});

export default FailedVoteBtn;
