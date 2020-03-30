import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FailedVoteCounter from "./components/FailedVoteCounter";

export default function App() {
  return (
    <View style={styles.failedVotes}>
      <FailedVoteCounter />
    </View>
  );
}

const styles = StyleSheet.create({
  failedVotes: {
    backgroundColor: "beige",
    padding: 30
  }
});
