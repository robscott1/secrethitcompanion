import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class AddPlayerPBar extends Component {
  constructor(props) {
    super(props);
  }

  state = {};

  render() {
    return (
      <View>
        <View style={{ alignItems: "center" }}>
          <Text>6 Players Minimum, 10 Players Maximum..</Text>
        </View>
        <View style={styles.container}>
          <View
            style={{
              height: "100%",
              width: `${this.props.percentage}%`,
              backgroundColor: "#0E3A5C",
              borderRadius: 5,
            }}
          ></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 20,
    borderColor: "#0E3A5C",
    borderRadius: 5,
    borderWidth: 1,
  },
});

export default AddPlayerPBar;
