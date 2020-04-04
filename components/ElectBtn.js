import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ElectBtn = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Text>Elect {props.name} as Chancellor</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#F7E2C1",
    borderRadius: 5,
    height: "100%"
  },
  container: {
    height: 55,
    width: "80%"
  }
});

export default ElectBtn;
