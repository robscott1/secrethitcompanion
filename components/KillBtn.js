import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const KillBtn = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={props.onPress}>
        <Text>Kill Matt Cuento </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#F7E2C1",
    borderRadius: 5,
    height: 50,
    shadowOpacity: 0.7,
  },
  container: {
    height: 55,
    width: "90%",
    marginVertical: 40,
  },
});

export default KillBtn;
