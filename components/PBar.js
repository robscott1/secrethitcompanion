import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";

class PBar extends Component {
  constructor(props) {
    super(props);
  }

  state = {};

  render() {
    return (
      <View
        style={{
          position: "relative",
          height: 5,
          width: "100%",
          paddingBottom: 3,
        }}
      >
        <View
          style={{
            height: "100%",
            backgroundColor: "blue",
            width: `${this.props.percentage}%`,
            backgroundColor: this.props.color,
          }}
        ></View>
      </View>
    );
  }
}

export default PBar;
