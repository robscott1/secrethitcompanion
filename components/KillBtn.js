import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const KillBtn = (props) => {
  return (
    <View>
      <TouchableOpacity style={styles.btn}>
        <Text>Kill {props.player.id} </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#F7E2C1",
    borderRadius: 5,
    height: "100%",
  },
  container: {
    height: 55,
    width: "80%",
  },
});

export default KillBtn;
