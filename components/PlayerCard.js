import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { spotlight, electDuke, deletePlayer } from "../actions";
import { killPlayer } from "../actions";

import { connect } from "react-redux";
import { render } from "react-dom";

class PlayerCard extends Component {
  constructor(props) {
    super(props);

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    switch (this.props.purpose) {
      case "kill":
        this.props.kill(this.props.id);
        console.log("players after kill...");
        console.log(this.props.players);
        this.props.nav.navigate("game");
        break;

      case "elect":
        console.log("player list before Duke election..");
        console.log(this.props.players);
        this.props.elect(this.props.id);
        this.props.update;
        this.props.nav.navigate("game");
        break;

      case "start":
        this.props.delete(this.props.id);
        break;
    }
  }

  render() {
    var position = false;
    var title = "";

    if (this.props.duke) {
      title = "Duke";
      position = true;
    } else if (this.props.King) {
      title = "King";
      position = true;
    }
    if (this.props.alive) {
      var dead = false;
    } else {
      dead = true;
    }

    let deadCard = (
      <View style={styles.containerDead}>
        <TouchableOpacity
          style={this.props.alive ? styles.alive : styles.dead}
          onPress={this.handlePress}
        >
          <Text>{this.props.id}</Text>
        </TouchableOpacity>
      </View>
    );

    let positionCard = (
      <View style={styles.containerPosition}>
        <View style={styles.position}>
          <Text style={{ color: "white" }}>{title}</Text>
        </View>
        <TouchableOpacity
          style={this.props.alive ? styles.alive : styles.dead}
          onPress={this.handlePress}
        >
          <Text>{this.props.id}</Text>
        </TouchableOpacity>
      </View>
    );

    let normalCard = (
      <View style={styles.containerNormal}>
        <TouchableOpacity
          style={this.props.alive ? styles.alive : styles.dead}
          onPress={this.handlePress}
        >
          <Text>{this.props.id}</Text>
        </TouchableOpacity>
      </View>
    );

    if (dead === true) {
      return deadCard;
    }

    return position ? positionCard : normalCard;
  }
}

const styles = StyleSheet.create({
  containerPosition: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7E2C1",
    borderColor: "#434343",
    borderRadius: 5,
    borderWidth: 1,
    margin: 10,
    height: 50,
    shadowOpacity: 0.3,
  },
  containerNormal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7E2C1",
    borderColor: "#434343",
    borderRadius: 5,
    borderWidth: 1,
    margin: 10,
    height: 50,
    shadowOpacity: 0.3,
  },
  containerDead: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textDecorationLine: "line-through",
    backgroundColor: "red",
    borderColor: "#434343",
    borderRadius: 5,
    borderWidth: 1,
    margin: 10,
    height: 50,
    shadowOpacity: 0.3,
  },
  position: {
    backgroundColor: "#434343",
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
  elect: (player) => {
    dispatch(electDuke(player));
  },
  delete: (player) => {
    dispatch(deletePlayer(player));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerCard);
