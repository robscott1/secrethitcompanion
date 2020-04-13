import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { spotlight } from "../actions";
import { killPlayer } from "../actions";

import { connect } from "react-redux";

class PlayerCard extends Component {
  constructor(props) {
    super(props);

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    console.log("DBG Console - PlayerCard: handlePress triggered..");
    console.log("DBG Console - PlayerCard: purpose.. " + this.props.purpose);

    switch (this.props.purpose) {
      case "kill":
        console.log("DBG Console - PlayerCard: purpose.." + this.props.purpose);
        this.props.kill(this.props.id);
        break;

      case "elect":
        this.props.elect(this.props.id);
        break;

      case "start":
        this.props.delete(this.props.id);
        break;
    }
  }

  render() {
    var position = "";

    if (this.props.chancellor) {
      position = "Chancellor";
    } else if (this.props.president) {
      position = "President";
    }
    if (this.props.alive) {
      var dead = false;
    }

    return (
      <View style={styles.container}>
        <View style={styles.position}>
          <Text>{position}</Text>
        </View>
        <TouchableOpacity
          style={this.props.alive ? styles.alive : styles.dead}
          onPress={this.handlePress}
        >
          <Text>{this.props.id}</Text>
        </TouchableOpacity>
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
    margin: 10,
  },
  position: {
    backgroundColor: "#434343",
    color: "#FFF",
    width: "100%",
  },
  dead: {
    textDecorationLine: "line-through",
    margin: 8,
    borderRadius: 5,
  },
  alive: {
    margin: 8,
    borderRadius: 5,
  },
});

const mapStateToProps = (state) => ({
  ...state.playerReducer,
});

const mapDispatchToProps = (dispatch) => ({
  putOnSpotlight: (player) => {
    dispatch(spotlight(player));
  },
  kill: (player) => {
    dispatch(killPlayer(player));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerCard);
