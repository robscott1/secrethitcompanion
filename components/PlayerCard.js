import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class EmojiDict extends Component {
  constructor(props) {
      super(props);
  }

  state = {
  };

  render() {
    var position = "";

    if (this.props.chancellor)  {
        position = "Chancellor";
    } else if (this.props.president) {
        position = "President";
    }

    if (this.props.alive) {
       var dead = false; 
    }

    return (
      <View style={styles.container}>
        <View style={styles.position}><Text>{position}</Text></View>
        <View style={this.props.alive ? styles.alive : styles.dead}><Text>{this.props.name}</Text></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7E2C1",
    borderColor: "#434343",
    borderRadius: 5,
    borderWidth: 1,
    margin: 10
  },
  position: {
    backgroundColor: "#434343",
    color: "#FFF",
    width: "100%"
  },
  dead: {
    textDecorationLine: "line-through",
    margin: 8,
    borderRadius: 5
  },
  alive: {
    margin: 8,
    borderRadius: 5
  }
});

export default EmojiDict;
