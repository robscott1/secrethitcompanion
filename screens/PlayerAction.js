import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import FailedVoteCounter from "../components/FailedVoteCounter";
import ImageOrTimer from "../components/ImageOrTimer";
import ElectBtn from "../components/ElectBtn";
import KillBtn from "../components/KillBtn";

const PlayerActionScreen = props => {
  return (
    <View style={styles.container}>
      <FailedVoteCounter />
      <ImageOrTimer />
      <ElectBtn name={props.name} style={styles.btn} />
      <KillBtn name={props.name} style={styles.btn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#434343",
    height: "100%",
    width: "100%",
    padding: 5
  },
  btn: {
    paddingHorizontal: 20,
    marginVertical: 45
  }
});

export default PlayerActionScreen;
