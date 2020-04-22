import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class AddPlayerPBar extends Component {
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
            backgroundColor: "black",
            borderRadius: 5,
          }}
        >
          <View style={styles.benchmark} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 20,
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 1,
  },
  benchmark: {
    height: "100%",
    width: 200,
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default AddPlayerPBar;
